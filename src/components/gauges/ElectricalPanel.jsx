import RadialGauge from "./RadialGauge";
import useDevice from "../../hooks/useDevice";

export default function ElectricalPanel() {

    const { device } = useDevice();

    if (!device) return null;

    return (

        <div className="grid grid-cols-2 gap-6">

            <RadialGauge
    title="Voltage"
    value={device.data.voltage}
    min={150}
    max={280}
    unit="V"
    color="#22c55e"
    decimals={2}
/>

<RadialGauge
    title="Current"
    value={device.data.current}
    min={0}
    max={100}
    unit="A"
    color="#3b82f6"
    decimals={2}
/>

<RadialGauge
    title="Frequency"
    value={device.data.frequency}
    min={45}
    max={55}
    unit="Hz"
    color="#8b5cf6"
    decimals={2}
/>

<RadialGauge
    title="Power Factor"
    value={device.data.powerFactor}
    min={0}
    max={1}
    unit=""
    color="#f59e0b"
    decimals={3}
/>

        </div>

    );

}