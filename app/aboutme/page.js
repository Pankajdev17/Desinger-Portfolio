import React from "react";
import PageHeading from "../Components/PageHeading";

const page = () => {
  const sections = [
    {
      title: "Full-Stack Development Expertise",
      paragraphs: [
        <>
          With <span className="font-bold">6 years of hands-on experience</span>{" "}
          in designing and developing dynamic, high-performance web
          applications, I have honed my skills as a{" "}
          <span className="font-bold">Full-Stack Developer</span>. My expertise
          spans both{" "}
          <span className="font-bold">client-side and server-side</span>{" "}
          technologies, including{" "}
          <span className="font-bold">
            React, Next.js, Laravel, CodeIgniter, and Node.js
          </span>
          .
        </>,
        <>
          From crafting seamless UI/UX experiences using{" "}
          <span className="font-bold">
            Tailwind, Bootstrap, and modern JavaScript frameworks
          </span>
          , to building{" "}
          <span className="font-bold">scalable backend solutions</span> with{" "}
          <span className="font-bold">
            MySQL, PostgreSQL, MongoDB, and Firebase
          </span>
          , I ensure that every project is optimized for{" "}
          <span className="font-bold">speed, security, and scalability</span>.
        </>,
      ],
    },
    {
      title: "Custom Solutions Across Multiple Platforms",
      paragraphs: [
        <>
          My versatility extends to CMS platforms like{" "}
          <span className="font-bold">
            WordPress, Shopify, Webflow, and Squarespace
          </span>
          , where I build tailored solutions that align with business needs.
          With deep knowledge of{" "}
          <span className="font-bold">
            API development, cloud services, and version control systems (Git,
            Bitbucket)
          </span>
          , I ensure that every project is built with{" "}
          <span className="font-bold">
            modern standards and peak performance
          </span>{" "}
          in mind.
        </>,
        <>
          Whether it’s custom eCommerce platforms, SaaS applications, or
          subscription-based services, I focus on delivering user-centric,
          future-proof solutions that elevate digital experiences.
        </>,
      ],
    },
    {
      title: "Innovation & Excellence in Every Project",
      paragraphs: [
        <>
          Over the years, I have worked on diverse projects, from{" "}
          <span className="font-bold">
            real estate portals and fintech applications to AI-driven software
            and e-marketplaces
          </span>
          . I thrive on solving complex challenges through{" "}
          <span className="font-bold">
            cutting-edge technologies and creative problem-solving
          </span>
          .
        </>,
        <>
          With a keen eye for detail and a passion for innovation, I stay ahead
          of modern trends, pushing the boundaries of what’s possible in web
          development. My commitment to{" "}
          <span className="font-bold">
            excellence, adaptability, and reliability
          </span>{" "}
          ensures that every project I undertake not only meets industry
          benchmarks but{" "}
          <span className="font-bold">
            sets new standards in digital innovation
          </span>
          .
        </>,
      ],
    },
  ];

  return (
    <main className="w-full h-full bg-[var(--bgcolor)] pt-20 md:pt-15">
      <PageHeading text="The Story Behind the Code" />
      <div className="bg-[var(--coloroff-white)] w-full h-full mt-15 px-5 md:px-8 rounded-t-2xl md:rounded-t-4xl pt-10 pb-10 md:pb-30">
        {sections.map((section, index) => (
          <section key={index} className={`${index === 0 ? "mt-0" : "mt-10"}`}>
            <h3
              className={`text-lg md:text-2xl font-bold ${
                index === 0 ? "mt-0" : "mt-5"
              }`}
            >
              {section.title}
            </h3>
            {section.paragraphs.map((para, i) => (
              // ✅ Hydration Error FIX: Changed <p> to <div> to avoid <ul> inside <p>
              <div key={i} className="text-sm md:text-base mt-3">
                {para}
              </div>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
};

export default page;
