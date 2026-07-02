import Chart from "react-apexcharts";

export default function LineChart({
    title,
    color = "#22c55e",
    data = [],
    minY,
    maxY,
}) {

    const options = {

        chart: {
            id: title,
            type: "line",
            animations: {
                enabled: true,
                dynamicAnimation: {
                    speed: 500,
                },
            },
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            background: "transparent",
        },

        stroke: {
            curve: "smooth",
            width: 3,
        },

        colors: [color],

        grid: {
            borderColor: "#334155",
        },

        xaxis: {

            categories: data.map((_, i) => i + 1),

            labels: {
                show: false,
            },

            axisTicks: {
                show: false,
            },

            axisBorder: {
                show: false,
            },

        },

        yaxis: {

            min: minY,

            max: maxY,

            decimalsInFloat: 2,

            labels: {

                style: {

                    colors: "#94a3b8",

                },

            },

        },

        tooltip: {

            theme: "dark",

        },

        legend: {

            show: false,

        },

        title: {

            text: title,

            align: "left",

            style: {

                color: "#ffffff",

                fontSize: "18px",

            },

        },

    };

    return (

        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">

            <Chart

                options={options}

                series={[

                    {

                        name: title,

                        data,

                    },

                ]}

                type="line"

                height={300}

            />

        </div>

    );

}