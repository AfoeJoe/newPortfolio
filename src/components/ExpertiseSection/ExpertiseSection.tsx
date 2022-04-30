import React from 'react';
import styles from './ExpertiseSection.module.css';

const ExpertiseSection = () => {
  return (
    <section id='skills'>
      <div className='title clearfix'>
        <div className='spot off'>
          <img src='assets/css/img/about-back.png' alt='' />
          <span></span>
          <span></span>
          <img src='assets/css/img/about-front.png' alt='' />
          <span className='mask'></span>
        </div>

        <h1>Tools</h1>
        <h2>No bragging!</h2>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.lists}>
          <aside>
            {/* <h3>TL;DR</h3> */}
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML &amp; CSS</li>
              <li> React.JS</li>
            </ul>
          </aside>
          <aside>
            {/* <h3>TL;DR</h3> */}
            <ul>
              <li>VS code</li>
              <li>Atom</li>
              <li>Figma</li> <li>MacOS</li>
            </ul>
          </aside>
        </div>
        <a
          className={styles.button}
          href={'../../assets/OkunolaJoshua.pdf'}
          download='OkunolaJoshuaCV.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default ExpertiseSection;
