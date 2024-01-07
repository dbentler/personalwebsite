import IconImage from '../icon-image/icon-image';

function SkillSubsectionGenerator(){

    // TODO: Refactor this data into a data driven solution.
    const data = [
        { imageUrl: 'img/Python.png', name: 'Python'},
        { imageUrl: 'img/csharp.png', name: 'C#'}
      ];
      
    return (
        <div className='container center-text'>
            <span className='span-underline'>Skills</span>
            <div className='justify-content-center'>
                <div className='row'>
                    {data.map((item, index) => (
                        <div key={index} className='col-md-2 col-sm-4 col-xs-4 thumb'>
                            <IconImage imageUrl={item.imageUrl} name={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillSubsectionGenerator;