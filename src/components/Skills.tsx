import Image from "next/image";

const skillsArr = [
  {
    name: "JS",
    icon: "/skills/javascript.svg",
  },
  {
    name: "TS",
    icon: "/skills/typescript.svg",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.svg",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.svg",
  },
  {
    name: "React",
    icon: "/skills/react.svg",
  },
  {
    name: "GraphQL",
    icon: "/skills/graphql.svg",
  },
  {
    name: "CSS",
    icon: "/skills/css.svg",
  },
  {
    name: "HTML",
    icon: "/skills/html5.svg",
  },
  {
    name: "Dart",
    icon: "/skills/dart.svg",
  },
  {
    name: "PHP",
    icon: "/skills/php.svg",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwindcss.svg",
  },
];

const otherSkills = [
  "React Native",
  "SQL",
  "RestAPI",
  "Unit Test",
  "Express",
  "NestJS",
  "GIT",
  "GITHUB",
  "Wordpress",
  "Drupal",
  "MongoDB",
  "Chakra UI",
  "Laravel",
];

const Skills = () => (
  <section id="skills" className="py-16">
    <h2 className="text-4xl"># Skills</h2>

    <div className="flex gap-12 mt-12 flex-wrap justify-center">
      {skillsArr.map(({ name, icon }) => (
        <div
          key={`${name}`}
          className="flex flex-col items-center justify-between h-32 w-24"
        >
          <div className="flex items-center justify-center flex-grow">
            <Image src={icon} alt={name} width={80} height={80} />
          </div>
          <p className="text-center mt-2 lowercase">{name}</p>
        </div>
      ))}
    </div>
    <div className="flex gap-12 mt-16 flex-wrap justify-center">
      {otherSkills.map((skill) => (
        <div key={skill} className="bg-background-light rounded-[6px] p-[2px]">
          <div className="px-3 py-2 rounded-[5px] bg-background-light border-2 border-border">
            <span className="lowercase">{skill}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
