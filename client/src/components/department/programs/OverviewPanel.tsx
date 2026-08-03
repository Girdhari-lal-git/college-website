import { CheckCircle2 } from "lucide-react";
import { Program } from "./types";

interface Props {
    program: Program;
}

const OverviewPanel = ({ program }: Props) => {
    return (
        <section className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-gray-900">
                Program Overview
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
                {program.overview}
            </p>

            <h3 className="mt-8 text-xl font-semibold">
                Key Highlights
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-5">

                {program.highlights.map((highlight) => (
                    <div
                        key={highlight}
                        className="flex gap-3"
                    >
                        <CheckCircle2
                            className="text-primary mt-1 shrink-0"
                            size={18}
                        />

                        <span className="text-gray-700">
                            {highlight}
                        </span>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default OverviewPanel;