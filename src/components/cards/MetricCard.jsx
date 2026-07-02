import { motion } from "framer-motion";

export default function MetricCard({
    title,
    value,
    unit,
    color,
    icon,
}) {
    return (
        <motion.div
            whileHover={{
                scale: 1.03,
                y: -4,
            }}
            transition={{
                duration: 0.2,
            }}
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-gradient-to-br
                from-slate-900/80
                to-slate-950/70
                p-6
                shadow-xl
                backdrop-blur-xl
            "
        >
            <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{
                    background: color,
                }}
            />

            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:scale-125" />

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <p className="text-sm uppercase tracking-widest text-slate-500">

                        {title}

                    </p>

                    <h1 className="mt-3 text-5xl font-bold">

                        {value}

                    </h1>

                    <p className="mt-2 text-slate-400">

                        {unit}

                    </p>

                </div>

                <div
                    className="rounded-2xl p-4"
                    style={{
                        background: color + "22",
                        color: color,
                    }}
                >
                    {icon}
                </div>

            </div>
        </motion.div>
    );
}