export interface Member {
    _id: string;
    name: string;
    role: string;
    image: string;
    description: string;
}

export const staticMembers: Member[] = [
    {
        _id: "jane_doe",
        name: "Dr. Jane Doe",
        role: "Project Coordinator",
        image: "https://avatar.iran.liara.run/public/55",
        description: "Leads the research and coordinates interdisciplinary collaboration."
    },
    {
        _id: "john_smith",
        name: "Prof. John Smith",
        role: "Senior Researcher",
        image: "https://avatar.iran.liara.run/public/38",
        description: "Focuses on traffic modeling, optimization, and safety analytics."
    },
    {
        _id: "alex_lee",
        name: "Alex Lee",
        role: "Graduate Researcher",
        image: "https://avatar.iran.liara.run/public/49",
        description: "Works on computer vision pipelines and data engineering."
    },
    {
        _id: "maria_garcia",
        name: "Maria Garcia",
        role: "Research Assistant",
        image: "https://avatar.iran.liara.run/public/59",
        description: "Supports labeling, model benchmarking, and documentation."
    }
];
