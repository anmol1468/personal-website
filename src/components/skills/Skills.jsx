import React from 'react'
import styles from './skills.module.scss'


const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'framer-motion', 'Typescript', 'Github', 'Redux', 'React', 'SCSS', 'APIs', 'Styled-Components', 'React-router', 'UI/UX', 'SVG', 'animation', 'Git'];
const DURATION = 20000;
const ROWS = 3;
const TAGS_PER_ROW = 6;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className={`${styles.loopSlider}`} style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className={`${styles.inner}`}>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className={`${styles.tag}`}><span>#</span> {text}</div>
);

const Skills = () => (
  <div className={`${styles.skills}`}>
    <header className={`${styles.header}`}>
      <h1>My Skills</h1>
      <p>These are some of technologies, I have used in my projects over the past few years</p>
    </header>
    <div className={`${styles.tagList}`}>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className={`${styles.fade}`}/>
    </div>
  </div>
);

export default Skills