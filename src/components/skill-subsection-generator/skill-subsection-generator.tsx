import IconImage from '../icon-image/icon-image';

interface SkillSubsectionGeneratorProps {
    subsectionName: string;
  }

const SkillSubsectionGenerator: React.FC<SkillSubsectionGeneratorProps> = ({ subsectionName }) => {

    // TODO: Refactor this data into a data driven solution.
    const data = [
        { imageUrl: 'img/Python.png', name: 'Python'},
        { imageUrl: 'img/csharp.png', name: 'C#'},
        { imageUrl: 'img/typescript.png', name: 'TypeScript'},
        { imageUrl: 'img/javascript.png', name: 'JavaScript'},
        { imageUrl: 'img/c.png', name: 'C'},
        { imageUrl: 'img/cpp.png', name: 'C++'},
        { imageUrl: 'img/java.png', name: 'Java'},
        { imageUrl: 'img/html.png', name: 'HTML5'},
        { imageUrl: 'img/css.png', name: 'CSS'},
      ];
      
    return (
        <div>
            <h4>
                <span>
                    { subsectionName }
                </span>
            </h4>
            <div className='row center'>
            {data.map((item, index) => (
                <div key={index} className='col-md-2 col-sm-4 col-xs-4 thumb'>
                    <IconImage imageUrl={item.imageUrl} name={item.name} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default SkillSubsectionGenerator;