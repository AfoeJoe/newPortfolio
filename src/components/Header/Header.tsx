import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { classnames } from '../../../utils';

const Header = () => {
  return (
    <div className={classnames(styles.headerWrap, styles.full)}>
      <header className={styles.wrapper}>
        {/*  <div id='logo'>
          <Link passHref href='/'>
            <Image
              src={'/assets/logo.svg'}
              alt='Okunola Joshua'
              width={100}
              height={100}
            />
          </Link>
        </div> */}

        <nav className={styles.nav}>
          <ul>
            <li>
              <a href='#work'>Work</a>
            </li>
            <li>
              <a href='#skills'>SKills</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
