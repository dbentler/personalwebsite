/*
In any other scenario, I'd prefer for the data contained in this file to be in a proper database.

However, cloud instance SQL is expensive (~$4/day), and I don't see the benefits of having a true data driven solution with a fully functioning
API and GET requests for something as simple as my portfolio website (minus saving costs on cloud build, but cloud build doesn't even come close to $4/month).

This still accomplishes one of my main goals for this rewrite though: make it so updating Skills and Experience would not require having to write more HTML.

If you're an Interviewer or Hiring Manager looking at this file though, I think we could have an interesting conversation on how I would've implemented a 
proper data driven solution for the below information!
*/

interface FakeDb {
    [key: string]: any[];
  }

const fakeDb: FakeDb = {
    'Languages': [
        { imageUrl: 'img/Python.png', name: 'Python'},
        { imageUrl: 'img/csharp.png', name: 'C#'},
        { imageUrl: 'img/typescript.png', name: 'TypeScript'},
        { imageUrl: 'img/javascript.png', name: 'JavaScript'},
        { imageUrl: 'img/mysql.png', name: 'MySQL'},
        { imageUrl: 'img/sql.png', name: 'SQL'},
        { imageUrl: 'img/c.png', name: 'C'},
        { imageUrl: 'img/cpp.png', name: 'C++'},
        { imageUrl: 'img/java.png', name: 'Java'},
        { imageUrl: 'img/html.png', name: 'HTML5'},
        { imageUrl: 'img/css.png', name: 'CSS'}
    ],

    'Software': [
        { imageUrl: 'img/vs-studio.png', name: 'Visual Studio'},
        { imageUrl: 'img/vs-code.png', name: 'Visual Studio Code'},
        { imageUrl: 'img/git.png', name: 'Git'},
        { imageUrl: 'img/sql-server.png', name: 'SQL Server Management Studio'},
        { imageUrl: 'img/postman.svg', name: 'Postman API Platform'},
        { imageUrl: 'img/microsoft-office.png', name: 'Microsoft Office Suite (Word, Excel, etc.)'},
        { imageUrl: 'img/azure.svg', name: 'Microsoft Azure'},
        { imageUrl: 'img/appengine.png', name: 'Google Cloud Platform'},
        { imageUrl: 'img/windows.png', name: 'Windows'},
        { imageUrl: 'img/macos.png', name: 'macOS'},
        { imageUrl: 'img/linux.png', name: 'Linux'},
        { imageUrl: 'img/adobe.png', name: 'Adobe Creative Suite'},
    ],

    'Frameworks': [
        { imageUrl: 'img/angular.png', name: 'Angular'},
        { imageUrl: 'img/react.png', name: 'React'},
        { imageUrl: 'img/dotnet.png', name: '.NET'},
        { imageUrl: 'img/bootstrap.png', name: 'Bootstrap'},
        { imageUrl: 'img/flask.png', name: 'Flask'}
    ],

    'Education': [
        {
            name: 'New York University',
            location: 'New York City, New York',
            completed: 'May 2021',
            certificate: "Studied for Bachelor's of Science in Computer Science and Engineering"
        },
        {
            name: 'Walt Whitman High School',
            location: 'South Huntington, New York',
            completed: 'June 2018',
            certificate: 'New York Regents High School Diploma with Advanced Designation in Science'
        }
    ],

    'Experience': [
        {
            company: 'biBERK Business Insurance',
            location: 'Wilkes-Barre, Pennsylvania',
            role: 'Full Stack Software Engineer',
            dates: 'August 2022 - Present',
            accomplishments: [
                "Crafted and implemented a data-driven solution for the validation of Worker Compensation policies utilizing Angular, C# .NET, and Entity Framework, ensuring seamless compliance with a diverse set of State laws.",
                "Pioneered the development of an intuitive, in-house web-based configuration tool leveraging Azure Cosmos DB, C# .NET, Azure Functions, and Angular - empowering product owners, business analysts, and developers to efficiently manage underwriting questions with integrated validation for embedded logical expressions and conditionals.",
                "Revitalized and optimized critical SQL stored procedures, slashing execution times from multiple minutes to mere seconds, which resulted in significantly elevated producer and customer satisfaction during the policy purchasing process."
            ]
        },
        {
            company: 'Dice Habit',
            location: 'Los Angeles, California',
            role: 'Full Stack Software Engineer (Part-time)',
            dates: 'May 2022 - November 2022',
            accomplishments: [
                "Orchestrated the development of a tailored website allowing retailers to effortlessly access and customize specialty dice orders.",
                "Leveraged React's component-based architecture to create a modular and scalable solution tailored to client specifications.",
                "Oversaw the deployment of both the website and MySQL database on the Google App Engine via the Google Cloud Platform."
            ]
        }
    ]
};

export default fakeDb;