import { FaPython } from "react-icons/fa6";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    title: "IziLyze",
    des: "IziLyze is a BI platform for IziPay clients, offering interactive dashboards, gamified sales tracking, and an AI assistant for data insights.",
    img: "/izilyze-demo.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/python-logo.png",
      "/aws.png",
    ],
    link: "https://github.com/sebastianperudev2001/hackathon-izipay",
  },
  {
    id: 2,
    title: "ChaFit",
    des: "ChaFit is a web app that allows users to create custom gym routines, track progress, and generate personalized workout plans using AI, all visualized through an interactive dashboard.",
    img: "/chatfit.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/sebastianperudev2001/ChaFit_Backend",
  },
  {
    id: 3,
    title: "CryptoNita",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "AI Chatbot",
    des: "Developed an AI-powered RAG chatbot for a public entity, enabling efficient indexing and accurate retrieval of information from their document database.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Blum SAF",
    location: "New York, USA",
    className: "md:col-span-2",
    thumbnail: "/blum.svg",
    date: "January 2023 - June 2023", // Sample data
    key_points: [
      "Led the development of key features for the company’s main product.",
      "Collaborated with cross-functional teams to deliver high-quality software.",
      "Optimized existing codebase, reducing load times by 20%.",
    ],
  },
  {
    id: 2,
    title: "Data Engineer Intern",
    desc: "Amber",
    location: "San Francisco, USA",
    className: "md:col-span-2",
    thumbnail: "/amber.svg",
    date: "July 2023 - Present", // Sample data
    key_points: [
      "Developed data pipelines to process large-scale datasets.",
      "Automated data extraction processes, improving efficiency by 30%.",
      "Collaborated with data scientists to implement machine learning models.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    desc: "Belcorp",
    location: "Lima, Peru",
    className: "md:col-span-2",
    thumbnail: "/belcorp.svg",
    date: "June 2021 - December 2021", // Sample data
    key_points: [
      "Assisted in the development of serverless applications using AWS Lambda.",
      "Participated in code reviews and debugging sessions.",
      "Contributed to improving the CI/CD pipeline, reducing deployment time by 25%.",
    ],
  },
  {
    id: 4,
    title: "Teaching Assistant",
    desc: "Universidad de Lima",
    location: "Lima, Peru",
    className: "md:col-span-2",
    thumbnail: "/ulima.svg",
    date: "August 2020 - Present", // Sample data
    key_points: [
      "Guided students in understanding complex software engineering concepts.",
      "Assisted in grading assignments and providing constructive feedback.",
      "Led study sessions to help students prepare for exams.",
    ],
  },
  {
    id: 5,
    title: "Software Engineer Intern",
    desc: "Gestión y Sistemas",
    location: "Lima, Peru",
    className: "md:col-span-2",
    thumbnail: "/gys.svg",
    date: "January 2020 - May 2020", // Sample data
    key_points: [
      "Developed and maintained web applications for retail clients.",
      "Collaborated with senior engineers to optimize application performance.",
      "Implemented new features based on client requirements.",
    ],
  },
  {
    id: 6,
    title: "Programming Teacher",
    desc: "Crack the Code",
    location: "New York, USA",
    className: "md:col-span-2",
    thumbnail: "/ctc.svg",
    date: "September 2019 - December 2019", // Sample data
    key_points: [
      "Taught programming fundamentals to beginners.",
      "Designed and delivered interactive coding workshops.",
      "Assisted students with troubleshooting coding challenges.",
    ],
  },
  {
    id: 7,
    title: "Portfolio Management Intern",
    desc: "iVisa",
    location: "Miami, USA",
    className: "md:col-span-2",
    thumbnail: "/ivisa.svg",
    date: "May 2022 - August 2022", // Sample data
    key_points: [
      "Supported the portfolio management team with data analysis tasks.",
      "Developed dashboards to track key performance indicators.",
      "Conducted research to support investment decisions.",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/sebastianperudev2001",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/sebaschavarry",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/sebaschguti/",
  },
];

//    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],

export const tech_stack = [
  {
    id: 1,
    name: "Python",
    designation: "Advanced uses in AI and ML.",
    image: "python-logo.png",
  },
  {
    id: 2,
    name: "TypeScript",
    designation: "Used for frontend and AWS Lambda functions.",
    image: "/ts.svg",
  },
  {
    id: 3,
    name: "NextJS",
    designation: "Experience in production environments.",
    image: "/next.svg",
  },
  {
    id: 4,
    name: "AWS",
    designation: "Expertise in serverless and event-driven architectures.",
    image: "aws.png",
  },
  {
    id: 5,
    name: "PostgreSQL",
    designation: "Experience in complex queries and performance tuning.",
    image: "elefante.svg.png",
  },
  {
    id: 6,
    name: "AWS Bedrock",
    designation: "Experience in developing AI based solutions.",
    image: "bedrock.png",
  },
  {
    id: 7,
    name: "Langchain",
    designation: "Used for orchestrating genAI agents",
    image: "langchain.png",
  },
  {
    id: 8,
    name: "TailwindCSS",
    designation: "Used for orchestrating genAI agents",
    image: "/tail.svg",
  },
];
