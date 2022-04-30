import ContactSection from '../components/ContactSection/ContactSection';
import ExpertiseSection from '../components/ExpertiseSection/ExpertiseSection';
import FooterSection from '../components/FooterSection/FooterSection';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import styles from '../styles/Home.module.css';
import WorkSection from '../components/WorkSection/WorkSection';
/* import ContactSection from '../components/ContactSection/ContactSection';
 */
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <div className='main clearfix'>
        <HeroSection />
        <WorkSection />
        <ExpertiseSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
