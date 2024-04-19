import {
  EnvelopeOpenIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import resume from "../../assets/youkwhan_kim_resume.pdf";

function Home() {
  return (
    <section id="home">
      <div className="mx-auto flex max-w-[950px] flex-col items-start justify-center gap-10 py-28 px-4 md:px-0">
        <div>
          <h1 className="text-[2rem] leading-[3.125rem]">
            Hello! I am a <span>Software Engineer</span> who enjoys crafting
            experiences that empower users. I am now developing at{" "}
            <span>Dev10</span>.
          </h1>
        </div>
        <div>
          <p className="mb-2.5">
            Bachelor's degree in Applied Mathematics & Statistics, and Economics
            at <span>Stony Brook University</span>
          </p>
          <p>
            Previously at <span>Headstarter</span>
          </p>
        </div>
        <div className="flex items-center justify-start gap-6 text-primary-400 drop-shadow-lg">
          <a
            href="mailto:Youkwhan@gmail.com"
            className="hover:translate-y-0.5 hover:text-secondary-100"
          >
            <EnvelopeOpenIcon
              className="w-6"
              style={{ stroke: "currentColor", strokeWidth: 2 }}
            />
          </a>
          <a
            href={resume}
            target="_blank"
            className="hover:translate-y-0.5 hover:text-secondary-100"
          >
            <DocumentTextIcon
              className="w-6"
              style={{ stroke: "currentColor", strokeWidth: 2 }}
            />
          </a>
          <a
            href="https://github.com/Youkwhan"
            target="_blank"
            className="hover:translate-y-0.5 hover:text-secondary-100"
          >
            <i className="fa-brands fa-github-alt text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/youkwhan/"
            target="_blank"
            className="hover:translate-y-0.5 hover:text-secondary-100"
          >
            <i className="fa-brands fa-linkedin-in text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
