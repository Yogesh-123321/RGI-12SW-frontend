import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardGrid from "../components/layout/DashboardGrid";
import Navbar from "../components/layout/Navbar";
import Section from "../components/layout/Section";

import MetricCard from "../components/cards/MetricCard";
import LineChart from "../components/charts/LineChart";
import useDevice from "../hooks/useDevice";
import ElectricalPanel from "../components/gauges/ElectricalPanel";
import {

    Zap,

    Activity,

    Gauge,

    BatteryCharging,

    Thermometer,

    Flame,

    CircleGauge,

    TriangleAlert

} from "lucide-react";

export default function Dashboard() {
const { device, history } = useDevice();

if (!device) return null;
    return (

        <DashboardLayout>

            <Navbar />

            <DashboardGrid>

                <Section title="Live Parameters">

                    <div className="grid grid-cols-4 gap-6">

                        <MetricCard
                            title="Voltage"
                            value={device.data.voltage}
                            unit="V"
                            color="#10b981"
                            icon={<Zap />}
                        />

                        <MetricCard
                            title="Current"
                            value={device.data.current}
                            unit="A"
                            color="#3b82f6"
                            icon={<Activity />}
                        />

                        <MetricCard
                            title="Frequency"
                            value={device.data.frequency}
                            unit="Hz"
                            color="#8b5cf6"
                            icon={<Gauge />}
                        />

                        <MetricCard
                            title="Power Factor"
                            value={device.data.powerFactor}
                            unit=""
                            color="#f59e0b"
                            icon={<CircleGauge />}
                        />

                        <MetricCard
                            title="Temperature"
                            value={device.data.temperature}
                            unit="°C"
                            color="#ef4444"
                            icon={<Thermometer />}
                        />

                        <MetricCard
                            title="Active Power"
                            value={device.data.activePower}
                            unit="W"
                            color="#22c55e"
                            icon={<BatteryCharging />}
                        />

                        <MetricCard
                            title="Reactive Power"
                            value={device.data.reactivePower}
                            unit="VAR"
                            color="#06b6d4"
                            icon={<Flame />}
                        />

                        <MetricCard
                            title="Alarm"
                            value={device.data.alarm}
                            unit=""
                            color="#dc2626"
                            icon={<TriangleAlert />}
                        />

                    </div>

                </Section>

                <Section title="Electrical Parameters">

                <ElectricalPanel />

                </Section>

              <Section title="Historical Trends">

    <div className="grid grid-cols-2 gap-6">

        <LineChart
            title="Voltage Trend"
            color="#22c55e"
            data={history.voltage}
            minY={150}
            maxY={260}
        />

        <LineChart
            title="Frequency Trend"
            color="#8b5cf6"
            data={history.frequency}
            minY={45}
            maxY={55}
        />

        <LineChart
            title="Power Trend"
            color="#06b6d4"
            data={history.activePower}
            minY={0}
            maxY={5000}
        />

        <LineChart
            title="Temperature Trend"
            color="#ef4444"
            data={history.temperature}
            minY={0}
            maxY={80}
        />

    </div>

</Section>

            </DashboardGrid>

        </DashboardLayout>

    );

}