import Section from "./Section";
import Button from "./Button";

import turais from "../assets/project/turais.png";

type ProjectType = {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveLink?: string;
};

const projects: ProjectType[] = [
    {
        title: "Turais",
        description: "Consultant Website",
        technologies: ["Django", "Next JS", "Postgres SQL"],
        image: turais,
        liveLink: "https://turais.in/",
    },
];

export default function Project() {
    return (
        <Section>
            {/* Section Title */}
            <div className="flex items-center gap-4">
                <p className="text-[32px] font-medium shrink-0">
                    <span className="text-primary">#</span>Projects
                </p>
                <div className="flex-1 h-0.5 bg-primary"></div>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="flex flex-col border border-gray-500 rounded-lg overflow-hidden"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Technologies */}
                        <p className="flex flex-wrap gap-2 items-center p-4 text-gray-400 text-sm border-b border-gray-500">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="bg-gray-700 px-2 py-1 rounded text-xs">
                                    {tech}
                                </span>
                            ))}
                        </p>

                        {/* Title & Description */}
                        <div className="px-4 py-4 flex flex-col gap-2">
                            <h1 className="text-white font-bold text-lg">{project.title}</h1>
                            <p className="text-gray-400 text-sm">{project.description}</p>

                            {/* Button */}
                            {project.liveLink && <Button value="Live" href={project.liveLink} />}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
