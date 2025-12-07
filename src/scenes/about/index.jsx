import profile from "../../assets/pfp1.jpg";
import Techstack from "./Techstack";

function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto flex max-w-[950px] px-4 py-28 md:px-0">
        <section className="flex flex-col items-start justify-between gap-14 md:flex-row">
          {/* LEFT */}
          <div className="max-w-[400px] md:max-w-[50%]">
            <img src={profile} />
          </div>
          {/* RIGHT */}
          <article className="flex flex-col md:max-w-[50%]">
            <p className="text-base">
              Hey, my name is <span>You-Kwhan Kim</span>. I am an passionate
              <span> Full Stack Developer</span> based in New York with a background in applied
              mathematics, statistics, economics and digital design.
            </p>
            <p className="mt-2 text-base">
              I enjoy creating intuitive user experiences by leveraging domain
              knowledge, such as <span>interactive design</span>, and applying
              my deep understanding of economic behavior to create impactful
              data visualizations.{" "}
              <span>
                I am currently developing at Prime Therapeutics, a PBM company
                that strives to ensure people receive the right medications they
                need, building websites and apps for clients.
              </span>
            </p>
            <p className="mt-6 text-base ">
              My specialization encompasses:
            </p>
            <ul className="pl-4 my-2 list-disc">
              <li>
                <p className="text-base">API Design & Intergration</p>
              </li>
              <li>
                <p className="text-base">Full-Stack Application Architecture</p>
              </li>
              <li>
                <p className="text-base">Relational Database Management</p>
              </li>
              <li>
                <p className="text-base">Cloud Application Deployment</p>
              </li>
            </ul>
            <p className="mb-6 text-base">
              I prioritize ensuring seamless user experiences and have an
              interest in exploring the potential of 3D web experiences with
              libraries like <span>Three.js</span> beyond traditional screen-based
              interactions.
            </p>

            <p className="mb-4 text-base">
              When I'm not coding, I enjoy hanging out, reading, gaming,
              building model kits, and watching anime.
            </p>
          </article>
        </section>
      </div>

      <section className="full-bleed mx-auto max-w-[950px] bg-bg-gray py-28">
        {/* Skill */}
        <article className="p-5 rounded-lg ">
          <h2 className="mb-5 text-2xl font-bold tracking-widest text-center">
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
