import { DepartmentSection } from "../section";
import DynamicTable from "@/components/DynamicTable ";

import { DownloadItem } from "./types";

interface Props {
    downloads: DownloadItem[];
}

const DownloadsSection = ({
    downloads,
}: Props) => {

    const columns = [
        {
            label: "File Name",
            key: "name",
        },
        {
            label: "Action",
            key: "action",
        },
    ];

    const tableData = downloads.map((item) => ({
        name: item.name,

        action: (
            <a
                href={item.fileUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                    inline-flex
                    items-center
                    rounded-md
                    bg-primary
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-primary/90
                "
            >
                Download
            </a>
        ),
    }));

    return (
        <DepartmentSection
            id="downloads"
            label="Resources"
            title="Downloads"
            subtitle="Access important academic and departmental resources."
        >
            <DynamicTable
                columns={columns}
                data={tableData}
            />
        </DepartmentSection>
    );
};

export default DownloadsSection;