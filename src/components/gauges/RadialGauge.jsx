import Chart from "react-apexcharts";

export default function RadialGauge({
    title,
    value = 0,
    min = 0,
    max = 100,
    unit = "",
    color = "#3B82F6",
    decimals = 2,
}) {

    const safeValue = Number(value) || 0;

    const percentage = Math.min(
        Math.max(((safeValue - min) / (max - min)) * 100, 0),
        100
    );

    const formattedValue = safeValue.toFixed(decimals);

    const options = {
        chart: {
            type: "radialBar",
            sparkline: {
                enabled: true,
            },
            animations: {
                enabled: true,
                easing: "easeinout",
                speed: 500,
            },
        },

        colors: [color],

        plotOptions: {
            radialBar: {

                startAngle: -135,
                endAngle: 135,

                hollow: {
                    size: "68%",
                },

                track: {
                    background: "#1e293b",
                    strokeWidth: "100%",
                },

                dataLabels: {

                    name: {
                        show: true,
                        color: "#94A3B8",
                        fontSize: "16px",
                        fontWeight: 600,
                        offsetY: -10,
                    },

                    value: {
                        show: true,
                        offsetY: 12,
                        color: "#ffffff",
                        fontSize: "42px",
                        fontWeight: 700,
                        formatter: () => `${formattedValue} ${unit}`,
                    },

                },

            },
        },

        stroke: {
            lineCap: "round",
        },

        labels: [title],

    };

    return (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl">

            <Chart
                options={options}
                series={[percentage]}
                type="radialBar"
                height={320}
            />

        </div>
    );
}