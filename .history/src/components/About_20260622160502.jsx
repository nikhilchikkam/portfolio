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
                        I’m a software engineer who enjoys working at the
                        intersection of technology and business. I like
                        partnering with stakeholders to understand their goals,
                        gather and refine requirements, assess technical
                        feasibility, and translate business needs into practical,
                        scalable solutions.
                        <br /><br />
                        I enjoy asking the right questions, validating
                        assumptions, and helping teams deliver outcomes that
                        balance business value, user needs, and technical
                        constraints.
                        <br /><br />
                        My experience spans the full software development
                        lifecycle, from solution design and implementation to
                        testing and deployment.
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
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h5 className="text-2xl font-[600]">Intel</h5>
                                            <span className="text-base font-[500] text-gray-400">Santa Clara, CA</span>
                                        </div>
                                        <p className="text-base font-[500] text-gray-400">
                                            Software Engineer (Internship) — Jan 2026 - Present
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="list-disc ml-5 space-y-1 text-left">
                                            <li>
                                                Developed a high-throughput PR metrics system in <span className="font-semibold">Go</span>, ingesting 3,000+ PRs in 10 minutes from GitHub APIs and computing 25+ metrics using goroutines.
                                            </li>
                                            <li>
                                                Implemented Jenkins pipelines to orchestrate execution via Go binaries and automated end-to-end metric generation.
                                            </li>
                                            <li>
                                                Migrated Kubernetes ingress from <span className="font-semibold">NGINX Ingress Controller</span> to <span className="font-semibold">Gateway API</span> using <span className="font-semibold">Traefik</span>, authoring Gateway and HTTPRoute YAML resources.
                                            </li>
                                            <li>
                                                Built Grafana and PowerBI dashboards with <span className="font-semibold">Elasticsearch</span> and <span className="font-semibold">Azure Data Explorer</span> to monitor PR metrics, regression duration, code coverage, and release pipelines.
                                            </li>
                                            <li>
                                                Added alerts for tests exceeding 20 minutes to improve pipeline reliability and reduce regression latency.
                                            </li>
                                        </ul>
                                    </div>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h5 className="text-2xl font-[600]">Paychex</h5>
                                            <span className="text-base font-[500] text-gray-400">Rochester, NY</span>
                                        </div>
                                        <p className="text-base font-[500] text-gray-400">
                                            Software Engineer (Internship) — Sep 2025 - Jan 2026
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="list-disc ml-5 space-y-1 text-left">
                                            <li>
                                                Developed and maintained distributed <span className="font-semibold">React</span> and <span className="font-semibold">TypeScript</span> microservices to enable parallel feature development.
                                            </li>
                                            <li>
                                                Utilized <span className="font-semibold">Python</span> and the <span className="font-semibold">Roboto Framework</span> for automation, and <span className="font-semibold">Vitest</span> for unit testing.
                                            </li>
                                            <li>
                                                Conducted REST API validation and regression testing with <span className="font-semibold">Postman</span>, <span className="font-semibold">MongoDB</span>, and <span className="font-semibold">Oracle DB</span>.
                                            </li>
                                            <li>
                                                Used <span className="font-semibold">Bitbucket</span>, <span className="font-semibold">Git</span>, and <span className="font-semibold">Jenkins</span> for version control, code reviews, and build management.
                                            </li>
                                        </ul>
                                    </div>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h5 className="text-2xl font-[600]">Mendon Group</h5>
                                            <span className="text-base font-[500] text-gray-400">Rochester, NY</span>
                                        </div>
                                        <p className="text-base font-[500] text-gray-400">
                                            Software Engineer (Internship) — June 2025 - Aug 2025
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="list-disc ml-5 space-y-1 text-left">
                                            <li>
                                                Designed and deployed a scalable SaaS food product search app with <span className="font-semibold">Python</span>, <span className="font-semibold">FastAPI</span>, <span className="font-semibold">PostgreSQL</span>, and <span className="font-semibold">React</span>, supporting 10,000+ peak users with {"<200ms"} p99 latency.
                                            </li>
                                            <li>
                                                Engineered fault-tolerant ETL pipelines ingesting 1M+ records/day, cutting data latency by 50% and enabling real-time analytics with RESTful APIs.
                                            </li>
                                            <li>
                                                Leveraged <span className="font-semibold">XML</span> for structured data in APIs and pipelines, and integrated <span className="font-semibold">Neo4j</span> for supplier/product modeling and recommendation queries.
                                            </li>
                                            <li>
                                                Deployed containerized microservices on <span className="font-semibold">DigitalOcean</span>, automated Linux server management, and optimized CI/CD pipelines for zero-downtime production releases.
                                            </li>
                                            <li>
                                                Implemented secure routing, environment variable management, and <span className="font-semibold">CORS</span> policies to support 99.99% uptime and seamless scaling.
                                            </li>
                                        </ul>
                                    </div>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h5 className="text-2xl font-[600]">ADP</h5>
                                            <span className="text-base font-[500] text-gray-400">Hyderabad, India</span>
                                        </div>
                                        <p className="text-base font-[500] text-gray-400">
                                            Software Engineer (Full-time) — Nov 2021 - Aug 2023
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="list-disc ml-5 space-y-1 text-left">
                                            <li>
                                                Spearheaded frontend modernization with <span className="font-semibold">React</span> and JavaScript to reduce customer-reported latency by 25% and improve retention.
                                            </li>
                                            <li>
                                                Engineered Python automation for API and UI test suites, integrating with <span className="font-semibold">Jest</span> and <span className="font-semibold">Postman</span> to cut production issues by 30%.
                                            </li>
                                            <li>
                                                Automated backend data validations with Python, SQL, and PL/SQL to ensure consistency between APIs and database transactions.
                                            </li>
                                            <li>
                                                Architected distributed Lifion microservices, increasing document import throughput from 6,000 to 10,000 records/day while maintaining 99.99% availability.
                                            </li>
                                            <li>
                                                Enforced RBAC for SOC2 compliance, accelerated incident resolution by 40%, and integrated AWS S3 storage for enterprise file reliability.
                                            </li>
                                            <li>
                                                Led 30+ strategic sessions to resolve 100+ high-impact client issues, enhancing observability with Kibana and Splunk.
                                            </li>
                                        </ul>
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
