import { DepartmentHeroButton } from "./types";

interface Props {
    buttons?: DepartmentHeroButton[];
}

const DepartmentHeroButtons = ({ buttons = [] }: Props) => {

    if (buttons.length === 0) return null;

    return (
        <div className="mt-8 flex flex-wrap gap-4">

            {buttons.map((button) => (

                <a
                    key={button.label}
                    href={button.href}
                    className={
                        button.variant === "secondary"
                            ? `
                                rounded-lg
                                border
                                border-white
                                px-6
                                py-3
                                font-medium
                                text-white
                                transition
                                hover:bg-white
                                hover:text-primary
                              `
                            : `
                                rounded-lg
                                bg-secondary
                                px-6
                                py-3
                                font-medium
                                text-white
                                transition
                                hover:opacity-90
                              `
                    }
                >
                    {button.label}
                </a>

            ))}

        </div>
    );
};

export default DepartmentHeroButtons;