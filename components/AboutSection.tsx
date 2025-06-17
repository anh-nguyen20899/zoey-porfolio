import React from "react"
import Image from "next/image"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail
} from "react-icons/ai"
const skills = [
  { skill: "HTML CSS" },
  { skill: "Tailwind CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "VueJS" },
  { skill: "ReactJS" },
  { skill: "NextJS" },
  { skill: "Angular 8+" },
  { skill: "C# Dotnet" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "SQL/NoSQL" },
  { skill: "Git" },
  { skill: "AWS" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Zoey and I am an{" "}
              <span className="font-bold">{"ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span> software engineer
              {/* based in Sydney, NSW. */}
            </p>
            <br />
            <p>
            As a software engineer, I am familiar with browser testing, debugging, handling API requests and building beautiful UI layouts.
            </p>
            <br />
            <p>
            I am excited to see{" "}
              <span className="font-bold text-teal-500"> new opportunities. 🙂
              </span>{" "}
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Contact: </h1>
            <span className="font-bold text-teal-500"> LinkedIn </span>
            <a
              href="https://www.linkedin.com/in/zoey-ng/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            <span className="font-bold text-teal-500"> Github </span>
            <a href="https://github.com/anh-nguyen20899" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            /> 
          </a>
          <span className="font-bold text-teal-500"> Email </span>
          <a href="mailto:anhananh1999@gmail.com" target="_blank">
            <AiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            /> anhananh1999@gmail.com
          </a>

            
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection
