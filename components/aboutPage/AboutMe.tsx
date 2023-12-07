import MyInfo from "../MyInfo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AboutMe() {
  return (
    <div className="px-12 py-10">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[1.6rem] prose-p:text-2xl prose-p:leading-[1.65]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {`I'm a passionate and experienced full stack developer with expertise
          in multiple programming languages such as JavaScript, TypeScript,
          Java, Python and PHP. I have a string background in designing,
          developing, and deploying scalable web applications. In addition to my
          coding skills, I have hands-on experience working with various cloud
          platforms including AWS, GCP, and Firebase. This allows me to leverage
          the power of cloud computing and build robust and scalable
          applications that can handle high traffic and complex functions.
          Throughout my career, I have had the privilege of working in global
          companies, where I have actively contributed to the development
          process using the Agile Scrum methodology. This experience has honed
          my collaborative skills and has given me a deep understanding of the
          importance of teamwork and delivering high-quality software within
          tight deadlines. Passionate about continuous learning, I stay
          up-to-date with the latest industry trends and technologies to provide
          innovative solutions. I am a quick learner and adaptable to new
          technologies and frameworks, enabling me to tackle diverse and
          challenging projects with ease.`}
        </ReactMarkdown>
      </article>

      <ul className="location grid grid-cols-1 sm:grid-cols-2 mt-6 gap-y-2">
        <MyInfo field="YEARS OF EXPERIENCE" value="7+" />
        <MyInfo field="residence" value="Finland" />
        <MyInfo field="freelance" value="Available" />
        <MyInfo field="address" value="Vantaa, Finland" />
      </ul>
    </div>
  );
}
