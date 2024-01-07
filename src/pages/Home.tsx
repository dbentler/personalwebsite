import { Button } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import ContactLinks from '../components/Sections/ContactLinks';
import EducationSection from '../components/Sections/EducationSection';
import ExperienceSection from '../components/Sections/ExperienceSection';
import IntroductionSection from '../components/Sections/IntroductionSection';
import SkillsSection from '../components/Sections/SkillsSection';
import '../App.css';

function Home() {

  return (
    <div className='container'>
      <IntroductionSection/>
      <SkillsSection/>
      <EducationSection/>
      <ExperienceSection/>
      <div className='center buttons-container'>
        <Button variant="success" size='lg' href='img/DarrenBentler_Resume.pdf'>Download Résumé (PDF)</Button>
      </div>
      <ContactLinks/>
      <Footer/>
    </div>
  );
}

export default Home;
