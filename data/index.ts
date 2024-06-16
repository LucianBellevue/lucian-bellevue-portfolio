export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  export const gridItems = [
    {
      id: 1,
      title: "Coding and designing is my passion",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I am flexible with zones of availability",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-red-100",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I am passionate about frontend technologies.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-red-100",
      imgClassName: "",
      titleClassName: "justify-center text-red-100",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "I am passionate about tech and I love playing video games",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-red-100",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },

    {
      id: 5,
      title: "Currently learning to use Next-Gen tools like Spline for 3D UIs.",
      description: "What am I working on?",
      className: "md:col-span-3 md:row-span-2 text-red-100",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "",
    },
    {
      id: 6,
      title: "Do you want to hire me?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const projects = [
    {
      id: 1,
      title: "Fullstack SaaS - Podcast App",
      des: "This is a software-as-a-service app using OpenAI to generate and play podcast episodes.",
      img: "/p1.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/openai.svg"],
      link: "https://fadedcast-fullstack-project.vercel.app/",
    },
    {
      id: 2,
      title: "Twitter Clone",
      des: "Developed a social media app clone with functionality for posting tweets, sign-in/sign-out and more. Using Nextjs, TailwindCss, Firebase and Redux",
      img: "p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/js.svg", "redux.svg", "firebase.svg"],
      link: "https://my-twitter-clone-tau.vercel.app/",
    },
    {
      id: 3,
      title: "IP address tracker Web App",
      des: "This is an Ip address tracker that provides location based on Ip address or domain, Using React and Leaflet API.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://ip-tracker-project-beryl.vercel.app/",
    },
    {
      id: 4,
      title: "My GitHub Repository",
      des: "Visit here to see all my other projects and repositories on GitHub.",
      img: "/github.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "three.svg", "js.svg", "html5.svg", "css2.svg", "redux.svg", "firebase.svg", "php.svg"],
      link: "https://github.com/LucianBellevue",
    },
  ];

  export const testimonials = [
    {
      quote: "",
      name: "",
      title: "",
      image: "",
    },
    {
      quote: "",
      name: "",
      title: "",
      image: "",
    },
    {
      quote: "",
      name: "",
      title: "",
      image: "",
    },
    {
      quote: "",
      name: "",
      title: "",
      image: "",
    },
    {
      quote: "",
      name: "",
      title: "",
      image: "",
    },
  ];

  export const companies = [
    // {
    //   id: 1,
    //   name: "Twitter",
    //   img: "/twit.svg",
    //   nameImg: "Twitter",
    // },
    // {
    //   id: 2,
    //   name: "Frontend Simplified",
    //   img: "",
    //   nameImg: "",
    // },
    // {
    //   id: 3,
    //   name: "",
    //   img: "",
    //   nameImg: "",
    // },
    // {
    //   id: 4,
    //   name: "",
    //   img: "",
    //   nameImg: "",
    // },
    // {
    //   id: 5,
    //   name: "",
    //   img: "",
    //   nameImg: "",
    // },
  ];

  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern - Twitter & Frontend Simplified",
      desc: "Collaborated within a diverse and dynamic engineering team, I made meaningful contributions that directly impacted product functionality and user engagement.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      desc: "Using tools like Figma and InVision, I designed and developed user interfaces for various freelance projects.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance Developer",
      desc: "Worked with over 10+ satisfied B2B clients, delivering high-quality projects from simple UI/UX design to full-stack web development on time and on budget.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Your Next Hire",
      desc: "I am looking for new and exciting opportunities. If you think I would be a good fit for your team, please get in touch.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];

  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/LucianBellevue",
    },
    {
      id: 2,
      img: "/pdf.svg",
      link: "/lucianb-resume.pdf",
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/lucianbellevue/",
    },
  ];
