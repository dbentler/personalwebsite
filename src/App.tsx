import './App.css';
import EducationSection from './components/Sections/EducationSection';
import IntroductionSection from './components/Sections/IntroductionSection';
import SkillsSection from './components/Sections/SkillsSection';

function App() {

  return (
    <div className='container'>
      <IntroductionSection/>
      <SkillsSection/>
      <EducationSection/>
    </div>
  );
}

export default App;
