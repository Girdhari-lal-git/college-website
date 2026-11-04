
import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import LazyImage from "./LazyImage";
import { Link } from "wouter";

interface ProfileCardProps {
    facultyId: string;
    imageSrc: string;
    imageAlt?: string;
    name: string;
    gender: string;
    designation: string;
    profileHref?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    imageSrc,
    imageAlt,
    facultyId,
    name,
    gender,
    designation,
    profileHref,
}) => {
    const slug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const href =
        profileHref ||
        (facultyId ? `/faculty/${slug}-${facultyId}` : "");

    return (
        <Card className="mx-auto flex h-full max-w-sm flex-col justify-between">
            <CardHeader className="flex flex-col items-center">
                <LazyImage
                    src={imageSrc}
                    alt={imageAlt || name}
                    className="mb-4 h-32 w-32 rounded-full border-4 border-primary"
                />

                <CardTitle className="text-center">
                    {name}
                </CardTitle>

                <CardDescription className="text-center">
                    {designation}
                    {gender ? ` • ${gender}` : ""}
                </CardDescription>
            </CardHeader>

            <CardContent />

            <CardFooter className="justify-center">
                {href && (
                    <Link
                        href={href}
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        View Profile ↗
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
};

export default ProfileCard;
