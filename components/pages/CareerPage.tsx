'use client';

import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
    FiArrowRight, 
    FiSearch, 
    FiMapPin, 
    FiBriefcase, 
    FiDollarSign, 
    FiZap, 
    FiUsers, 
    FiTrendingUp,
    FiCode,
    FiBarChart2,
    FiHeart
} from 'react-icons/fi';

// --- DATA ---
// Interface for a job posting
interface Job {
    id: number;
    title: string;
    department: 'IT' | 'Marketing' | 'Data Science' | 'Human Resources';
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    salary: string;
    description: string;
    requirements: string[];
}

// Sample job data, expanded for a more complete look
const allJobs: Job[] = [
    {
        id: 1,
        title: "Fullstack Engineer (MERN)",
        department: "IT",
        location: "Colombo, Sri Lanka",
        type: "Full-time",
        salary: "LKR 100,000 - 200,000/month",
        description: "Build scalable web applications using modern React and Node.js technologies.",
        requirements: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"]
    },
    {
        id: 2,
        title: "Senior DevOps Engineer",
        department: "IT",
        location: "Remote",
        type: "Full-time",
        salary: "Competitive",
        description: "Lead our cloud infrastructure and deployment automation initiatives.",
        requirements: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
        id: 3,
        title: "UI/UX Designer",
        department: "IT",
        location: "Colombo, Sri Lanka",
        type: "Contract",
        salary: "Project-based",
        description: "Design intuitive user experiences for our data analytics platforms.",
        requirements: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"]
    },
    {
        id: 4,
        title: "Digital Marketing Specialist",
        department: "Marketing",
        location: "Colombo, Sri Lanka",
        type: "Full-time",
        salary: "LKR 80,000 - 150,000/month",
        description: "Drive our digital marketing campaigns and brand awareness initiatives.",
        requirements: ["Google Analytics", "SEO", "Social Media", "Content Marketing"]
    },
    {
        id: 5,
        title: "Content Strategist",
        department: "Marketing",
        location: "Remote",
        type: "Part-time",
        salary: "Competitive",
        description: "Create compelling content strategies for our technology solutions.",
        requirements: ["Content Writing", "SEO", "Marketing Strategy", "Analytics"]
    },
    {
        id: 6,
        title: "Principal Data Scientist",
        department: "Data Science",
        location: "Colombo, Sri Lanka",
        type: "Full-time",
        salary: "LKR 200,000 - 350,000/month",
        description: "Lead machine learning initiatives and advanced analytics projects.",
        requirements: ["Python", "Machine Learning", "Deep Learning", "Statistics", "SQL"]
    },
    {
        id: 7,
        title: "HR Business Partner",
        department: "Human Resources",
        location: "Colombo, Sri Lanka",
        type: "Full-time",
        salary: "Competitive",
        description: "Support our growing team with strategic HR initiatives and talent development.",
        requirements: ["HR Management", "Recruitment", "Employee Relations", "Performance Management"]
    }
];

// Helper to group jobs by department
const groupJobsByDepartment = (jobs: Job[]) => {
    return jobs.reduce((acc, job) => {
        const { department } = job;
        if (!acc[department]) acc[department] = [];
        acc[department].push(job);
        return acc;
    }, {} as Record<string, Job[]>);
};

// Department icons mapping
const departmentIcons = {
    'IT': FiCode,
    'Marketing': FiTrendingUp,
    'Data Science': FiBarChart2,
    'Human Resources': FiUsers
};

// Department colors mapping
const departmentColors = {
    'IT': 'from-cyan-500 to-blue-600',
    'Marketing': 'from-emerald-500 to-teal-600',
    'Data Science': 'from-violet-500 to-purple-600',
    'Human Resources': 'from-pink-500 to-rose-600'
};

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function CareerPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredJobs = useMemo(() => {
        if (!searchQuery) return allJobs;
        const lowercasedQuery = searchQuery.toLowerCase();
        return allJobs.filter(job =>
            job.title.toLowerCase().includes(lowercasedQuery) ||
            job.department.toLowerCase().includes(lowercasedQuery) ||
            job.location.toLowerCase().includes(lowercasedQuery)
        );
    }, [searchQuery]);

    const groupedJobs = useMemo(() => groupJobsByDepartment(filteredJobs), [filteredJobs]);

    return (
        <main className="overflow-hidden">
            {/* 
                SECTION: PAGE HERO
            */}
            <section className="relative min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex justify-center items-center overflow-hidden">
                {/* Background Elements */}
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

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10 pt-28 md:pt-32 pb-16">
                    <motion.div
                        className="text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center bg-linear-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <FiHeart className="text-sky-400 mr-2" />
                            <span className="text-sm font-medium text-sky-300">
                                Join Our Innovation Team
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
                            variants={itemVariants}
                        >
                            <span className="bg-linear-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                                Shape the Future
                            </span>
                            <br />
                            <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                                With Us
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                            variants={itemVariants}
                        >
                            Join our team of innovators and help us build the future of business automation through cutting-edge data science and AI solutions.
                        </motion.p>

                        {/* Department Categories */}
                        <motion.div
                            className="flex flex-wrap gap-4 mb-10 justify-center"
                            variants={itemVariants}
                        >
                            <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <FiCode className="text-cyan-400 mr-2" />
                                <span className="text-sm">Software Engineering</span>
                            </div>
                            <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <FiBarChart2 className="text-purple-400 mr-2" />
                                <span className="text-sm">Data Science</span>
                            </div>
                            <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <FiTrendingUp className="text-green-400 mr-2" />
                                <span className="text-sm">Marketing</span>
                            </div>
                            <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <FiUsers className="text-pink-400 mr-2" />
                                <span className="text-sm">Human Resources</span>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.button
                            className="group relative bg-linear-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl shadow-sky-500/25"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span className="relative z-10 flex items-center">
                                View Open Positions
                                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* 
                SECTION: JOB LISTINGS
            */}
            <section id="jobs-section" className="relative bg-slate-50 py-12 sm:py-16 md:py-20">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
                            <FiZap className="mr-2 text-base" style={{ color: "#10064C" }} />
                            <span
                                className="text-base font-medium"
                                style={{ color: "#10064C" }}
                            >
                                Open Positions
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                            <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
                                Current
                            </span>
                            <br />
                            <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
                                Opportunities
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Discover your next career move with positions that challenge and inspire innovation.
                        </p>

                        {/* Enhanced Search Bar */}
                        <div className="relative max-w-2xl mx-auto">
                            <FiSearch className="absolute top-1/2 left-6 -translate-y-1/2 text-gray-400 text-2xl z-10" />
                            <input 
                                type="text"
                                placeholder="Search jobs by title, department, or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-16 pr-6 py-5 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 shadow-lg shadow-blue-500/5 text-md md:text-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Job Listings */}
                    <div className="w-full mx-auto">
                        <motion.div 
                            className='space-y-16'
                            variants={staggerVariants} 
                            initial="hidden" 
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {Object.keys(groupedJobs).length > 0 ? (
                                Object.entries(groupedJobs).map(([department, jobs]) => {
                                    const IconComponent = departmentIcons[department as keyof typeof departmentIcons];
                                    const gradientColor = departmentColors[department as keyof typeof departmentColors];
                                    
                                    return (
                                        <motion.div key={department} variants={itemVariants}>
                                            {/* Department Header */}
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className={`w-12 h-12 bg-linear-to-r ${gradientColor} rounded-xl flex items-center justify-center shadow-lg`}>
                                                    <IconComponent className="text-white text-xl" />
                                                </div>
                                                <h3 className="text-3xl font-black text-slate-800">
                                                    {department}
                                                </h3>
                                                <div className="h-px bg-linear-to-r from-gray-300 to-transparent flex-1 ml-4" />
                                            </div>

                                            {/* Jobs Grid */}
                                            <div className="grid gap-6 md:grid-cols-2">
                                                {jobs.map(job => (
                                                    <motion.div 
                                                        key={job.id}
                                                        className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300/50 hover:-translate-y-2"
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02 }}
                                                    >
                                                        <div className="flex flex-col h-full">
                                                            {/* Job Header */}
                                                            <div className="flex items-start justify-between mb-4">
                                                                <div className="flex-1">
                                                                    <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                                                                        {job.title}
                                                                    </h4>
                                                                    <p className="text-gray-600 text-sm mb-3">
                                                                        {job.description}
                                                                    </p>
                                                                </div>
                                                                <div className={`w-8 h-8 bg-linear-to-r ${gradientColor} rounded-lg flex items-center justify-center shrink-0`}>
                                                                    <IconComponent className="text-white text-sm" />
                                                                </div>
                                                            </div>

                                                            {/* Job Details */}
                                                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mb-4">
                                                                <span className="flex items-center gap-1.5">
                                                                    <FiBriefcase className="text-xs" /> 
                                                                    {job.type}
                                                                </span>
                                                                <span className="flex items-center gap-1.5">
                                                                    <FiMapPin className="text-xs" /> 
                                                                    {job.location}
                                                                </span>
                                                                <span className="flex items-center gap-1.5">
                                                                    <FiDollarSign className="text-xs" /> 
                                                                    {job.salary}
                                                                </span>
                                                            </div>

                                                            {/* Requirements */}
                                                            <div className="flex-1 mb-4">
                                                                <p className="text-xs font-semibold text-gray-700 mb-2">Key Skills:</p>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {job.requirements.slice(0, 4).map((req, idx) => (
                                                                        <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200">
                                                                            {req}
                                                                        </span>
                                                                    ))}
                                                                    {job.requirements.length > 4 && (
                                                                        <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
                                                                            +{job.requirements.length - 4} more
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* Apply Button */}
                                                            <motion.button
                                                                className="group/button w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
                                                                whileHover={{ scale: 1.02 }}
                                                                whileTap={{ scale: 0.98 }}
                                                            >
                                                                <span className="flex items-center justify-center">
                                                                    Apply Now
                                                                    <FiArrowRight className="ml-2 group-hover/button:translate-x-1 transition-transform" />
                                                                </span>
                                                            </motion.button>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    );
                                })
                            ) : (
                                <motion.div 
                                    variants={itemVariants} 
                                    className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50"
                                >
                                    <div className="w-16 h-16 bg-linear-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FiSearch className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-700 mb-2">No Positions Found</h3>
                                    <p className="text-gray-500">Your search for &quot;{searchQuery}&quot; didn&apos;t match any openings.</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 
                SECTION: SPONTANEOUS APPLICATION
            */}
            <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20">
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
                            <FiHeart className="mr-2 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">
                                Don&apos;t See Your Perfect Role?
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black mb-6">
                            <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                                We&apos;re Always Looking
                            </span>
                            <br />
                            <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                                for Great Talent
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Join our talent pool! We&apos;re constantly growing and would love to hear from passionate individuals who share our vision for innovation.
                        </p>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-500/10 border border-blue-200/50">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                Send us your CV
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Email your resume and portfolio to our talent team
                            </p>
                            <motion.a
                                href="mailto:talent@kainovation.com"
                                className="inline-flex items-center bg-linear-to-r from-blue-500 to-indigo-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/25 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                talent@kainovation.com
                                <FiArrowRight className="ml-2" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}