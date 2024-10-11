import React from 'react'
import "./skill.scss"
const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "HTML",
            icon: "/skill-icons/html.svg"
        },
        {
            id: 2,
            name: "CSS",
            icon: "/skill-icons/css.svg"
        },
        {
            id: 3,
            name: "JavaScript",
            icon: "/skill-icons/js.svg"
        },
        {
            id: 4,
            name: "React",
            icon: "/skill-icons/react.svg"
        },
        {
            id: 5,
            name: "Node Js",
            icon: "/skill-icons/nodejs.svg"
        },
        {
            id: 6,
            name: "Express Js",
            icon: "/skill-icons/express.svg"
        },
        {
            id: 7,
            name: "Next Js",
            icon: "/skill-icons/nextjs.svg"
        },
        {
            id: 8,
            name: "TypeScript",
            icon: "/skill-icons/ts.svg"
        },
        {
            id: 9,
            name: "MongoDB",
            icon: "/skill-icons/mongodb.svg"
        },
        {
            id: 10,
            name: "Figma",
            icon: "/skill-icons/figma.svg"
        },
        {
            id: 11,
            name: "Photoshop",
            icon: "/skill-icons/ps.svg"
        },
        {
            id: 12,
            name: "Bootstrap",
            icon: "/skill-icons/bs.svg"
        },
        {
            id: 13,
            name: "Tailwind",
            icon: "/skill-icons/tcss.svg"
        },
        {
            id: 14,
            name: "Material UI",
            icon: "/skill-icons/mui.svg"
        },
        {
            id: 15,
            name: "Ant Design",
            icon: "/skill-icons/antd.svg"
        },
        {
            id: 16,
            name: "Sass",
            icon: "/skill-icons/sass.svg"
        },
        {
            id: 17,
            name: "GraphQL",
            icon: "/skill-icons/gql.svg"
        },
        {
            id: 18,
            name: "Azure",
            icon: "/skill-icons/azure.svg"
        },
        {
            id: 19,
            name: "Framer Motion",
            icon: "/skill-icons/fm.svg"
        },
        {
            id: 20,
            name: "Webpack",
            icon: "/skill-icons/wp.svg"
        }
    ]
    return (
        <div>
            <div className="skills-outer-container w-full py-[5rem]">
                <div className="skills-inner-container w-[90%] mx-auto">
                    <div className="skills-title text-5xl font-bold text-[#fff] text-center">
                        Skills & Expertises
                    </div>
                    <div className="skills grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-16 my-8">
                        {skills.map(skill => (
                            <div key={skill.id} className="skill flex gap-2 items-center">
                                <img src={skill.icon} alt={skill.name} className="w-11 h-11" />
                                <div className="skill-name text-2xl text-[#808585] font-bold">{skill.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
