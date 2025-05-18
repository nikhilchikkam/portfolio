import accidents from "../assets/projects/accidents.png";
import offshore_leaks from "../assets/projects/offshore_leaks.png";
import byte from "../assets/projects/pokedex.png";

export const ProjectList = [
    {
        id: 1,
        name: "Neo4j ICIJ Offshore Leaks",
        description: "Built a Neo4j graph database to analyze ICIJ Offshore Leaks, modeling entities and relationships from financial records. Developed Cypher queries and integrated D3.js for visual insights, enabling investigation of offshore connections and data patterns.",
        img: byte,
        //max 6 tech stack
        tech: ["Neo4j", "JavaScript", D3.js],
        source: "https://github.com/RIT-iSchool/neo4j-project-nikhilchikkam",
        demo: null,
    },
    {
        id: 2,
        name: "E-Commerce",
        description:
            "Our Flipkart Clone, built with MERN stack, revolutionizes online shopping. It provides secure user authentication, extensive product catalog, efficient cart management, and Stripe-powered payments. Users easily access order history, while admins have a dedicated dashboard. Responsive design, Bcrypt-secured passwords, and Cloudinary image storage ensure a seamless and secure shopping experience.",
        img: ecommerce,
        //max 6 tech stack
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Stripe",
        ],
        source: "https://github.com/RIT-iSchool/mongo-project-rocket",
       demo: null,
    },
    {
        id: 3,
        name: "Notion UI",
        description:
            "Discover the Notion UI Clone repository, coded with React and Tailwind CSS. With responsive design and dynamic React components, it mirrors the original Notion homepage's look and feel for a seamless experience.",
        img: notion,
        //max 6 tech stack
        tech: ["React.js", "Tailwind CSS"],
        source: "https://github.com/aashish-dhiman/Notion-Clone",
        demo: null,
    },
    // {
    //     id: 4,
    //     name: "Discord UI",
    //     description:
    //         "Discord UI Clone is a web application meticulously crafted with React and Tailwind CSS to mirror the essence and functionality of the original Discord UI. It encompasses a faithful reproduction of Discord's home page, Nitro page, and Safety page. The application boasts full responsiveness and furthermore, every link seamlessly connects to the official Discord site.",
    //     img: discord,
    //     //max 6 tech stack
    //     tech: ["React.js", "Tailwind CSS", "Material UI"],
    //     source: "https://github.com/aashish-dhiman/discord-clone",
    //     demo: "https://discord-aashish.vercel.app/",
    // },
    // {
    //     id: 5,
    //     name: "Whisper Wave",
    //     description:
    //         "The Whisper Wave built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
    //     img: authorisation,
    //     //max 6 tech stack
    //     tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
    //     source: "https://github.com/aashish-dhiman/Authorisation",
    //     demo: null,
    // },
    // {
    //     id: 6,
    //     name: "Keeper - Keep Your Notes",
    //     description:
    //         "Inspired by Google Keep, Keeper is a note-taking website developed with React and adorned with Tailwind CSS and Material UI. It offers a user-friendly experience, allowing you to effortlessly create and manage notes. The responsive design ensures a seamless experience across all devices, making note-taking a breeze.",
    //     img: keeper,
    //     //max 6 tech stack
    //     tech: ["React.js", "Tailwind CSS", "Material UI"],
    //     source: "https://github.com/aashish-dhiman/Keeper-keep-your-notes",
    //     demo: "https://keeper-aashish.netlify.app/",
    // },
];
