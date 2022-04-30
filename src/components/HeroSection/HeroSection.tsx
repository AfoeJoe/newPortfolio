import Image from 'next/Image';
import styles from './HeroSection.module.css';
import { classnames } from '../../../utils';

const HeroSection = () => {
  return (
    <div
      className={classnames(
        styles.hero,
        styles.title,
        styles.intro,
        styles.clearfix
      )}
    >
      <div className={styles.imgContainer}>
        <Image
          src={'/assets/logo.svg'}
          alt='Okunola Joshua'
          className={styles.logoimg}
          layout='fill'
        />
      </div>
      <span>...</span>
      <h2>JavaScript Developer</h2>
    </div>
  );
};

export default HeroSection;
