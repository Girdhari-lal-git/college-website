import { Target } from "lucide-react";
import { PEO } from "./types";

interface Props {
    peos: PEO[];
}

const PEOPanel = ({ peos }: Props) => {
    return (
        <section>

            <h2 className="text-3xl font-bold mb-6">
                Program Educational Objectives
            </h2>

            <div className="space-y-5">

                {peos.map((peo, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow p-6"
                    >

                        <div className="flex gap-4">

                            <Target
                                className="text-primary mt-1"
                            />

                            <div>

                                <h3 className="font-semibold text-lg">
                                    {peo.title}
                                </h3>

                                <p className="mt-2 text-gray-600 leading-7">
                                    {peo.description}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default PEOPanel;