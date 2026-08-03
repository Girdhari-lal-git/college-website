import { Briefcase } from "lucide-react";
import { Career } from "./types";

interface Props {
    careers: Career[];
}

const CareerPanel = ({ careers }: Props) => {
    return (
        <section>

            <h2 className="text-3xl font-bold mb-6">
                Career Opportunities
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {careers.map((career) => {

                    const Icon = career.icon || Briefcase;

                    return (

                        <div
                            key={career.title}
                            className="rounded-2xl border bg-white p-6 hover:shadow-lg transition"
                        >

                            <Icon
                                size={30}
                                className="text-primary mb-4"
                            />

                            <h3 className="font-semibold text-lg">
                                {career.title}
                            </h3>

                            {career.description && (

                                <p className="mt-3 text-gray-600 leading-7">
                                    {career.description}
                                </p>

                            )}

                        </div>

                    );

                })}

            </div>

        </section>
    );
};

export default CareerPanel;