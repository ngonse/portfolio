const projects = [
  {
    title: "Backcountry",
    description: "NextJS.",
    date: "2020",
    isWeb: true,
  },
  {
    title: "Full Focus",
    description: "React Native.",
    date: "2022",
    isWeb: false,
  },
  {
    title: "iPro",
    description: "Ruby and React.",
    date: "2023",
    isWeb: true,
  },
  {
    title: "Feria de Artes Virtual 2020-2021",
    description: "WordPress and Frontity.",
    date: "2020",
    isWeb: true,
  },
  {
    title: "Expo Pyme Virtual 2020",
    description: "Drupal and Gatsby.",
    date: "2020",
    isWeb: true,
  },
  {
    title: "tapchat",
    description: "React Native.",
    date: "2020",
    isWeb: false,
  },
  {
    title: "Wordle Clone",
    description: "NextJS and TailwindCSS.",
    date: "2023",
    isWeb: true,
  },
  {
    title: "Connect 4",
    description: "React and TailwindCSS.",
    date: "2023",
    isWeb: true,
  },
  {
    title: "Who's that Pokémon?",
    description: "React and TailwindCSS.",
    date: "2023",
    isWeb: true,
  },
];

const Projects = () => (
  <section
    role="region"
    aria-label="projects"
    id="projects"
    className="text-current py-16 min-h-screen"
  >
    <h2 className="text-4xl"># Projects</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
      {projects.map(({ title, description, date, isWeb }) => (
        <article
          key={title}
          className="flex items-end bg-background-light h-72 rounded-[6px] relative p-1"
        >
          <span className="muted absolute text-xs top-3 right-3">
            <time dateTime={date}>{date}</time>
          </span>

          <div className="flex flex-col items-start justify-end p-3 rounded-[5px] gap-y-3 border-2 border-border w-full h-full">
            {isWeb ? (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-foreground"
                data-testid="web-icon"
              >
                <path
                  d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M4.66667 20H19.3333C19.9533 20 20.2633 20 20.5176 19.9319C21.2078 19.7469 21.7469 19.2078 21.9319 18.5176C22 18.2633 22 17.9533 22 17.3333C22 17.0233 22 16.8683 21.9659 16.7412C21.8735 16.3961 21.6039 16.1265 21.2588 16.0341C21.1317 16 20.9767 16 20.6667 16H3.33333C3.02334 16 2.86835 16 2.74118 16.0341C2.39609 16.1265 2.12654 16.3961 2.03407 16.7412C2 16.8683 2 17.0233 2 17.3333C2 17.9533 2 18.2633 2.06815 18.5176C2.25308 19.2078 2.79218 19.7469 3.48236 19.9319C3.73669 20 4.04669 20 4.66667 20Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-foreground"
                data-testid="mobile-icon"
              >
                <path
                  d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}

            <p>{title}</p>
            <p className="text-sm">{description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
