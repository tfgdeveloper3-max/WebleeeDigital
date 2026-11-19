import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Check, Package } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type ThankYouState = {
    name?: string;
    plan?: string | null;
} | null;

export default function ThankYouPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as ThankYouState;

    const goBack = () => {
        if (location.key !== "default") {
            navigate(-1);
        } else {
            navigate("/");
        }
    };
    const firstName = state?.name?.trim().split(/\s+/)[0];
    const plan = state?.plan;

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thank You | Weblee";
    }, []);

    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#E9E9E9] px-6 pb-20 pt-28 font-atyp md:px-12 md:pt-36">
            <div
                className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#91CD89]/30 blur-3xl"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
                <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
                    className="relative mb-8 flex h-24 w-24 items-center justify-center"
                >
                    <motion.span
                        className="absolute inset-0 rounded-full bg-brand/25"
                        animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                    />
                    <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#147237] to-[#91CD89] text-white shadow-xl shadow-brand/30">
                        <Check className="h-11 w-11" strokeWidth={3} />
                    </span>
                </motion.div>

                <span className="animate__animated animate__fadeInUp mb-6 inline-flex w-fit items-center rounded-full bg-white px-5 py-2 text-sm text-neutral-700 shadow-sm">
                    Message Received
                </span>

                <h1 className="animate__animated animate__fadeInUp text-[40px] font-semibold uppercase leading-[1.05] text-neutral-900 sm:text-[60px] lg:text-[72px]">
                    <span className="text-brand">Thank You</span>
                    {firstName && <span className="font-light text-black">, {firstName}</span>}
                </h1>

                <p className="animate__animated animate__fadeInUp mt-6 max-w-xl text-[16px] leading-relaxed text-neutral-500">
                    Your vision just found its digital home. Our team has received your message and will get back to you within 24 hours with a free consultation tailored to your goals.
                </p>

                {plan && (
                    <div className="animate__animated animate__fadeInUp mt-6 flex max-w-full items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-neutral-700 shadow-sm">
                        <Package className="h-4 w-4 shrink-0 text-brand" />
                        <span className="truncate">
                            Selected Package: <span className="font-semibold text-brand">{plan}</span>
                        </span>
                    </div>
                )}

                <div className="animate__animated animate__fadeInUp mt-10 flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-2">
                        <Link
                            to="/"
                            className="btn-sweep relative overflow-hidden rounded-full bg-cta-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-lg hover:shadow-pink-500/40"
                        >
                            <span className="relative z-10">Back To Home</span>
                        </Link>

                        <Link
                            to="/"
                            aria-label="Back to home"
                            className="btn-sweep relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-cta-gradient text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:rotate-45 hover:shadow-lg hover:shadow-orange-500/40"
                        >
                            <span className="relative z-10"><ArrowUpRight strokeWidth={2.75} /></span>
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={goBack}
                        className="group flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2.5} />
                        Back To Previous Page
                    </button>
                </div>
            </div>
        </section>
    );
}