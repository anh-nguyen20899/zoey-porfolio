import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare, BsLinkedin } from "react-icons/bs"

const projects = [
  {
    name: ".Net Web API",
    description: "I created a REST API project using the latest .NET 6 and MongoDb innovations.",
    image: "/aspnet.jpg",
    github: "https://github.com/anh-nguyen20899/webapi-dotnet",
    link: "https://github.com/anh-nguyen20899/webapi-dotnet",
  },
  {
    name: "Carina EyeCare ",
    description:
      "This platform is about to provide Optometry Services in Burwood",
    image: "/next.svg",
    github: "https://github.com",
    link: "https://carinaeyecare.com.au/",
  },
  {
    name: "LearnIt Platform",
    description:
      "This platform is a web app that keeps track of lessons progress",
    image: "/learnIt.png",
    github: "https://github.com/anh-nguyen20899/learning-mern-project",
    link: "https://sparkly-piroshki-ab82fb.netlify.app/login",
  },
  {
    name: "Todo App",
    description:
      "This is a simple todo App written by ReactJS",
    image: "/vercel.svg",
    github: "https://github.com/anh-nguyen20899/react-todo-app",
    link: "https://react-todo-app-six-zeta.vercel.app/",
  },
  {
    name: "Health Care Management",
    description: ".",
    image: "/aspnet.jpg",
    github:"",
    linkedIn: "https://www.linkedin.com/company/telstra-health_health-services/",
    link: "https://www.telstrahealth.com/",
  },
  {
    name: "Recruitment Platform",
    description: ".",
    image: "/aspnet.jpg",
    github:"",
    linkedIn: "https://www.linkedin.com/company/pursuited/?originalSubdomain=au",
    link: "https://www.pursuited.com/platform/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
      {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github ? (
                      <Link href={project.github} target="_blank">
                      <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> ) : project.linkedIn ? (
                          <Link href={project.linkedIn} target="_blank">
                        <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      ) : null }
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
