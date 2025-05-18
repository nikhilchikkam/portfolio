import accidents from "../assets/projects/accidents.png";
import offshore_leaks from "../assets/projects/offshore_leaks.png";
import pokedex from "../assets/projects/pokedex.png";

export const ProjectList = [
    {
        id: 1,
        name: "Neo4j ICIJ Offshore Leaks",
        description: "Built a Neo4j graph database to analyze ICIJ Offshore Leaks, modeling entities and relationships from financial records. Developed Cypher queries and integrated D3.js for visual insights, enabling investigation of offshore connections and data patterns.",
        img: offshore_leaks,
        //max 6 tech stack
        tech: ["Neo4j", "JavaScript", 'D3.js'],
        source: "https://github.com/RIT-iSchool/neo4j-project-nikhilchikkam",
        demo: null,
    },
    {
        id: 2,
        name: "Pok ́emon MongoDB Project:",
        description: "A full-stack web app built with Flask, Python, React, and MongoDB, featuring a searchable Pok ́edex, interactive Pok ́emon sightings map, and a turn-based battle game. The project integrates real-time data visualization, commenting, and strategic gameplay using MongoDB’s geospatial queries.",
        img: pokedex,
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
        name: "Temporal Analysis of Traffic Accident Data:",
        description: "Implemented DBSCAN clustering on a dataset of 1.2M+ traffic accident records to pinpoint critical accident hotspots, yielding targeted recommendations that directly addressed the three leading causes of crashes in Brooklyn. Analyzed using Python, PostgreSQL, Matplotlib, Seaborn, and Folium.",
        img: accidents,
        //max 6 tech stack
        tech: ['Python', 'PostgreSQL', 'Matplotlib', 'Seaborn', 'Folium'],
        source: "https://github.com/nikhilchikkam/Temporal-Analysis",
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
