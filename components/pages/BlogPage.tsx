"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  FiArrowRight,
  FiSearch,
  FiTag,
  FiBookOpen,
  FiCalendar,
  FiClock,
  FiZap,
  FiTrendingUp,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useRouter } from 'next/navigation';

// Types for WordPress data
interface FormattedPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  content: string;
  slug: string;
  imageUrl: string;
  tags: string[];
  readTime: string;
}

const POSTS_PER_PAGE = 6;
const WORDPRESS_URL = "https://kainovation-b4c60f.ingress-earth.ewp.live";
const CACHE_KEY = "blog_posts_cache";
const CACHE_EXPIRY = 0 * 60 * 1000; // 1 hour cache

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<Array<{ taxonomy: string; name: string }>>;
    author?: Array<{ name: string }>;
  };
}

interface WPTerm {
  taxonomy: string;
  name: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.1,
      duration: 0.3 
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    y: 30, 
    opacity: 0, 
    scale: 0.98 
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Loading skeleton component for blog cards
const BlogCardSkeleton = () => (
  <div className="group relative bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-lg">
    {/* Image skeleton */}
    <div className="h-48 bg-linear-to-r from-gray-200 to-gray-300 animate-pulse relative">
      <div className="absolute top-4 left-4">
        <div className="w-20 h-6 bg-white/70 rounded-full animate-pulse"></div>
      </div>
    </div>
    
    {/* Content skeleton */}
    <div className="p-6 space-y-4">
      {/* Meta information skeleton */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-16 h-3 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-12 h-3 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
      
      {/* Title skeleton */}
      <div className="space-y-2">
        <div className="w-full h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-3/4 h-6 bg-gray-300 rounded animate-pulse"></div>
      </div>
      
      {/* Excerpt skeleton */}
      <div className="space-y-2">
        <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
      
      {/* Button skeleton */}
      <div className="pt-4 border-t border-gray-200/80">
        <div className="w-32 h-5 bg-blue-200 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<FormattedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  // Fetch posts from WordPress API with caching
  useEffect(() => {
    const fetchPosts = async () => {
      // Check cache first - only if localStorage is available
      let cachedData = null;
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          cachedData = localStorage.getItem(CACHE_KEY);
        }
      } catch {
        console.warn("LocalStorage not available, skipping cache");
      }
      
      const now = Date.now();
      
      if (cachedData) {
        try {
          const parsedCache = JSON.parse(cachedData);
          // Use cache if not expired
          if (now - parsedCache.timestamp < CACHE_EXPIRY) {
            setPosts(parsedCache.posts);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error("Error parsing cache", e);
        }
      }

      if (!WORDPRESS_URL) {
        setError(
          "WordPress URL is not configured. Please set NEXT_PUBLIC_WORDPRESS_URL in your environment variables."
        );
        setLoading(false);
        return;
      }
      
      try {
        const res = await fetch(
          `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed&per_page=100`
        );
        if (!res.ok) throw new Error("Failed to fetch posts");

        const wpPosts = await res.json();

        // Format WordPress data to match our structure
        const formattedPosts: FormattedPost[] = wpPosts.map((post: WPPost) => {
          const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
          const categoriesEmbedded = post._embedded?.["wp:term"]?.[0] || [];
          
          // Change specific post's category if matches the condition
          let categoryName = categoriesEmbedded[0]?.name || "Uncategorized";
          if (categoryName === "Uncategorized" && post.title.rendered.includes("Why AI ‘Inbreeding’")) {
            categoryName = "AI";
          }
          const category =
            categoriesEmbedded.find((term: WPTerm) => term.taxonomy === "category")
              ?.name || "Uncategorized";

          // Calculate read time
          const wordCount = post.content.rendered.split(/\s+/).length;
          const readTime = `${Math.ceil(wordCount / 200)} min read`;          

          const tagsEmbedded = post._embedded?.["wp:term"]?.[1] || [];

          return {
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered
              .replace(/<p>|<\/p>|\[…\]/g, "")
              .trim(),
            date: new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            category: category,
            author: post._embedded?.author?.[0]?.name || "Admin",
            content: post.content.rendered,
            slug: post.slug,
            imageUrl: featuredMedia?.source_url || "",
            tags: tagsEmbedded
              .filter((term: WPTerm) => term.taxonomy === "post_tag")
              .map((tag: WPTerm) => tag.name),
            readTime: readTime,
          };
        });

        setPosts(formattedPosts);
        setLoading(false);
        
        // Save to cache - only if localStorage is available
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                posts: formattedPosts,
                timestamp: now
              })
            );
          }
        } catch (e) {
          console.warn("Could not save to localStorage:", e);
        }
        
        // Background refresh after 5 minutes
        setTimeout(() => {
          fetchPosts();
        }, 5 * 60 * 1000);
        
      } catch (err) {
        if (!cachedData) {
          setError("Failed to load blog posts. Please try again later.");
          console.error("Failed to fetch posts:", err);
        }
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    const allCats = [
      "All",
      ...Array.from(new Set(posts.map((p) => p.category))),
    ];
    return allCats;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch =
        selectedCategory === "All" || post.category === selectedCategory;
      const searchMatch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [posts, searchQuery, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = async (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(newPage);
      
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setIsAnimating(false);
        window.scrollTo({ top: 800, behavior: "smooth" });
      }, 100);
    }
  };

  const handleBlogClick = (post: FormattedPost) => {
    router.push(`/blog/${post.slug}`);
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section - Always visible */}
      <section className="relative min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10 pt-28 md:pt-32 pb-16">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center bg-linear-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6"
              variants={itemVariants}
            >
              <FiBookOpen className="text-sky-400 mr-2" />
              <span className="text-sm font-medium text-sky-300">
                Latest Insights & Knowledge
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                Our
              </span>{" "}
              <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Blogs
              </span>
            </motion.h1>
            <motion.p
              className="text-md sm:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Explore forward-thinking insights in AI, data science, and
              business automation. Stay ahead with expert analysis and
              real-world case studies.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-10 justify-center"
              variants={itemVariants}
            >
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiTrendingUp className="text-emerald-400 mr-2" />
                <span className="text-sm">Data Analytics</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiZap className="text-purple-400 mr-2" />
                <span className="text-sm">AI Technology</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiBookOpen className="text-blue-400 mr-2" />
                <span className="text-sm">Case Studies</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiUser className="text-orange-400 mr-2" />
                <span className="text-sm">Innovation</span>
              </div>
            </motion.div>
            <motion.button
              className="group relative bg-linear-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl shadow-sky-500/25"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("blogs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10 flex items-center">
                Start Reading
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section
        className="relative bg-slate-50 py-12 sm:py-16 md:py-20 min-h-screen"
        id="blogs"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] md:bg-[size:4rem_4rem]" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          {/* Header Section - Always visible */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <FiZap className="mr-2 text-base" style={{ color: "#10064C" }} />
              <span
                className="text-base font-medium"
                style={{ color: "#10064C" }}
              >
                Featured Articles
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Latest Insights &
              </span>
              <br />
              <span className="text-slate-800">Expert Analysis</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive deep into the world of AI, data science, and automation with
              our expert-authored articles
            </p>
          </motion.div>

          {/* Search and Filter Controls - Always visible */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex-grow">
              <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-2xl z-10" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              />
            </div>
            <div className="relative">
              <FiTag className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-2xl z-10" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto appearance-none pl-12 pr-10 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Blog Posts Grid - Shows loading or content */}
          {loading ? (
            // Loading Skeleton Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
              {Array.from({ length: POSTS_PER_PAGE }, (_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            // Error State
            <div className="text-center py-20">
              <div className="bg-white rounded-xl shadow-lg max-w-md mx-auto p-8">
                <div className="text-5xl mb-4">⚠️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Error Loading Content
                </h3>
                <p className="text-gray-600 mb-6">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            // Actual Blog Posts
            <>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]"
                key={`${currentPage}-${selectedCategory}-${searchQuery}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {paginatedPosts.map((post, index) => (
                  <motion.article
                    key={`${post.id}-${currentPage}`}
                    className="group relative bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
                    variants={cardVariants}
                    custom={index}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    {/* Header with Image */}
                    {post.imageUrl ? (
                      <div
                        className="h-48 bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url(${post.imageUrl})` }}
                      >
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-32 bg-gray-200 border-b" />
                    )}

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <FiCalendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FiClock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />

                      {/* Excerpt */}
                      <div
                        className="text-gray-600 text-sm leading-relaxed line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />

                      {/* Read More Button */}
                      <div className="pt-4 border-t border-gray-200/80">
                        <motion.button
                          onClick={() => handleBlogClick(post)}
                          className="group/link inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors text-sm"
                          whileHover={{ x: 3 }}
                        >
                          Read Full Article
                          <FiArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              {/* No Articles Found State */}
              {filteredPosts.length === 0 && (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-20 h-20 bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiBookOpen className="text-2xl text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    No Articles Found
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    We couldn&apos;t find any articles matching your search
                    criteria. Try adjusting your search or filter options.
                  </p>
                </motion.div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <motion.div
                  className="flex items-center justify-center mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1 || isAnimating}
                      className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                        currentPage === 1 || isAnimating
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100 hover:scale-105"
                      }`}
                    >
                      <FiChevronLeft size={20} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (pageNum) => (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          disabled={isAnimating}
                          className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all ${
                            currentPage === pageNum
                              ? "bg-blue-600 text-white scale-110"
                              : isAnimating
                              ? "text-gray-400 cursor-not-allowed"
                              : "text-gray-700 hover:bg-gray-100 hover:scale-105"
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    )}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages || isAnimating}
                      className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                        currentPage === totalPages || isAnimating
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100 hover:scale-105"
                      }`}
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </nav>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}