import Image from 'next/Image';
import styles from './FooterSection.module.css';

const FooterSection = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.wrapper}>
        <ul className={styles.lists}>
          <li>
            <a
              href='https://t.me/joshphorlarb'
              data-icon='e'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={'/assets/telegram.svg'}
                alt=''
                width={100}
                height={100}
              />
            </a>
          </li>
          <li>
            <a
              role='button'
              href='https://wa.me/79270434722'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={'/assets/whatsapp.svg'}
                alt=''
                width={100}
                height={100}
              />
            </a>
          </li>
          <li>
            <a
              href='https://t.me/joshphorlarb'
              data-icon='e'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={'/assets/telegram.svg'}
                alt=''
                width={100}
                height={100}
              />
            </a>
          </li>
          <li>
            <a
              role='button'
              href='https://wa.me/79270434722'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={'/assets/whatsapp.svg'}
                alt=''
                width={100}
                height={100}
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default FooterSection;
