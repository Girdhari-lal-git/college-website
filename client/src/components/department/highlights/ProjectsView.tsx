import {
    Eye,
    Brain,
    BarChart3,
    MessageSquareText,
    Cpu,
    Code,
} from "lucide-react";

import { ProjectDomain } from "./types";

interface Props {
    projectDomains: ProjectDomain[];
    projectsPdf?: string;
}

const iconMap = {
    eye: Eye,
    brain: Brain,
    chart: BarChart3,
    message: MessageSquareText,
    cpu: Cpu,
    code: Code,
};

const ProjectsView = ({
    projectDomains,
    projectsPdf,
}: Props) => {
    return (
        <div className="space-y-8">

            {/* Project Domains */}

            <div
                className="
                    grid
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                "
            >
                {projectDomains.map((domain) => {

                    const Icon =
                        iconMap[
                            domain.icon as keyof typeof iconMap
                        ] || Code;

                    return (
                        <div
                            key={domain.id}
                            className="
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-md
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-primary/10
                                    text-primary
                                "
                            >
                                <Icon size={24} />
                            </div>

                            <h3
                                className="
                                    mt-5
                                    text-lg
                                    font-semibold
                                    text-primary
                                "
                            >
                                {domain.name}
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-2xl
                                    font-bold
                                    text-neutral-800
                                "
                            >
                                {domain.count}
                                <span
                                    className="
                                        ml-2
                                        text-sm
                                        font-normal
                                        text-neutral-500
                                    "
                                >
                                    Projects
                                </span>
                            </p>

                        </div>
                    );
                })}
            </div>

            {/* Complete Project List */}

            {projectsPdf && (
                <div className="pt-2 text-center">

                    <a
                        href={projectsPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            rounded-lg
                            bg-primary
                            px-6
                            py-3
                            text-sm
                            font-medium
                            text-white
                            transition
                            hover:bg-primary/90
                        "
                    >
                        View Complete Project List
                    </a>

                </div>
            )}

        </div>
    );
};

export default ProjectsView;