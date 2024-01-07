import fakeDb from '../../api/fakeDb';
import IconImage from '../IconImage/IconImage';

interface SkillSubsectionGeneratorProps {
    subsectionName: string;
  }

const SkillSubsectionGenerator: React.FC<SkillSubsectionGeneratorProps> = ({ subsectionName }) => {

    // TODO: Refactor this data into a data driven solution.
    const data = fakeDb[subsectionName];
      
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