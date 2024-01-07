import './App.css';
import SkillSubsectionGenerator from './components/skill-subsection-generator/skill-subsection-generator';
import IntroductionSection from './components/Sections/IntroductionSection';
import SkillsSection from './components/Sections/SkillsSection';

function App() {

  return (
    <div className='container'>
      <IntroductionSection/>
      <SkillsSection/>
    </div>
  );
}

export default App;
