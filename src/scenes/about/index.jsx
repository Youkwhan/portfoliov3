import profile from "../../assets/IMG_1242.jpg";
import Techstack from "./Techstack";

function About() {
  return (
    <section id="about">
      <div className="mx-auto flex max-w-[950px] py-28">
        <section className="flex items-start justify-between gap-14">
          {/* LEFT */}
          <div className="max-w-[50%]">
            <img src={profile} />
          </div>
          {/* RIGHT */}
          <article className="flex max-w-[50%] flex-col">
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              nihil aut deleniti libero voluptatum consequuntur nulla eius
              repudiandae veritatis dolores officia iure ipsam vero? Architecto
              et beatae aut tempore veritatis, non temporibus natus illo
              corporis cum aspernatur quis sapiente cumque accusantium dolores
              ad qui quia iure eligendi doloremque voluptatibus numquam.
            </p>
            <p className="my-8 text-base ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              possimus sed inventore quam quos obcaecati illum quod dolorum non
              voluptatibus veritatis corrupti unde optio quasi distinctio
              accusamus nostrum, similique dolores nesciunt molestias amet hic
              ipsam dolore mollitia. Necessitatibus ullam labore quidem ipsam
              atque doloremque asperiores tempora ducimus et, perferendis
              numquam.
            </p>
            <p className="mb-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum
              cupiditate adipisci, eligendi alias ipsum, blanditiis, pariatur ex
              quia iusto aliquid sapiente delectus eos. Optio molestias
              voluptatibus rerum nostrum dolor!
            </p>
          </article>
        </section>
      </div>
      <div className="bg-primary-500">
        <section className="mx-auto max-w-[950px] py-28">
          {/* Skill */}
          <article className="rounded-lg bg-[#111827] p-5 text-primary-500">
            <h2 className="mb-5 text-center text-2xl font-bold  tracking-widest">
              Tech Stack
            </h2>
            <Techstack />
          </article>
          {/* Journey */}
          <article></article>
        </section>
      </div>
    </section>
  );
}

export default About;
