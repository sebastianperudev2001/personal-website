import { FaPython } from "react-icons/fa6";

export const navItems = [
  { name: "About", link: "#aboutme" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Tech Stack", link: "#techstack" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "AWS All Builders Welcome Grant",
    description:
      "Selected among global candidates to attend AWS re:Inforce 2024 in Philadelphia, focusing on cloud security and innovation.",
    img: "/aws_reinforce.jpeg",
    imgAlt: "aws_reinforce",
  },
  {
    id: 2,
    title: "Izipay Hackathon Winner",
    description:
      "Won second place for creating an AI-powered business intelligence solution for small businesses after market research and pitching.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/izipay-winner.jpeg",
    imgAlt: "izipay_hackaizi_hackathon",
  },
  {
    id: 3,
    title: "Top Graduate in Software Engineering",
    description:
      "Graduated 2nd in a class of 62 in Software Engineering at Universidad de Lima, demonstrating academic excellence and technical expertise",
    img: "/ulima.jpg",
    imgAlt: "ulima_ingenieria_sistemas",
  },
];

export const projects = [
  {
    id: 1,
    title: "IziLyze",
    des: "IziLyze is a BI platform for IziPay clients, offering interactive dashboards, gamified sales tracking, and an AI assistant for data insights.",
    img: "/izilyze-demo.jpeg",
    alt: "hackaizi izipay hackathon demo",
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
    alt: "demo genAI chatbot fitness gym",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/sebastianperudev2001/ChaFit_Backend",
  },
  {
    id: 3,
    title: "CryptoNita",
    des: "Simulation of crypto transactions. Made for Web Dev final project. Learnt about CRUD operations about API and how to use them.",
    img: "/cryptonita.png",
    alt: "cryptonita demo crypto bitcoin ulima programación web proyecto",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "AI Chatbot",
    des: "Developed an AI-powered RAG chatbot for a public entity, enabling efficient indexing and accurate retrieval of information from their document database.",
    img: "/ai_chatbot.png",
    alt: "ai chatbot demo RAG langchain aws bedrock",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/python-logo.png",
      "/aws.png",
    ],
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
    location: "Lima, Peru",
    thumbnail: "/blum.svg",
    alt: "blum saf software engineer peru fintech",
    date: "Aug 2024 - Present", // Sample data
    key_points: [
      "Built and enhanced product features using Next.js.",
      "Created and integrated microservices on AWS Lambda for API use.",
      "Implemented IaC to deploy solutions for internal and external users",
    ],
  },
  {
    id: 2,
    title: "Data Engineer",
    desc: "Amber",
    location: "Lima, Peru",
    thumbnail: "/amber.jpeg",
    alt: "amber data engineer cloud consulting peru aws partner",
    date: "Mar 2024 - Jul 2024", // Sample data
    key_points: [
      "Architected a RAG chatbot using Langchain, AWS Bedrock, and Kendra for document retrieval from a public entity's legacy database.",
      "Designed a diabetes treatment chatbot with AI-generated personalized reminders.",
      "Built internal tools for document processing and automated data retrieval.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    desc: "Belcorp",
    location: "Lima, Peru",
    className: "md:col-span-2",
    thumbnail: "/belcorp.jpeg",
    alt: "belcorp software engineer peru rpa python aws",
    date: "May 2023 - Feb 2024", // Sample data
    key_points: [
      "Led development of 20 RPA solutions in Python, enhancing efficiency for tech and commercial teams.",
      "Collaborated with the architecture team to modernize a legacy payroll system with serverless AWS architecture.",
      "Developed web scraping bots, streamlining data integration.",
    ],
  },
  {
    id: 4,
    title: "Teaching Assistant",
    desc: "Universidad de Lima",
    alt: "ulima teaching assistant peru asistente de catedra ingenieria de sistemas ulima",
    location: "Lima, Peru",
    className: "md:col-span-2",
    thumbnail: "/ulima_logo.jpeg",
    date: "Apr 2023 - Jul 2024", // Sample data
    key_points: [
      "Assisted students with technical issues and bug resolution in data analysis, Android development, and web development.",
      "Monitored exams and addressed student questions.",
      "Supported professors during lectures.",
    ],
  },
  {
    id: 5,
    title: "Software Engineer",
    desc: "Gestión y Sistemas",
    location: "Lima, Peru",
    thumbnail: "/gys.jpeg",
    alt: "gestion y sistemas software engineer peru angular .net consultoria peru",
    date: "Oct 2022 - May 2023", // Sample data
    key_points: [
      "Completed a Web Development Bootcamp, distinguishing myself among 50 participants.",
      "Developed Angular components to improve the user interface for an e-commerce management system.",
      "Created and integrated REST APIs using .NET to enhance system connectivity and data exchange.",
    ],
  },
  {
    id: 6,
    title: "Programming Teacher",
    desc: "Crack the Code",
    location: "Lima, Peru",
    thumbnail: "/ctc.jpeg",
    alt: "crack the code profesor de programacion startup peru lima",
    date: "Jun 2022 - Apr 2023", // Sample data
    key_points: [
      "Taught weekly programming courses to over 50 Latin American students, enhancing their computational thinking skills.",
      "Provided technical assistance to women in a Bogotá web development course, ensuring successful program completion.",
    ],
  },
  {
    id: 7,
    title: "Portfolio Management Intern",
    desc: "iVisa",
    alt: "ivisa startup peru lima intern portfolio management",
    location: "Lima, Peru",
    thumbnail: "/ivisa.jpeg",
    date: "Jul 2022 - Oct 2022", // Sample data
    key_points: [
      "Identified and added new products to the platform's portfolio.",
      "Collaborated with multiple teams to enhance user experience.",
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
    image: "/python-logo.png",
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
    image: "/aws.png",
  },
  {
    id: 5,
    name: "PostgreSQL",
    designation: "Experience in complex queries and performance tuning.",
    image: "/elefante.svg.png",
  },
  {
    id: 6,
    name: "AWS Bedrock",
    designation: "Experience in developing AI based solutions.",
    image: "/bedrock.png",
  },
  {
    id: 7,
    name: "Langchain",
    designation: "Used for orchestrating genAI agents",
    image: "/langchain.png",
  },
  {
    id: 8,
    name: "TailwindCSS",
    designation: "Used for orchestrating genAI agents",
    image: "/tail.svg",
  },
];
