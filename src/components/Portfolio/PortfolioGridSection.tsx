import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PROJECTS = [
    {
        image: "/images/Portfolio1.png",
        title: "Web Design & Development",
        category: "Custom Website",
        slug: "web-development",
        description: "A full brand-to-website rebuild for a growing retail chain.",
        size: "tall",
    },
    {
        image: "/images/Portfolio2.png",
        title: "Video Animation",
        category: "Video Animation",
        slug: "video-animation",
        description: "A 90-second explainer video for a SaaS product launch.",
        size: "short",
    },
    {
        image: "/images/Portfolio3.png",
        title: "Mobile Apps",
        category: "Mobile Apps",
        slug: "mobile-apps",
        description: "A cross-platform booking app built for a hospitality group.",
        size: "short",
    },
    {
        image: "/images/Portfolio4.png",
        title: "Logo Design",
        category: "Branding & Identity",
        slug: "logo-design",
        description: "A full identity system for a specialty coffee roastery.",
        size: "tall",
    },
    {
        image: "/images/Portfolio/E-commerce-Solution-2.jpg",
        title: "E-Commerce Solution",
        category: "E-Commerce",
        slug: "ecommerce-solution",
        description: "A conversion-focused storefront rebuild for a fashion label.",
        size: "short",
    },
    {
        image: "/images/Portfolio/Web-App2.png",
        title: "Web/App Solution",
        category: "Web/App Solution",
        slug: "web-app-solution",
        description: "A custom booking portal with real-time availability sync.",
        size: "tall",
    },
    {
        image: "/images/Portfolio/Digital-Marketing-1.png",
        title: "Digital Marketing",
        category: "Digital Marketing",
        slug: "digital-marketing",
        description: "A multi-channel campaign that grew qualified leads 3x.",
        size: "tall",
    },
    {
        image: "/images/Portfolio/Social-Media-1.png",
        title: "Social Media Marketing",
        category: "Social Media",
        slug: "social-media-management",
        description: "A content system that took a local brand to 40K followers.",
        size: "short",
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.92 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 18, mass: 0.8 },
    },
};

const headerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const headerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className={`group relative overflow-hidden rounded-[28px] shadow-2xl ${project.size === "tall" ? "h-[420px] lg:h-[480px]" : "h-[280px] lg:h-[320px]"
                }`}
        >
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-7">
                <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.category}
                </span>
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white lg:text-xl">{project.title}</h3>
                    <Link
                        to={`/services/${project.slug}`}
                        aria-label={`View ${project.title}`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:rotate-45"
                    >
                        <ArrowUpRight strokeWidth={2.75} />
                    </Link>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-white/80">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function PortfolioGridSection() {
    return (
        <section className="w-full bg-white pb-20 pt-16 font-atyp md:pb-28 md:pt-20">
            <div className="mx-auto max-w-[1550px] px-6 md:px-12">
                <motion.div
                    className="mx-auto mb-14 max-w-2xl text-center"
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.span
                        variants={headerItem}
                        className="mb-6 inline-flex w-fit items-center rounded-full bg-neutral-200/70 px-5 py-2 text-sm text-neutral-700"
                    >
                        Recent Work
                    </motion.span>

                    <motion.h2
                        variants={headerItem}
                        className="text-[32px] font-light leading-[1.2] text-neutral-900 sm:text-[38px] lg:text-[42px]"
                    >
                        A Showcase Of{" "}
                        <span className="font-semibold text-brand">Our Craft</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-6">
                        <ProjectCard project={PROJECTS[0]} />
                        <ProjectCard project={PROJECTS[2]} />
                        <ProjectCard project={PROJECTS[4]} />
                        <ProjectCard project={PROJECTS[6]} />
                    </div>
                    <div className="flex flex-col gap-6">
                        <ProjectCard project={PROJECTS[1]} />
                        <ProjectCard project={PROJECTS[3]} />
                        <ProjectCard project={PROJECTS[5]} />
                        <ProjectCard project={PROJECTS[7]} />
                    </div>
                </div>
            </div>
        </section>
    );
}