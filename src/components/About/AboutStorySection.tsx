import { motion, type Variants } from "motion/react";

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 85, damping: 16, mass: 1, delay: 0.2 },
    },
};

export default function AboutStorySection() {
    return (
        <section className="w-full bg-white py-20 font-atyp md:py-28">
            <motion.div
                className="mx-auto grid max-w-[1550px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:px-12"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.div variants={imageReveal} className="order-2 md:order-1">
                    <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-2">
                        <img
                            src="/images/about/story.png"
                            alt="Weblee's early workspace"
                            className="h-full max-h-[520px] w-full rounded-[22px] object-cover"
                        />
                    </div>
                </motion.div>

                <div className="order-1 md:order-2">
                    <motion.span
                        variants={item}
                        className="mb-6 inline-flex w-fit items-center rounded-full bg-neutral-200/70 px-5 py-2 text-sm text-neutral-700"
                    >
                        Our Story
                    </motion.span>

                    <motion.h2
                        variants={item}
                        className="text-[32px] font-light leading-[1.2] text-neutral-900 sm:text-[38px] lg:text-[42px]"
                    >
                        Started In A Small Room,{" "}
                        <span className="font-semibold text-brand">Built For The Long Run</span>
                    </motion.h2>

                    <motion.p variants={item} className="mt-6 text-[15px] leading-relaxed text-neutral-500">
                        Weblee began with three people, one laptop each, and a shared
                        frustration with agencies that treated every client the same way.
                        We wanted to build something different — a studio that actually
                        listens before it designs.
                    </motion.p>

                    <motion.p variants={item} className="mt-4 text-[15px] leading-relaxed text-neutral-500">
                        What started as small website builds for local businesses has
                        grown into a full digital partner for brands across e-commerce,
                        SaaS, and hospitality. The team is bigger now, but the way we work
                        hasn't changed: understand the business first, design second.
                    </motion.p>

                    <motion.p variants={item} className="mt-4 text-[15px] leading-relaxed text-neutral-500">
                        Today, Weblee is a team of designers, developers, strategists, and
                        marketers who all care about the same thing — building digital
                        work that actually moves the needle for the people who hired us.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}