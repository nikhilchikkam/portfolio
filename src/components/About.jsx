import { useState, useTransition, useRef, Suspense } from "react";
import TabbedComponent from "./TabbedComponent";
import { Skills } from "../constants/Skills";
import { motion, useInView } from "framer-motion";
import Loading from "./Loading";

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const refHeading = useRef(null);
    const refContent = useRef(null);
    const inViewHeading = useInView(refHeading);
    const inViewContent = useInView(refContent, { once: true });

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }
    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section className=" sm:px-8 py-[80px] overflow-hidden" id="about">
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    About Me
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <motion.div
                    ref={refContent}
                    initial={{
                        opacity: 0,
                        x: -100,
                        scale: 0.8,
                        filter: "blur(6px)",
                    }}
                    animate={
                        inViewContent
                            ? {
                                  opacity: 1,
                                  x: 0,
                                  scale: 1,
                                  filter: "blur(0px)",
                              }
                            : { opacity: 1, x: -100, scale: 0.8 }
                    }
                    transition={{ duration: 0.8 }}
                    className="flex-1 md:max-w-[40%] sm:mt-10 "
                >
                    <Suspense fallback={<Loading />}>
                        <img
                            src="./images/about.png"
                            alt="meme"
                            loading="lazy"
                            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] "
                        />
                    </Suspense>
                </motion.div>
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={
                        inViewContent
                            ? { opacity: 1, x: 0, scale: 1 }
                            : { opacity: 0, x: 100, scale: 0.8 }
                    }
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <p className="text-textWhite p-4 text-lg sm:text-xl sm:leading-7">
                        I am a passionate MERN Stack Developer and a Problem
                        Solver, dedicated to creating impactful codes that
                        thrive on the internet.
                        <br /><br />
                        I have experience working with Python, JavaScript,
                        TypeScript, HTML, CSS, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Git.
                        <br /><br />I am a quick learner and I am always looking to
                        expand my knowledge and skill set.
                    </p>

                    <div className="flex flex-row justify-start gap-6 pl-4 bg-[#181a20] rounded-full p-2 mt-4 shadow-sm border border-[#23272f] w-fit">
                        <TabbedComponent
                            selectTab={() => selectTab("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabbedComponent>
                        <TabbedComponent
                            selectTab={() => selectTab("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabbedComponent>
                        <TabbedComponent
                            selectTab={() => selectTab("work")}
                            active={tab === "work"}
                        >
                            {" "}
                            Work Experience{" "}
                        </TabbedComponent>
                    </div>
                    <div className="mt-8 pl-4 max-w-[100%] min-h-[140px] flex flex-wrap gap-x-10 gap-y-8">
                        {tab === "skills" ? (
                            Skills?.map((skill, i) => {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        key={i}
                                        className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                                    >
                                        <img
                                            src={skill.img}
                                            alt={skill.description}
                                        />
                                        <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-textWhite rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-1 opacity-0 mx-auto px-2 w-max">
                                            {skill.description}
                                        </span>
                                    </motion.div>
                                );
                            })
                        ) : tab === "education" ? (
                            <ul className="list-disc pl-2">
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Rochester Institute of Technology, NY USA
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                                Masters of Science in
                                                Computer Science
                                            </p>
                                            <span>2023-2025</span>
                                        </span>
                                    </div>
                                </motion.li>
                            </ul>
                        ) : (
                            <ul className="list-disc pl-2 flex flex-col gap-4">
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Mendon Group <span className="text-base font-[500]">- Rochester, NY</span>
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <ul className="list-disc ml-4 space-y-1 text-left">
                                            <li>
                                                <span className="italic">Full-Stack Developer (Internship)</span>
                                            </li>
                                            <li>
                                                Built a SaaS web application for nutrition product search and management using <span className="font-semibold">React (Vite, TypeScript, Tailwind CSS)</span> for the frontend and <span className="font-semibold">FastAPI (Python) with PostgreSQL</span> for the backend.
                                            </li>
                                            <li>
                                                Built scheduled <span className="font-semibold">ETL</span> pipelines to ingest and update nutrition data from multiple sources into a database, exposing it through <span className="font-semibold">RESTful APIs</span> to support real-time filtering, search, and pagination on the frontend.
                                            </li>
                                            <li>
                                                Deployed and managed both frontend and backend as scalable, independent services on <span className="font-semibold">DigitalOcean</span> App Platform, optimizing <span className="font-semibold">CI/CD</span> pipelines, environment variables, CORS, and secure routing for a production-grade SaaS platform.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                                        <span className="italic">June 2025 - Present</span>
                                        <span className="">Internship, Remote</span>
                                    </div>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Web Developer{" "}
                                        <span className="text-base font-[500]">
                                            - RIT University Advancement Services, NY, USA
                                        </span>
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <ul className="list-disc ml-4 space-y-1 text-left">
                                            <li>
                                            Modernized 60+ web pages using JavaScript, HTML/CSS for marketing campaigns, increasing user engagement by 15% and improving alumni donation flow.
                                            </li>
                                            <li>
                                            Analyzed marketing performance using Google Looker, Tableau, and Python (pandas, matplotlib) to generate insights and optimize outreach strategies.
                                            </li>
                                            <li>
                                            Managed campaigns with CMS tools (Blackbaud Luminate Online, Emma, Drupal), directly boosting alumni engagement and donation rates.
                                            </li>
                                            <li>
                                            Automated report generation using Python and Selenium, reducing manual workload by 70% and enhancing campaign strategy with data-driven insights.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                                        <span className="">
                                            Jan 2024 - Present
                                        </span>
                                        <span className="">Part Time, Onsite</span>
                                    </div>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Application Developer{" "}
                                        <span className="text-base font-[500]">
                                            - ADP, Hyderabad, India
                                        </span>
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                       <ul className="list-disc ml-4 space-y-1 text-left">
                                            <li>
                                            Developed applications on the Lifion platform using Node.js for backend and React for responsive UIs, handling over 100,000 legacy user records across 10+ clients.
                                            </li>
                                            <li>
                                            Designed and maintained ETL pipelines with MySQL to ensure timely and accurate data integration across systems.
                                            </li>
                                            <li>
                                            Automated build, test, and deployment workflows using Git, CI/CD tools, and Jest for robust backend and frontend testing.
                                            </li>
                                            <li>
                                            Built a document lifecycle dashboard for 15+ clients, improving bulk import from 6,000 to 10,000 records and securing access with RBAC. Utilized AWS S3 and FileZilla for storage and download.
                                            </li>
                                            <li>
                                            Implemented an audit feature in Payroll, Time, and Compensation modules, reducing debugging time by 40% through audit traceability in payroll profiles.
                                            </li>
                                            <li>
                                            Led 30+ cross-functional meetings, provided diagnostics support using Kibana and Splunk, and tested APIs with Postman, resolving 100+ system issues.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                                        <span className="">
                                            Nov 2021 - Aug 2023
                                        </span>
                                        <span className="">Full Time, Onsite</span>
                                    </div>
                                </motion.li>
                            </ul>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
