import {
  EnvelopeOpenIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import resume from "../../assets/youkwhan_kim_resume.pdf";

function Home() {
  return (
    <section id="home">
      <div className="mx-auto flex max-w-[950px] flex-col items-start justify-center gap-10 py-28">
        <div>
          <h1 className="text-[2rem] leading-[3.125rem]">
            Hello! I am a{" "}
            <span className="text-secondary-100">Software Engineer</span> who
            enjoys crafting experiences that empower users. I am now designing
            at <span className="text-secondary-100">100devs</span> team.
          </h1>
        </div>
        <div>
          <p className="mb-2.5">
            Bachelor's degree in Applied Mathematics & Statistics, and Economics at{" "}
            <span className="text-secondary-100">Stony Brook University</span>
          </p>
          <p>
            Previously at <span>Company</span>
          </p>
        </div>
        <div className="text-primary-400 flex items-center justify-start gap-6 drop-shadow-lg">
          <a
            href="mailto:Youkwhan@gmail.com"
            className="hover:translate-y-1 hover:text-secondary-100"
          >
            <EnvelopeOpenIcon
              className="w-6"
              style={{ stroke: "currentColor", strokeWidth: 2 }}
            />
          </a>
          <a
            href={resume}
            target="_blank"
            className="hover:translate-y-1 hover:text-secondary-100"
          >
            <DocumentTextIcon
              className="w-6"
              style={{ stroke: "currentColor", strokeWidth: 2 }}
            />
          </a>
          <a
            href="https://github.com/Youkwhan"
            target="_blank"
            className="hover:translate-y-1 hover:text-secondary-100"
          >
            <i class="fa-brands fa-github-alt text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/youkwhan/"
            target="_blank"
            className="hover:translate-y-1 hover:text-secondary-100"
          >
            <i class="fa-brands fa-linkedin-in text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
