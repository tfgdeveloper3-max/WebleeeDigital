import { motion, type Variants } from "motion/react";
import {
    ShoppingCart,
    CreditCard,
    PackageSearch,
    Smartphone,
    BarChart3,
    Globe2,
} from "lucide-react";

const STORE_FEATURES = [
    {
        icon: ShoppingCart,
        title: "Product Catalog Management",
        description: "Keep your entire product range organized with intuitive tools for products, variants, categories, collections, pricing, and inventory.",
    },
    {
        icon: CreditCard,
        title: "Secure Payment Gateways",
        description: "Give customers a smooth, trustworthy checkout with secure payment integration supporting cards, digital wallets, and preferred payment methods.",
    },
    {
        icon: PackageSearch,
        title: "Order & Inventory Tracking",
        description: "Stay in control with streamlined order management and real-time inventory visibility, helping you reduce errors and keep fulfillment moving.",
    },
    {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Create effortless shopping experiences across every screen with responsive storefronts designed around the way modern customers browse and buy.",
    },
    {
        icon: BarChart3,
        title: "Sales Analytics Dashboard",
        description: "Turn store activity into useful insight with clear visibility into sales, conversions, customer behavior, and performance.",
    },
    {
        icon: Globe2,
        title: "Multi-Currency & Shipping",
        description: "Expand beyond borders with flexible currency, shipping, and delivery options designed to make global commerce simpler for both you and your customers.",
    },
];

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const headerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function EcommerceFeaturesSection() {
    return (
        <section className="w-full bg-white px-6 py-20 font-atyp md:px-12 lg:py-28">
            <motion.div
                className="mx-auto max-w-3xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={container}
            >
                <motion.span
                    variants={headerItem}
                    className="mb-6 inline-flex w-fit items-center rounded-full bg-neutral-200/70 px-5 py-2 text-sm text-neutral-700"
                >
                    Bundle Pack
                </motion.span>

                <motion.h2
                    variants={headerItem}
                    className="text-[32px] font-light leading-[1.2] text-neutral-900 sm:text-[38px] lg:text-[42px]"
                >
                    WHAT IF YOUR{" "}
                    <span className="font-semibold text-brand">STORE</span> COULD DO IT ALL?
                </motion.h2>

                <motion.p
                    variants={headerItem}
                    className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-500"
                >
                    We bring your essential e-commerce capabilities into one streamlined ecosystem, giving you more control behind the scenes and your customers a better experience up front. 
                </motion.p>
            </motion.div>

            <motion.div
                className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={container}
            >
                {STORE_FEATURES.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={feature.title}
                            variants={cardItem}
                            className="group rounded-[22px] bg-[#f5f5f4] p-7 transition-colors duration-500 hover:bg-brand"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white transition-colors duration-500 group-hover:bg-white group-hover:text-brand">
                                <Icon className="h-6 w-6" strokeWidth={1.75} />
                            </div>

                            <h3 className="mt-6 text-lg font-semibold text-neutral-900 transition-colors duration-500 group-hover:text-white">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-500 transition-colors duration-500 group-hover:text-white/85">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}