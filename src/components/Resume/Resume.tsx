import { Mail, MapPin, Phone, User } from "lucide-react";
import styles from "./resume.module.css";

export function Resume({ data }) {
  return (
    <div className={styles.resume}>
      <Intro data={data} />
      <Contact data={data} />
      <div className={styles.resume__content}>
        <div>
          <ContentSection title={"Work Experience"}>
            <WorkExperience data={data} />
          </ContentSection>
        </div>
        <div>
          <ContentSection title={"Skills"}>
            <Skills data={data} />
          </ContentSection>
          <ContentSection title={"Personal Projects"}>
            <PersonalProjects data={data} />
          </ContentSection>
          <ContentSection title={"Education"}>
            <Education data={data} />
          </ContentSection>
        </div>
        <div></div>
      </div>
    </div>
  );
}

function Intro({ data }) {
  return (
    <div className={styles.resume__intro}>
      <h1 className={styles.intro__heading}>{data.name}</h1>
      <p className={styles.intro__role}>{data.role}</p>
      <p className={styles.intro__description}>{data.description}</p>
    </div>
  );
}

function Contact({ data }) {
  return (
    <div className={styles["resume__contact-container"]}>
      <div className={styles.resume__contact}>
        <div className={styles["contact__item--left"]}>
          <div className={styles.contact__item}>
            <Mail size={"var(--text-sm)"} />
            {data.contact.email}
          </div>
          <div className={styles.contact__item}>
            <MapPin size={"var(--text-sm)"} />
            {data.contact.location}
          </div>
        </div>
        <div className={styles["contact__item--right"]}>
          <div className={styles.contact__item}>
            <Phone size={"var(--text-sm)"} />
            {data.contact.phone}
          </div>
          <div className={styles.contact__item}>
            <User size={"var(--text-sm)"} />
            <a href={data.contact.linkedin.href}>
              {data.contact.linkedin.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSection({ title, children }) {
  return (
    <div className={styles["content-section"]}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function WorkExperience({ data }) {
  function WorkItem({ role, company, duration, domain, projects }) {
    return (
      <div className={styles["work-experience"]}>
        <h4 className={styles["work-experience__role"]}>{role}</h4>
        <p className={styles["work-experience__company"]}>{company}</p>
        <p className={styles["work-experience__duration"]}>{duration}</p>
        <p className={styles["work-experience__domain"]}>{domain} </p>

        <ul className={styles["work-experience__list"]}>
          {projects.map((project) => (
            <li
              className={styles["work-experience__list-item"]}
              key={project.title}
            >
              <span className={styles["work-experience__list-item-title"]}>
                {project.title} :{" "}
              </span>
              <span className={styles["work-experience__description"]}>
                {project.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {data.workExperience.map((work) => (
        <WorkItem key={work.role} {...work} />
      ))}
    </div>
  );
}

function Skills({ data }) {
  return (
    <div className={styles["skills-container"]}>
      {data.skills.map((skill) => (
        <div key={skill} className={styles.skill}>
          {skill}
        </div>
      ))}
    </div>
  );
}

function PersonalProjects({ data }) {
  return (
    <div className={styles["personal-projects-container"]}>
      {data.personalProjects.map((project) => (
        <div key={project.title} className={styles["personal-project"]}>
          <div className={styles["personal-project__title"]}>
            {project.title}
          </div>
          <ul className={styles["personal-project__list"]}>
            {project.description.map((item) => (
              <li className={styles["personal-project__list-item"]}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Education({ data }) {
  return (
    <div className={styles["education-container"]}>
      {data.education.map((item) => (
        <div className={styles.education__list}>
          <div className={styles.education__degree}>
            {item.degree} ({item.duration})
          </div>
          <div>{item.institution}</div>
          <div>{item.domain}</div>
          <div>{item.grade}</div>
        </div>
      ))}
    </div>
  );
}
