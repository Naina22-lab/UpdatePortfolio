import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Naina</h1>
        <p className={styles.description}>
        I am a front-end developer, I craft user-friendly web apps with React.js. My passion for problem-solving extends to data structures & algorithms with C++. This combo fuels my drive to become a well-rounded developer tackling complex challenges
        </p>
        <a href="https://drive.google.com/file/d/1rwA_gJHl1PCQvoOOsvxCwa8kDZrybB63/view?usp=drive_link"
         className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
