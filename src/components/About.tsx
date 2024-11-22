import Image from "next/image";

const About = () => (
  <section
    role="region"
    aria-label="about"
    id="about"
    className="flex flex-col justify-center items-center gap-12 min-h-[calc(100vh-4rem)]"
  >
    <Image
      src="/me.jpg"
      className="w-36 h-36 sm:w-60 sm:h-60 rounded-full grayscale"
      width={240}
      height={240}
      alt="Nick González"
    />
    <div className="prose text-current text-center">
      <h2 className="text-xl sm:text-2xl text-current">
        # Hi, I&apos;m Nick González 👋
      </h2>
      <p className="text-base sm:text-lg">
        I&apos;m a Software Engineer with a passion for JavaScript and Mobile
        Development. My expertise lies in building innovative and user-centric
        applications, currently leveraging the power of React and Next.js to
        create seamless digital experiences.
      </p>
    </div>
  </section>
);

export default About;
