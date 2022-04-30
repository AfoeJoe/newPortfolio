import Image from 'next/Image';
import React from 'react';
import styles from './WorkSection.module.css';
import { classnames } from '../../../utils';

const WorkSection = () => {
  return (
    <section id='work' className={classnames(styles.work, styles.clearfix)}>
      <div className={styles.title}>
        <div className={styles.text}>
          <h1>Work</h1>
        </div>
      </div>

      <div className={classnames(styles.wrappper, styles.gridWrapper)}>
        <article className={classnames(styles.article)}>
          <div className={styles.imageFrame}>
            <Image
              src={'/assets/p1.png'}
              alt='Fintech App'
              className={styles.imeg}
              layout='fill'
            />
          </div>

          <div className={styles.workInfo}>
            <h2>Fintech App</h2>

            {/*    <ul>
              <li>
                <a href='#' className=''>
                  1
                </a>
              </li>
              <li>
                <a href='#' className='active'>
                  2
                </a>
              </li>
              <li>
                <a href='#'>3</a>
              </li>
              <li>
                <a href='#'>4</a>
              </li>
            </ul> */}
          </div>
        </article>

        <article className={classnames(styles.article)}>
          <div className={styles.imageFrame}>
            <Image
              src={'/assets/p2.png'}
              alt='Telemedicine App'
              className={styles.imeg}
              layout='fill'
            />
          </div>

          <div className={styles.workInfo}>
            <h2>Telemedicine App</h2>
          </div>
        </article>

        <article className={classnames(styles.article)}>
          <div className={styles.imageFrame}>
            <Image
              src={'/assets/p22.png'}
              alt='Telemedicine App'
              className={styles.img}
              layout='fill'
            />
          </div>

          <div className={styles.workInfo}>
            <h2>Telemedicine App</h2>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WorkSection;
