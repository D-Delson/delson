import Section from "./Section";

type SkillCategory = {
    title: string;
    skills: string[];
};

const skillData: SkillCategory[] = [
    { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "C"] },
    { title: "Frameworks", skills: ["Django", "Django Rest Framework", "React JS", "Next JS", "Nest JS"] },
    { title: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
    { title: "Cloud & DevOps", skills: ["AWS", "Docker"] },
    { title: "Others", skills: ["HTML", "CSS", "Tailwind CSS"] },
];

export default function Skills() {
    return (
        <Section>
            {/* Section Title */}
            <div className="flex items-center gap-4 mb-10">
                <p className="text-[32px] font-medium shrink-0">
                    <span className="text-primary">#</span>Skills
                </p>
                <div className="flex-1 h-0.5 bg-primary"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {skillData.map((category) => (
                    <div key={category.title} className=" p-6 rounded-lg border border-gray-700">
                        <h2 className="text-white font-semibold text-lg mb-2">{category.title}</h2>
                        <p className="text-gray-400 text-sm">
                            {category.skills.join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
