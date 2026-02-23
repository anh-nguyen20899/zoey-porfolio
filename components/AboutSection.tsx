import React from "react"
import Image from "next/image"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail
} from "react-icons/ai"
const skills = [
  { skill: "Mobile-Responsive Websites" },
  { skill: "Booking & Appointment Systems" },
  { skill: "Admin Dashboards" },
  { skill: "Automated Email & SMS Notifications" },
  { skill: "Automated Inventory Controls" },
  { skill: "Performance-Optimized Applications" },
  { skill: "Real-time Availability Sync" },
  { skill: "Social Media & Chatbot Integration" },
  { skill: "Search Engine Optimization" },
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

            <br />
              <p>
                Hi, I’m Zoe — a developer specializing in{" "}
                <span className="font-bold text-teal-500">
                  booking and service management platforms
                </span>.
              </p>
            <br />
              I have built high-performance systems for Healthcare, Recruitment, and PTE Education. 
              I now leverage this expertise to help <span className="text-teal-500 font-bold">businesses</span>  manage appointments, users, and payments efficiently.
            <br/>
            <br/>
            From <span className="text-teal-500 font-bold">seamless booking engines</span> to smart admin dashboards, I create tools that turn manual work into smooth digital experiences.
            <p>
            <br />
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
            /> lananh2081999@gmail.com
          </a>

            
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection
