export default function Section({

    title,

    children,

}) {

    return (

        <section
            className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/30
                p-8
                backdrop-blur-xl
            "
        >

            <h2
                className="
                    mb-6
                    text-xl
                    font-semibold
                    text-slate-300
                "
            >
                {title}
            </h2>

            {children}

        </section>

    );

}