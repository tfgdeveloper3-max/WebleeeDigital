"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useContactModal } from "../../context/ContactModalContext";

const FAQS = [
    {
        question: "How do you start a new project?",
        answer:
            "We start by understanding your goals, requirements, audience, and challenges. From there, we recommend the right approach, technology, and project roadmap.",
    },
    {
        question: "Can you work with our existing website or technology?",
        answer:
            "Absolutely. Share what you're currently using, and we'll assess your setup, integrations, and infrastructure before recommending the best way forward.",
    },
    {
        question: "How do you make sure my project can scale?",
        answer:
            "We build with the future in mind. Our team considers performance, architecture, integrations, security, and scalability from the beginning.",
    },
    {
        question: "Will I be involved during development?",
        answer:
            "Yes. We keep you involved throughout the process with regular updates, reviews, and feedback points so the final solution stays aligned with your vision.",
    },
    {
        question: "Do you provide support after launch?",
        answer:
            "Yes. Once your project is live, we can continue supporting it through maintenance, updates, optimization, new features, and ongoing digital growth.",
    },
];

function FaqItem({
    index,
    question,
    answer,
    isOpen,
    onToggle,
}: {
    index: number;
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.button
            onClick={onToggle}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full rounded-2xl bg-[#DCF2E3] px-6 py-4 text-left transition-colors duration-300 hover:bg-[#c9ecd4]"
        >
            <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-neutral-800 md:text-[15px]">
                    {index + 1}. {question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/70"
                >
                    <ChevronDown className="h-4 w-4 text-neutral-700" />
                </motion.span>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pt-3 text-sm leading-relaxed text-neutral-500">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { openModal } = useContactModal();

    return (
        <section className="w-full bg-[#FFFEFA] py-16 font-atyp md:py-20">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-12">
                {/* LEFT */}
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block rounded-full bg-[#D8E0DB] px-4 py-1.5 text-xs font-medium text-neutral-700"
                    >
                        FAQ's
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-3xl font-bold leading-tight text-neutral-900 md:text-4xl"
                    >
                        Let's Talk About
                        <br />
                        <span className="text-[#237B43]">Your Project</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500"
                    >
                        Have questions before getting started? Here are some of the things our clients commonly ask about how we plan, build, launch, and support digital projects.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-7 flex items-center gap-3"
                    >
                        <button onClick={() => openModal()} className="rounded-full bg-gradient-to-r from-[#F2530F] via-[#DB1B3F] to-[#B23FC9] px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105">
                            Learn More Us
                        </button>
                        <button onClick={() => openModal()} className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#DB1B3F] to-[#B23FC9] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-45">
                            <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT - FAQ list */}
                <div className="flex flex-col gap-3">
                    {FAQS.map((item, i) => (
                        <FaqItem
                            key={i}
                            index={i}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}