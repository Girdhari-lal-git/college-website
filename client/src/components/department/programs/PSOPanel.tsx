import { GraduationCap } from "lucide-react";
import { PSO } from "./types";

interface Props {
    psos: PSO[];
}

const PSOPanel = ({ psos }: Props) => {
    return (
        <section>

            <h2 className="text-3xl font-bold mb-6">
                Program Specific Outcomes
            </h2>

            <div className="space-y-5">

                {psos.map((pso, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow p-6"
                    >

                        <div className="flex gap-4">

                            <GraduationCap
                                className="text-primary mt-1"
                            />

                            <div>

                                <h3 className="font-semibold text-lg">
                                    {pso.title}
                                </h3>

                                <p className="mt-2 text-gray-600 leading-7">
                                    {pso.description}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default PSOPanel;