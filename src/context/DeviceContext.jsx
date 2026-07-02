import { createContext, useEffect, useState } from "react";
import socket from "../services/socket";

export const DeviceContext = createContext();

export default function DeviceProvider({ children }) {

    const [device, setDevice] = useState(null);

    const [history, setHistory] = useState({
        voltage: [],
        frequency: [],
        temperature: [],
        activePower: [],
    });

    useEffect(() => {

        socket.on("connect", () => {
            console.log("🟢 Socket Connected");
        });

        socket.on("initialData", (devices) => {

            if (devices.length === 0) return;

            const latest = devices[0];

            setDevice(latest);

            // Initialize history with first value
            setHistory({
                voltage: [latest.data.voltage],
                frequency: [latest.data.frequency],
                temperature: [latest.data.temperature],
                activePower: [latest.data.activePower],
            });

        });

        socket.on("deviceUpdate", (data) => {

            setDevice(data);

            setHistory((prev) => ({

                voltage: [...prev.voltage, data.data.voltage].slice(-60),

                frequency: [...prev.frequency, data.data.frequency].slice(-60),

                temperature: [...prev.temperature, data.data.temperature].slice(-60),

                activePower: [...prev.activePower, data.data.activePower].slice(-60),

            }));

        });

        return () => {
            socket.off("connect");
            socket.off("initialData");
            socket.off("deviceUpdate");
        };

    }, []);

    return (
        <DeviceContext.Provider
            value={{
                device,
                history,
            }}
        >
            {children}
        </DeviceContext.Provider>
    );
}