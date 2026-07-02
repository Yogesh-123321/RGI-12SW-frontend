import { Activity, Moon } from "lucide-react";

export default function Navbar() {
    return (
        <header className="border-b border-slate-800 bg-[#08111F]/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-8">

                <div>
                    <h1 className="text-3xl font-bold tracking-wide">
                        ENTES RGI-12SW
                    </h1>

                    <p className="text-sm text-slate-400">
                        Industrial Power Monitoring Dashboard
                    </p>
                </div>

                <div className="flex items-center gap-8">

                    <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">

                        <Activity
                            size={16}
                            className="text-green-400"
                        />

                        <span className="font-medium text-green-400">
                            LIVE
                        </span>

                    </div>

                    <button
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-slate-700
                            bg-slate-900
                            px-4
                            py-2
                            transition
                            hover:bg-slate-800
                        "
                    >
                        <Moon size={18} />

                        Dark Mode
                    </button>

                </div>

            </div>
        </header>
    );
}