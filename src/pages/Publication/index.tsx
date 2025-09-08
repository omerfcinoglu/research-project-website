import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader } from "@heroui/react";

type PublicationType = {
    id: number;
    title: string;
    date: string;        // ISO: "YYYY-MM-DD"
    description: string;
    author: string;
    link: string;
};

const publications: PublicationType[] = [
    {
        id: 1,
        title: "A Lightweight Demo on Traffic Safety Indicators",
        date: "2024-05-10",
        description:
            "This portfolio-friendly demo paper outlines a simplified pipeline for collecting video data, estimating trajectories, and computing surrogate safety indicators. It is designed for demonstration and does not include real-world datasets.",
        author: "Jane Doe",
        link: "https://example.com/publication-1"
    },
    {
        id: 2,
        title: "Mock Object Detection Benchmarks for Presentation",
        date: "2024-06-15",
        description:
            "We present a mock benchmark comparing basic detection backbones with placeholder metrics. The goal is to showcase how results might be structured in an academic website without exposing client data.",
        author: "John Smith",
        link: "https://example.com/publication-2"
    },
    {
        id: 3,
        title: "Portfolio Sample: From Video Samples to Risk Classes",
        date: "2024-07-01",
        description:
            "An illustrative walkthrough demonstrating how event filtering and risk grouping could be presented on a research project website. All content is dummy and intended for portfolio use only.",
        author: "Alex Lee",
        link: "https://example.com/publication-3"
    }
];

const truncateDescription = (desc: string, maxWords: number = 50) => {
    const words = desc.split(" ");
    if (words.length <= maxWords) return desc;
    return words.slice(0, maxWords).join(" ") + " …";
};

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
    });

export const Publication = () => {
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center">
                <h2 className="mb-6 text-2xl font-bold">Publications</h2>
                <div className="flex flex-col items-center w-full space-y-6 gap-4">
                    {publications.map((pub) => (
                        <Card key={pub.id} className="w-full max-w-4xl shadow-lg p-3">
                            <CardHeader className="flex items-start justify-between gap-3">
                                <span className="font-bold text-lg">{pub.title}</span>
                            </CardHeader>
                            <CardBody>
                                <div className="space-y-10 relative">
                                    <div className="text-dark dark:text-white">
                                        {truncateDescription(pub.description)}
                                    </div>

                                    <div className="relative text-sm text-zinc-500 dark:text-zinc-400">
                                        <div>Date: {formatDate(pub.date)}</div>
                                        <div>Author: {pub.author}</div>
                                    </div>

                                    <div className="absolute bottom-0 right-0 pt-2 pr-2 mt-4">
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-700 hover:text-blue-900 transition"
                                        >
                                            View Paper
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
};
