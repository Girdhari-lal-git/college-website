import { NavigationItem } from "./types";

interface Props {
    item: NavigationItem;
    active: boolean;
    onClick: (id: string) => void;
}


const DepartmentNavigationItem = ({
    item,
    active,
    onClick,
}: Props) => {

    const Icon = item.icon;

    return (

        <button
    onClick={() => onClick(item.id)}
    className={`
        flex
        flex-shrink-0
        snap-start
        items-center
        gap-2
        whitespace-nowrap
        rounded-full
        px-5
        py-3
        text-sm
        font-medium
        transition-all
        duration-300
        ${
            active
                ? "bg-primary text-white shadow-lg"
                : "text-gray-700 hover:bg-primary/10 hover:text-primary"
        }
    `}
>
    {Icon && <Icon size={16} />}
    {item.label}
</button>

    );
};

export default DepartmentNavigationItem;