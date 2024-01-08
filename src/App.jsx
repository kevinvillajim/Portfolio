import Slider from "./components/Slider";
import Header from "./components/Header";
import "./App.css";
import { WhyCard } from "./components/WhyCard";
import { Skills } from "./components/Skills";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  const skills = [
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/BS.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/WP.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PHP.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/MYSQL.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/TW.svg",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/LV.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/FIGMA.png",
  ];

  const skillsDesign = [
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/ILL.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PS.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PP.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/SKU.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/ARCHICAD.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/ACAD.webp",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PB.png",
    "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/FL.png",
  ];
  return (
    <>
      <Header />
      <Slider
        img1="./src/assets/Coder.png"
        img2="./src/assets/Designer.png"
      />
      <img
        src="./src/assets/divisorInvertido.png"
        className="mt-[3rem] w-[100%]"
      />
      <div className="w-[100%] px-[15rem] bg-[white] my-[0.5px] py-[4rem]">
        <h1 className="text-[50px]">About</h1>
        <p className="text-start text-[20px] mb-[2rem]">
          Hi there! :D, my name is Kevin Villacreses, I live in Ecuador and I am
          27. Since 1 year ago have discover what I was made for, The Develop,
          and it changes my focus. <u>There are 3 words that describes me:</u>
        </p>
        <div className="grid grid-cols-3 gap-20">
          <WhyCard
            img={
              <img
                src="./src/assets/brain.svg"
                className="text-center w-[140px]"
              />
            }
            title="1. Curious"
            text="I love to learn, most of my time I spend learning new
        skills and exercising the mind, I think the association of logic and creativity brings bigest results."
          />
          <WhyCard
            img={
              <img
                src="./src/assets/bulb.svg"
                className="text-center w-[140px]"
              />
            }
            title="2. Issues-solver"
            text="Sometimes I enjoy the problems, why not? it is an oportunity to grow up, I focus on find the root of the problem an then in
        solution. Sometimes knowing deeper about the problem makes the difference. Inside the simplicity are the marvelous things"
          />
          <WhyCard
            img={
              <img
                src="./src/assets/self_improvement.svg"
                className="text-center w-[140px]"
              />
            }
            title="3. Peacefull"
            text="One of the things I appreciate is the calm and peace, every
        day I do introspection to improve my self and do my best."
          />
        </div>
      </div>
      <img
        src="./src/assets/divisor.png"
        className="w-[100%] mb-[3rem]"
      />
      <section className="w-[100%] px-[12rem]">
        <h1 className="text-[90px] mb-[5rem]">
          <strong>&lt;code&gt;</strong> Portfolio <strong>&lt;/code&gt;</strong>
        </h1>
        <h2 className="text-[40px] text-start my-[2rem]">Skills:</h2>
        <div className="flex flex-row justify-between align-middle bg-white p-[2rem] rounded-xl">
          {skills.map((item, index) => (
            <Skills
              key={index}
              alt={`skill-${index}`}
              img={item}
            />
          ))}
        </div>
        <h2 className="text-[40px] text-start my-[2rem]">Projects:</h2>
        <div className="grid grid-cols-2 gap-3">
          <ProjectCard
            img="./src/assets/portfolio/weather-project.png"
            title="Weather App"
            text="Front end App, consumes api, can search every city in the world, you can save your favourite cities and can change the Degrees in C° or F° - Responsive Design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/weatherProyectoFinalN2/"
            git="https://github.com/kevinvillajim/weatherProyectoFinalN2"
          />
          <ProjectCard
            img="./src/assets/portfolio/university-project.png"
            title="University Platform"
            text="Full Stack App with pure PHP, JS and CSS completly CRUD, relational tables, Role session and actions, grades, clases, inscriptions and message sistem inside."
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PHP.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/MYSQL.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/weatherProyectoFinalN2/"
            git="https://github.com/kevinvillajim/ProyectoFinalN3"
          />
          <ProjectCard
            img="./src/assets/portfolio/login-project.png"
            title="Login Project"
            text="Full Stack App with pure PHP and SQL. Functions: Dark Mode saving preferences by Local Storage, Hashed Password, Register of new users and Login, Profile with personal information, (CRUD Project) - Responsive Design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PHP.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/MYSQL.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://miniproyecton3kevinvillajim.000webhostapp.com/"
            git="https://github.com/kevinvillajim/miniproyectoN3_Login"
          />
          <ProjectCard
            img="./src/assets/portfolio/API-university.png"
            title="API University - Backend"
            text="Backend API Project with Laravel, CRUD of university, with Students and Teachers to take list and attendance, The documentation is in the project folder."
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/LV.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PHP.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/MYSQL.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://github.com/kevinvillajim/miniProyecto4_API/tree/main/Capturas%20documentacion%20API%20Postman"
            git="https://github.com/kevinvillajim/miniProyecto4_API"
          />
          <ProjectCard
            img="./src/assets/portfolio/ecoplagas-site.png"
            title="Site - Eco Plagas"
            text="Frontend full Site of Pest control services, Made with React on a single page, showing diferent views - Interactive site - Responsive Design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/BS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/EcoPlagas/"
            git="https://github.com/kevinvillajim/EcoPlagas"
          />
          <ProjectCard
            img="./src/assets/portfolio/windbnb-practice.png"
            title="Frontend - Clone of Airbnb"
            text="Frontend Practice made with React, you can find your ideal appartment or house deppending your prefferences. Responsive design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/BS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/windbnb2/"
            git="https://github.com/kevinvillajim/windbnb2"
          />
          <ProjectCard
            img="./src/assets/portfolio/tiktaktoe-game.png"
            title="TikTakToe - Game"
            text="Hability game did by HTML CSS and JS"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/tikTakToe/"
            git="https://github.com/kevinvillajim/tikTakToe"
          />
          <ProjectCard
            img="./src/assets/portfolio/eddiewebsite-practice.png"
            title="Site - Eddie Website"
            text="Frontend Practice of CSS coping the style of a website, Responsive Design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/edieSite/"
            git="https://github.com/kevinvillajim/edieSite"
          />
          <ProjectCard
            img="./src/assets/portfolio/pokedex-practice.png"
            title="Pokedex - Frontend consuming API"
            text="Practice website to search pokemon by name or type."
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/pokeDex/"
            git="https://github.com/kevinvillajim/pokeDex"
          />
          <ProjectCard
            img="./src/assets/portfolio/tipcalculator.png"
            title="App - Tip Calculator"
            text="Tip calculator made with HTML, JS and CSS"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/tipCalculator/"
            git="https://github.com/kevinvillajim/tipCalculator"
          />
          <ProjectCard
            img="./src/assets/portfolio/multiserviciostec-site.png"
            title="Site - Multiservicios Tec"
            text="Full site and Web Shop made with WordPress, for a business of Electic and electronic solutions"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/WP.png",
            ]}
            deploy="https://multiserviciostec.com/"
            git="https://multiserviciostec.com/"
          />
          <ProjectCard
            img="./src/assets/portfolio/ecodomotichome-site.png"
            title="Site - Eco Domotic Home"
            text="Full site made with wordpress, for a business of electronic security, alarms and domotic, It was one of my first projects."
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/WP.png",
            ]}
            deploy="https://ecodomotichome.com/"
            git="https://ecodomotichome.com/"
          />
        </div>
      </section>
      <section className="w-[100%] px-[12rem]">
        <h1 className="text-[90px] mb-[5rem] mt-[8rem] fontDesign">
          <strong>Design and Creative Portfolio</strong>
        </h1>
        <h2 className="text-[40px] text-start my-[2rem]">Skills:</h2>
        <div className="flex flex-row justify-between align-middle bg-white p-[2rem] rounded-xl">
          {skillsDesign.map((item, index) => (
            <Skills
              key={index}
              alt={`skillDesign-${index}`}
              img={item}
            />
          ))}
        </div>
        <h2 className="text-[40px] text-start my-[2rem]">Projects:</h2>
        <div className="grid grid-cols-2 gap-3">
          <ProjectCard
            img="./src/assets/portfolio/weather-project.png"
            title="Weather App"
            text="Front end App, consumes api, can search every city in the world, you can save your favourite cities and can change the Degrees in C° or F° - Responsive Design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/weatherProyectoFinalN2/"
            git="https://github.com/kevinvillajim/weatherProyectoFinalN2"
          />
          <ProjectCard
            img="./src/assets/portfolio/university-project.png"
            title="University Platform"
            text="Full Stack App with pure PHP, JS and CSS completly CRUD, relational tables, Role session and actions, grades, clases, inscriptions and message sistem inside."
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PHP.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/MYSQL.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/weatherProyectoFinalN2/"
            git="https://github.com/kevinvillajim/ProyectoFinalN3"
          />
          <ProjectCard
            img="./src/assets/portfolio/login-project.png"
            title="Login Project"
            text="Full Stack App with pure PHP and SQL. Functions: Dark Mode saving preferences by Local Storage, Hashed Password, Register of new users and Login, Profile with personal information, (CRUD Project) - Responsive Design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PHP.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/MYSQL.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://miniproyecton3kevinvillajim.000webhostapp.com/"
            git="https://github.com/kevinvillajim/miniproyectoN3_Login"
          />
          <ProjectCard
            img="./src/assets/portfolio/API-university.png"
            title="API University - Backend"
            text="Backend API Project with Laravel, CRUD of university, with Students and Teachers to take list and attendance, The documentation is in the project folder."
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/LV.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PHP.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/MYSQL.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://github.com/kevinvillajim/miniProyecto4_API/tree/main/Capturas%20documentacion%20API%20Postman"
            git="https://github.com/kevinvillajim/miniProyecto4_API"
          />
          <ProjectCard
            img="./src/assets/portfolio/ecoplagas-site.png"
            title="Site - Eco Plagas"
            text="Frontend full Site of Pest control services, Made with React on a single page, showing diferent views - Interactive site - Responsive Design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/BS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/EcoPlagas/"
            git="https://github.com/kevinvillajim/EcoPlagas"
          />
          <ProjectCard
            img="./src/assets/portfolio/windbnb-practice.png"
            title="Frontend - Clone of Airbnb"
            text="Frontend Practice made with React, you can find your ideal appartment or house deppending your prefferences. Responsive design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/BS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/windbnb2/"
            git="https://github.com/kevinvillajim/windbnb2"
          />
          <ProjectCard
            img="./src/assets/portfolio/tiktaktoe-game.png"
            title="TikTakToe - Game"
            text="Hability game did by HTML CSS and JS"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/tikTakToe/"
            git="https://github.com/kevinvillajim/tikTakToe"
          />
          <ProjectCard
            img="./src/assets/portfolio/eddiewebsite-practice.png"
            title="Site - Eddie Website"
            text="Frontend Practice of CSS coping the style of a website, Responsive Design"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/edieSite/"
            git="https://github.com/kevinvillajim/edieSite"
          />
          <ProjectCard
            img="./src/assets/portfolio/pokedex-practice.png"
            title="Pokedex - Frontend consuming API"
            text="Practice website to search pokemon by name or type."
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/REACT.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/pokeDex/"
            git="https://github.com/kevinvillajim/pokeDex"
          />
          <ProjectCard
            img="./src/assets/portfolio/tipcalculator.png"
            title="App - Tip Calculator"
            text="Tip calculator made with HTML, JS and CSS"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/HTML5.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/CSS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/JS.png",
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/GH.png",
            ]}
            deploy="https://kevinvillajim.github.io/tipCalculator/"
            git="https://github.com/kevinvillajim/tipCalculator"
          />
          <ProjectCard
            img="./src/assets/portfolio/multiserviciostec-site.png"
            title="Site - Multiservicios Tec"
            text="Full site and Web Shop made with WordPress, for a business of Electic and electronic solutions"
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/WP.png",
            ]}
            deploy="https://multiserviciostec.com/"
            git="https://multiserviciostec.com/"
          />
          <ProjectCard
            img="./src/assets/portfolio/ecodomotichome-site.png"
            title="Site - Eco Domotic Home"
            text="Full site made with wordpress, for a business of electronic security, alarms and domotic, It was one of my first projects."
            skills={[
              "https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/WP.png",
            ]}
            deploy="https://ecodomotichome.com/"
            git="https://ecodomotichome.com/"
          />
        </div>
      </section>
    </>
  );
}

export default App;
