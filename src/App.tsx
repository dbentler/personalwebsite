import './App.css';
import SkillSubsectionGenerator from './components/skill-subsection-generator/skill-subsection-generator';
import IconImage from './components/icon-image/icon-image';

function App() {

  return (
    <div className='container'>
      <p>Hello World</p>
      <ul>
        <li>My name is Darren</li>
        <li>Welcome to my website</li>
        <li>Hope you enjoy :)</li>
      </ul>
      <SkillSubsectionGenerator/>
    </div>
  );
}

export default App;
