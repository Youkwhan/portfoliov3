import profile from "../../assets/IMG_1242.jpg";
import Techstack from "./Techstack";

function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto flex max-w-[950px] py-28 ">
        <section className="flex flex-col items-start justify-between gap-14 md:flex-row">
          {/* LEFT */}
          <div className="md:max-w-[50%]">
            <img src={profile} />
          </div>
          {/* RIGHT */}
          <article className="flex flex-col md:max-w-[50%]">
            <p className="text-base">
              My name is <span>You-Kwhan Kim</span>. I am an interdisciplinary
              <span> Web Developer</span> with a background in applied
              mathematics, statistics, economics and digital design.
            </p>
            <p className="mt-2 text-base">
              I enjoy creating intuitive user experiences using domain
              knowledge, such as <span>interactive design</span>, and my deep
              understanding of economic behavior for impactful data
              visualization.{" "}
              <span>
                I am currently developing at 100Devs, a training program tied to
                a digital agency, building websites and apps for clients.
              </span>
            </p>
            <p className=" mt-6 text-base ">
              My specialization encompasses a range of skills vital to{" "}
              <span>modern web development:</span>
            </p>
            <ul className="my-2 list-disc pl-8">
              <li>
                <p className="text-base">Responsive Design</p>
              </li>
              <li>
                <p className="text-base">Efficient Layout</p>
              </li>
              <li>
                <p className="text-base">Content Management System</p>
              </li>
              <li>
                <p className="text-base">Search Engine Optimization</p>
              </li>
            </ul>
            <p className="mb-6 text-base">
              I prioritize ensuring seamless experiences across various screens
              and have an interest in exploring the potential
              applications of AI beyond screen-based interactions.
            </p>

            <p className="mb-4 text-base">
              When I'm not coding, I enjoy hanging out, reading, Photoshop
              editing, gaming, building model kits, and watching anime.
            </p>
          </article>
        </section>
      </div>

      <section className="full-bleed mx-auto max-w-[950px] bg-bg-gray py-28">
        {/* Skill */}
        <article className="rounded-lg p-5 ">
          <h2 className="mb-5 text-center text-2xl font-bold  tracking-widest">
            Tech Stack
          </h2>
          <Techstack />
        </article>
        {/* Journey */}
        <article></article>
      </section>
    </section>
  );
}

export default About;
