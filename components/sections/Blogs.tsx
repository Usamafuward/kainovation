"use client";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock, FiBookOpen } from "react-icons/fi";
import { useRouter } from 'next/navigation';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  slug: string;
  imageUrl?: string;
}

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
  };
}

interface WPTerm {
  taxonomy: string;
  name: string;
}

const WORDPRESS_URL = "https://kainovation-b4c60f.ingress-earth.ewp.live";
const CACHE_KEY = "home_blog_posts_cache";
const CACHE_EXPIRY = 0 * 60 * 1000; // 30 minutes cache for home page

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut" },
  },
};

// Loading skeleton for blog cards
const BlogCardSkeleton = () => (
  <div className="group relative bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md animate-pulse">
    {/* Header skeleton */}
    <div className="h-24 sm:h-28 md:h-32 bg-linear-to-br from-gray-300 to-gray-400 relative">
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
        <div className="w-20 h-6 bg-white/30 rounded-full"></div>
      </div>
    </div>

    {/* Content skeleton */}
    <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
      {/* Meta skeleton */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-20 h-4 bg-gray-300 rounded"></div>
        <div className="w-16 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Title skeleton */}
      <div className="space-y-2">
        <div className="w-full h-5 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-5 bg-gray-300 rounded"></div>
      </div>

      {/* Excerpt skeleton */}
      <div className="space-y-2">
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
      </div>

      {/* Button skeleton */}
      <div className="pt-3 sm:pt-4 border-t border-gray-200">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>();
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchLatestPosts = async () => {
      // Check cache first
      let cachedData = null;
      try {
        if (typeof window !== "undefined" && window.localStorage) {
          cachedData = localStorage.getItem(CACHE_KEY);
        }
      } catch {
        console.warn("LocalStorage not available, skipping cache");
      }

      const now = Date.now();

      if (cachedData) {
        try {
          const parsedCache = JSON.parse(cachedData);
          if (now - parsedCache.timestamp < CACHE_EXPIRY) {
            setBlogPosts(parsedCache.posts);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error("Error parsing cache", e);
        }
      }

      // If no WordPress URL configured, use fallback
      if (!WORDPRESS_URL) {
        console.warn("WordPress URL not configured, using fallback posts");
        setUsingFallback(true);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed&per_page=3&orderby=date&order=desc`
        );

        if (!res.ok) throw new Error("Failed to fetch posts");

        const wpPosts = await res.json();

        // Format WordPress data
        const formattedPosts: BlogPost[] = wpPosts.map(
          (post: WPPost) => {
            const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
            const categoriesEmbedded = post._embedded?.["wp:term"]?.[0] || [];
            const category =
              categoriesEmbedded.find(
                (term: WPTerm) => term.taxonomy === "category"
              )?.name || "Uncategorized";

            // Calculate read time
            const wordCount = post.content.rendered.split(/\s+/).length;
            const readTime = `${Math.ceil(wordCount / 200)} min read`;

            return {
              id: post.id,
              title: post.title.rendered,
              excerpt: post.excerpt.rendered
                .replace(/<p>|<\/p>|\[…\]/g, "")
                .replace(/<[^>]*>/g, "") // Remove any remaining HTML tags
                .trim(),
              date: new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              category: category,
              readTime: readTime,
              slug: post.slug,
              imageUrl: featuredMedia?.source_url || "",
            };
          }
        );

        setBlogPosts(formattedPosts);
        setUsingFallback(false);

        // Save to cache
        try {
          if (typeof window !== "undefined" && window.localStorage) {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                posts: formattedPosts,
                timestamp: now,
              })
            );
          }
        } catch (e) {
          console.warn("Could not save to localStorage:", e);
        }
      } catch (error) {
        console.error("Failed to fetch WordPress posts:", error);
        console.log("Using fallback posts");
        setUsingFallback(true);
        // Keep fallback posts that were set in useState
      }

      setLoading(false);
    };

    fetchLatestPosts();
  }, []);

  const handleBlogClick = (post: BlogPost) => {
    console.log("Blog post clicked:", post.slug);
    router.push(`/blog/${post.slug}`);
  };

  return (
    <section
      className="relative bg-slate-50 py-12 sm:py-16 md:py-20"
      id="blogs"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] md:bg-[size:4rem_4rem]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 mb-4 sm:mb-5 md:mb-6"
            style={{ backgroundColor: "rgba(147, 197, 253, 0.1)" }}
          >
            <FiBookOpen
              className="mr-2 text-xs sm:text-sm md:text-base"
              style={{ color: "#10064C" }}
            />
            <span
              className="text-xs sm:text-sm md:text-base font-medium"
              style={{ color: "#10064C" }}
            >
              {usingFallback ? "Featured Insights" : "Latest Insights"}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
              Our Blogs
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest trends in{" "}
            <span className="font-semibold" style={{ color: "#10064C" }}>
              AI
            </span>
            ,{" "}
            <span className="font-semibold" style={{ color: "#10064C" }}>
              Data Science
            </span>
            , and{" "}
            <span className="font-semibold" style={{ color: "#10064C" }}>
              Technology Innovation
            </span>
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        {loading ? (
          // Loading Skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mx-auto">
            {Array.from({ length: 3 }, (_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {blogPosts?.map((post, index) => (
              <motion.article
                key={post.id}
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
                  <motion.div
                    className="pt-3 sm:pt-4 border-t border-gray-200"
                    whileHover={{ x: 3 }}
                  >
                    <motion.button
                      onClick={() => handleBlogClick(post)}
                      className="group/link inline-flex items-center font-semibold text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base"
                    >
                      Read More
                      <FiArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          className="text-center mt-12 sm:mt-14 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <motion.button
            className="group relative text-white font-bold bg-linear-to-r from-blue-500 to-indigo-600 py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12 rounded-full overflow-hidden shadow-xl sm:shadow-2xl text-sm sm:text-base md:text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 30px -8px rgba(16, 6, 76, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/blog">
              <span className="relative z-10 flex items-center">
                View All Articles
                <FiArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
              layoutId="button-bg"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
