import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import AI from "@/../public/AI.jpeg"
import Tailwind from "@/../public/tailwind.png"
import Programming from "@/../public/programming.png"
import Nextjs from "@/../public/nextjs.png"
import Typescript from "@/../public/typescript.png"
import GSAP from "@/../public/GSAP.jpg"


type Idata = {
  title: string,
  description: string,
  image: StaticImageData,
  blogLink: string
}

const data: Idata[] = [{
  title: "Artificial Intelligence",
  description: "Artificial Intelligence (AI) enables machines to mimic human intelligence for tasks like decision-making and learning. It's transforming industries by processing vast data and providing insights, promising smarter and more efficient systems for the future.",
  image: AI,
  blogLink: "/blog1"
}, {
  title: "Tailwind CSS",
  description: "Tailwind CSS is a utility-first framework that simplifies web design with predefined classes. It helps developers create responsive, customizable layouts quickly, focusing on flexibility and mobile-first design. Tailwind CSS is very useful in creating designs.",
  image: Tailwind,
  blogLink: "/blog2"
}, {
  title: "What is Programming?",
  description: "Programming is the process of writing code to instruct computers to perform tasks or solve problems. It uses languages like JavaScript or Python to create software and applications. Programmers write algorithms to automate processes and build digital solutions.",
  image: Programming,
  blogLink: "/blog3"
}, {
  title: "Benefits Of Next.js",
  description: "Next.js is a powerful React framework that enables server-side rendering and static site generation, improving performance and SEO. It simplifies routing and API integration, making it easy to build fast, scalable web applications.",
  image: Nextjs,
  blogLink: "/blog4"
}, {
  title: "Typescript",
  description: "TypeScript is a superset of JavaScript that adds static typing, helping developers catch errors during development. It improves code quality and makes large projects easier to manage. TypeScript is widely used for building scalable and reliable applications.",
  image: Typescript,
  blogLink: "/blog5"
}, {
  title: "What is GSAP?",
  description: "GSAP (GreenSock Animation Platform) is a JavaScript library for creating fast, high-performance animations on websites. It allows developers to animate elements like images and text with smooth transitions. GSAP is widely used for enhancing user interfaces with dynamic effects.",
  image: GSAP,
  blogLink: "/blog6"
},]
const App = () => {
  return (
    <>
      <div className="page1 " >
        <h1 className="tracking-in-expand">Welcome To My Blogs</h1>
        <p>Discover a world of thoughts, ideas, and insights. Whether you're here to explore the latest trends, learn something new, or just unwind with some light reading, you've come to the right place. Here, I share my journey, experiences, and passions across various topics. Each post is a blend of curiosity and creativity, designed to inspire and spark conversation. Feel free to browse through the categories, leave comments, and connect with me as we explore the world together, one blog at a time!

        </p>
        <button type="button">Explore Blogs</button>
      </div>
      <div className="page2">
        <h1>Blogs</h1>
        <div className="parentContainer">
          {data.map((elem) => (
            <div className="childContainer">
              <div className="imageContainer">
                <Image
                  className="image-AI"
                  src={elem.image}
                  width={200}
                  height={200}
                  alt="This picture is about AI"
                />
              </div>
              <div className="title">{elem.title}</div>
              <p>{elem.description}</p>
              <div className="readmore-parent">
                <Link href={elem.blogLink} className="readmore">Read more</Link>
              </div>
            </div>
          ))}
          {/* <div className="childContainer">
            <div className="imageContainer">
              <Image
                className="image-AI"
                src={AI}
                width={200}
                height={200}
                alt="This picture is about AI"
              />
            </div>
            <div className="title">Artificial Intelligence</div>
            <p>Artificial Intelligence (AI) enables machines to mimic human intelligence for tasks like decision-making and learning. It's transforming industries by processing vast data and providing insights, promising smarter and more efficient systems for the future.</p>
            <div className="readmore-parent">
              <Link href={"/blog1"} className="readmore">Read more</Link>
            </div>
          </div>
          <div className="childContainer">
            <div className="imageContainer">
            <Image
                className="image-AI"
                src={Tailwind}
                width={200}
                height={200}
                alt="This picture is about Tailwind css"
              />
            </div>
            <div className="title">Tailwind CSS</div>
            <p>Tailwind CSS is a utility-first framework that simplifies web design with predefined classes. It helps developers create responsive, customizable layouts quickly, focusing on flexibility and mobile-first design. Tailwind CSS is very useful in creating designs. </p>
            <div className="readmore-parent">
              <Link href={"/blog2"} className="readmore">Read more</Link>
            </div>
          </div>
          <div className="childContainer">
            <div className="imageContainer">
            <Image
                className="image-AI"
                src={Programming}
                width={200}
                height={200}
                alt="This picture is about Programming"
              />
            </div>
            <div className="title">What is Programming?</div>
            <p>Programming is the process of writing code to instruct computers to perform tasks or solve problems. It uses languages like JavaScript or Python to create software and applications. Programmers write algorithms to automate processes and build digital solutions.</p>
            <div className="readmore-parent">
              <Link href={"/blog3"} className="readmore">Read more</Link>
            </div>
          </div> */}
        </div>
        {/* <div className="parentContainer2">
          <div className="childContainer">
            <div className="imageContainer">
              <Image
                className="image-AI"
                src={Nextjs}
                width={200}
                height={200}
                alt="This picture is about Next.js"
              />
            </div>
            <div className="title">Benefits Of Next.js</div>
            <p>TypeScript is a superset of JavaScript that adds static typing, helping developers catch errors during development. It improves code quality and makes large projects easier to manage. TypeScript is widely used for building scalable and reliable applications.</p>
            <div className="readmore-parent">
              <Link href={"/blog4"} className="readmore">Read more</Link>
            </div>
          </div>
          <div className="childContainer">
            <div className="imageContainer">
              <Image
                className="image-AI"
                src={Typescript}
                width={200}
                height={200}
                alt="This picture is about Typescript"
              />
            </div>
            <div className="title">Typescript</div>
            <p>GSAP (GreenSock Animation Platform) is a JavaScript library for creating fast, high-performance animations on websites. It allows developers to animate elements like images and text with smooth transitions. GSAP is widely used for enhancing user interfaces with dynamic effects.</p>
            <div className="readmore-parent">
              <Link href={"/blog5"} className="readmore">Read more</Link>
            </div>
          </div>
          <div className="childContainer">
            <div className="imageContainer">
              <Image
                className="image-AI"
                src={GSAP}
                width={200}
                height={200}
                alt="This picture is about GSAP"
              />
            </div>
            <div className="title">What is GSAP?</div>
            <p>Next.js is a powerful React framework that enables server-side rendering and static site generation, improving performance and SEO. It simplifies routing and API integration, making it easy to build fast, scalable web applications.</p>
            <div className="readmore-parent">
              <Link href={"/blog6"} className="readmore">Read more</Link>
            </div>
          </div>
        </div> */}
      </div >
    </>
  )
}

export default App;