import Slider from "./components/Slider";
import {Header} from "./components/Header";
import "./App.css";
import {WhyCard} from "./components/WhyCard";
import {Skills} from "./components/Skills";
import {ProjectCard} from "./components/ProjectCard";
import {CreativeCard} from "./components/CreativeCard";
import {ModalImg} from "./components/ModalImg";
import {useState} from "react";
import {Footer} from "./components/Footer";

function App() {
	const skills = [
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/BS.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/WP.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PHP.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/MYSQL.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/TW.svg",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/LV.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/FIGMA.png",
	];

	const skillsDesign = [
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PP.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/SKU.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ARCHICAD.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ACAD.webp",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PB.png",
		"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/FL.png",
	];

	const otherPhotos = [
		[
			"Del Frutas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/5.png",
			"Label for powdered panela and fruit tea.",
		],
		[
			"Soccer Championship Invitation",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/1.png",
			"Soccer championship invitation for social media",
		],
		[
			"Final of Soccer Invitation",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/2.png",
			"Soccer championship invitation for social media.",
		],
		[
			"Christmas Invitation",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/3.jpg",
			"Christmas activity invitation for social media.",
		],
		[
			"Final of Soccer Invitation 2",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/4.jpg",
			"Soccer championship invitation for social media.",
		],
		[
			"Flag",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/8.png",
			"Flag for a neighborhood soccer team.",
		],
		[
			"Birthday",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/9.jpg",
			"Birthday party invitation for social media.",
		],
		[
			"Medical prescription",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/10.jpg",
			"Medical recipe book for a clinic.",
		],
		[
			"Label",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/11.png",
			"Vintage-style label for a bottle.",
		],
		[
			"Solidary Event",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/12.jpg",
			"Solidarity lunch for charitable purposes.",
		],
		[
			"Elixia",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/13.png",
			"Logo for a magically styled beverage.",
		],
		[
			"Duo Esthetic",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/14.png",
			"Flyer for a beauty salon.",
		],
	];

	const ecoPlagasPhotos = [
		[
			"Eco Plagas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/1.png",
			"Logo",
		],
		[
			"Eco Plagas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/2.png",
			"Shield",
		],
		[
			"Eco Plagas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/3.jpg",
			"Advertising Social Media 1",
		],
		[
			"Eco Plagas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/4.jpg",
			"Advertising Social Media 2",
		],
		[
			"Eco Plagas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/5.jpg",
			"Flyer",
		],
		[
			"Eco Plagas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/6.png",
			"Fridge magnet",
		],
		[
			"Eco Plagas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/7.jpg",
			"Proforma document",
		],
		[
			"Eco Plagas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/8.jpg",
			"Presentation document",
		],
		[
			"Eco Plagas",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/9.jpg",
			"Certificate document",
		],
	];

	const queHechoBurguerPhotos = [
		[
			"Que Hecho Burguer",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/1.jpg",
			"Logo",
		],
		[
			"Que Hecho Burguer",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/2.png",
			"Sticker",
		],
		[
			"Que Hecho Burguer",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/3.jpg",
			"Advertising Social Media 1",
		],
		[
			"Que Hecho Burguer",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/4.jpg",
			"Advertising Social Media 2",
		],
		[
			"Que Hecho Burguer",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/5.jpg",
			"Catalogue",
		],
		[
			"Que Hecho Burguer",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/6.jpg",
			"Menu",
		],
		[
			"Que Hecho Burguer",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/7.jpg",
			"Menu 2",
		],
		[
			"Que Hecho Burguer",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/8.jpg",
			"Focus Group Invitation",
		],
		[
			"Que Hecho Burguer",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/9.jpg",
			"Focus Group Invitation 2",
		],
	];

	const ggBetPhotos = [
		[
			"GG Bet",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/1.png",
			"Logo",
		],
		[
			"GG Bet",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/2.png",
			"Poker Chips",
		],
		[
			"GG Bet",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/3.jpg",
			"Advertising Social Media 1",
		],
		[
			"GG Bet",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/4.jpg",
			"Advertising Social Media 2",
		],
		[
			"GG Bet",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/5.jpg",
			"Advertising Social Media 3",
		],
		[
			"GG Bet",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/6.png",
			"Advertising Social Media 4",
		],
		[
			"GG Bet",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/7.jpg",
			"Advertising Social Media 5",
		],
		[
			"GG Bet",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/9.jpg",
			"Advertising Social Media 7",
		],
	];

	const ecoDomoticHomePhotos = [
		[
			"Eco Domotic Home",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/1.png",
			"Logo",
		],
		[
			"Eco Domotic Home",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/2.jpg",
			"Business Card",
		],
		[
			"Eco Domotic Home",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/3.jpg",
			"Advertising Social Media 1",
		],
		[
			"Eco Domotic Home",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/4.jpg",
			"Proforma Document",
		],
		[
			"Eco Domotic Home",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/5.jpg",
			"Catalogue 1",
		],
		[
			"Eco Domotic Home",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/6.jpg",
			"Catalogue 2",
		],
		[
			"Eco Domotic Home",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/7.jpg",
			"Catalogue 3",
		],
		[
			"Eco Domotic Home",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/9.jpg",
			"Catalogue 4",
		],
	];

	const multiserviciosTecPhotos = [
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/1.png",
			"Logo",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/2.jpg",
			"Business Card",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/3.jpg",
			"Business Card 2-1",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/4.jpg",
			"Flyer Service 1",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/5.jpg",
			"Flyer Service 2",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/6.jpg",
			"Flyer Service 3",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/7.jpg",
			"Flyer Service 4",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/8.jpg",
			"Flyer Service 5",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/9.jpg",
			"Flyer Service 6",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/10.jpg",
			"Social media Banner",
		],
		[
			"Multiservicios TEC",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/11.jpg",
			"Proforma document",
		],
	];

	const vinculoLicoresPhotos = [
		[
			"Vinculo Distribuidora",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/vinculoLicores/1.jpg",
			"Logo 1",
		],
		[
			"Vinculo Distribuidora",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/vinculoLicores/2.jpg",
			"Logo 2",
		],
		[
			"Vinculo Distribuidora",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/vinculoLicores/3.jpg",
			"Logo 3",
		],
		[
			"Vinculo Distribuidora",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/vinculoLicores/4.jpg",
			"Logo Concept",
		],
		[
			"Vinculo Distribuidora",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/vinculoLicores/5.jpg",
			"Color personality",
		],
		[
			"Vinculo Distribuidora",
			"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/vinculoLicores/6.jpg",
			"Business card",
		],
	];

	const [modalVisible, setModalVisible] = useState(false);

	const [currentArray, setCurrentArray] = useState(0);

	const scrollToReference = (referenceId) => {
		const element = document.getElementById(referenceId);

		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<Header scrollToReference={scrollToReference} />
			<Slider
				img1="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/Coder.png"
				img2="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/Designer.png"
			/>
			<img
				src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/divisorInvertido.png"
				className="mt-[3rem] w-[100%]"
			/>
			<div className="w-[100%] px-[15rem] bg-[white] my-[0.5px] py-[4rem]">
				<h1 className="text-[50px]" id="about">
					About
				</h1>
				<p className="text-start text-[20px] mb-[2rem]">
					Hi there! :D, my name is Kevin Villacreses, I live in Ecuador and I am
					27. Since 1 year ago have discover what I was made for, The Develop,
					and it changes my focus. <u>There are 3 words that describes me:</u>
				</p>
				<div className="grid grid-cols-3 gap-20">
					<WhyCard
						img={
							<img
								src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/brain.svg"
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
								src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/bulb.svg"
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
								src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/self_improvement.svg"
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
				src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/divisor.png"
				className="w-[100%] mb-[3rem]"
			/>
			<section className="w-[100%] px-[12rem]">
				<h1 className="text-[90px] mb-[5rem]" id="code">
					<strong>&lt;code&gt;</strong> Portfolio <strong>&lt;/code&gt;</strong>
				</h1>
				<h2 className="text-[40px] text-start my-[2rem]">Skills:</h2>
				<div className="flex flex-row justify-between align-middle bg-white p-[2rem] rounded-xl">
					{skills.map((item, index) => (
						<Skills key={index} alt={`skill-${index}`} img={item} />
					))}
				</div>
				<h2 className="text-[40px] text-start my-[2rem]">Projects:</h2>
				<div className="grid grid-cols-2 gap-3">
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/weather-project.png"
						title="Weather App"
						text="Front end App, consumes api, can search every city in the world, you can save your favourite cities and can change the Degrees in C° or F° - Responsive Design"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/weatherProyectoFinalN2/"
						git="https://github.com/kevinvillajim/weatherProyectoFinalN2"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/university-project.png"
						title="University Platform"
						text="Full Stack App with pure PHP, JS and CSS completly CRUD, relational tables, Role session and actions, grades, clases, inscriptions and message sistem inside."
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PHP.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/MYSQL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/weatherProyectoFinalN2/"
						git="https://github.com/kevinvillajim/ProyectoFinalN3"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/login-project.png"
						title="Login Project"
						text="Full Stack App with pure PHP and SQL. Functions: Dark Mode saving preferences by Local Storage, Hashed Password, Register of new users and Login, Profile with personal information, (CRUD Project) - Responsive Design"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PHP.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/MYSQL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://miniproyecton3kevinvillajim.000webhostapp.com/"
						git="https://github.com/kevinvillajim/miniproyectoN3_Login"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/API-university.png"
						title="API University - Backend"
						text="Backend API Project with Laravel, CRUD of university, with Students and Teachers to take list and attendance, The documentation is in the project folder."
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/LV.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PHP.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/MYSQL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://github.com/kevinvillajim/miniProyecto4_API/tree/main/Capturas%20documentacion%20API%20Postman"
						git="https://github.com/kevinvillajim/miniProyecto4_API"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/ecoplagas-site.png"
						title="Site - Eco Plagas"
						text="Frontend full Site of Pest control services, Made with React on a single page, showing diferent views - Interactive site - Responsive Design"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/BS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/EcoPlagas/"
						git="https://github.com/kevinvillajim/EcoPlagas"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/windbnb-practice.png"
						title="Frontend - Clone of Airbnb"
						text="Frontend Practice made with React, you can find your ideal appartment or house deppending your prefferences. Responsive design"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/BS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/windbnb2/"
						git="https://github.com/kevinvillajim/windbnb2"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/tiktaktoe-game.png"
						title="TikTakToe - Game"
						text="Hability game did by HTML CSS and JS"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/tikTakToe/"
						git="https://github.com/kevinvillajim/tikTakToe"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/eddiewebsite-practice.png"
						title="Site - Eddie Website"
						text="Frontend Practice of CSS coping the style of a website, Responsive Design"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/edieSite/"
						git="https://github.com/kevinvillajim/edieSite"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/pokedex-practice.png"
						title="Pokedex - Frontend consuming API"
						text="Practice website to search pokemon by name or type."
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/pokeDex/"
						git="https://github.com/kevinvillajim/pokeDex"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/tipcalculator.png"
						title="App - Tip Calculator"
						text="Tip calculator made with HTML, JS and CSS"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/tipCalculator/"
						git="https://github.com/kevinvillajim/tipCalculator"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/multiserviciostec-site.png"
						title="Site - Multiservicios Tec"
						text="Full site and Web Shop made with WordPress, for a business of Electic and electronic solutions"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/WP.png",
						]}
						deploy="https://multiserviciostec.com/"
						git="https://multiserviciostec.com/"
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/ecodomotichome-site.png"
						title="Site - Eco Domotic Home"
						text="Full site made with wordpress, for a business of electronic security, alarms and domotic, It was one of my first projects."
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/WP.png",
						]}
						deploy="https://ecodomotichome.com/"
						git="https://ecodomotichome.com/"
					/>
				</div>
			</section>
			<section className="w-[100%] px-[12rem]">
				<h1 className="text-[90px] mb-[5rem] mt-[8rem] fontDesign" id="design">
					<strong>Design and Creative Portfolio</strong>
				</h1>
				<h2 className="text-[40px] text-start my-[2rem]">Skills:</h2>
				<div className="flex flex-row justify-between align-middle bg-white p-[2rem] rounded-xl">
					{skillsDesign.map((item, index) => (
						<Skills key={index} alt={`skillDesign-${index}`} img={item} />
					))}
				</div>
				<h2 className="text-[40px] text-start my-[2rem]">Projects:</h2>
				<div className="grid grid-cols-2 gap-3">
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/1.png" //qwer
						title="Eco Plagas"
						text="Pest Control Enterprise. Logo, Corporative Image, Social media advertising, Material advertising and Documentation."
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={0}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/1.jpg" //qwer
						title="Que Hecho Burguer"
						text="Dark Kitchen focused on minimalism, Logo, Stickers, Social media advertising, Menu, Invitations"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={1}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/1.png"
						title="GGBet"
						text="Games Club, Social media advertising, and poker chips."
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={2}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/1.png"
						title="Eco Domotic Home"
						text="Electronic Security and Domotic Enterprise. Corporative Image, Logo, Business cards, Social media advertising and Documentation."
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={3}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/1.png"
						title="Multiservicios TEC"
						text="Services business focused in electric and electronic issues, Logo, Corporative Image, Business cards, Social media advertising, Material advertising and Documentation."
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={4}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/vinculoLicores/1.jpg"
						title="Vínculo Distribuidora"
						text="Liquor Store, Logo, Corporative Image, Business cards"
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={5}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
					/>
					<div>
						<CreativeCard
							img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/5.png"
							title="Other"
							text="Various projects, like invitations, Labels, and other works"
							skills={[
								"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
								"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
							]}
							setCurrentArray={setCurrentArray}
							arrayNum={6}
							modalVisible={modalVisible}
							setModalVisible={setModalVisible}
						/>
						{modalVisible && (
							<>
								{(() => {
									switch (currentArray) {
										case 0:
											return (
												<ModalImg
													photos={ecoPlagasPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
												/>
											);
										case 1:
											return (
												<ModalImg
													photos={queHechoBurguerPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
												/>
											);
										case 2:
											return (
												<ModalImg
													photos={ggBetPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
												/>
											);
										case 3:
											return (
												<ModalImg
													photos={ecoDomoticHomePhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
												/>
											);
										case 4:
											return (
												<ModalImg
													photos={multiserviciosTecPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
												/>
											);
										case 5:
											return (
												<ModalImg
													photos={vinculoLicoresPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
												/>
											);
										case 6:
											return (
												<ModalImg
													photos={otherPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
												/>
											);
										default:
											return null;
									}
								})()}
							</>
						)}
					</div>
				</div>
			</section>
			<section id="contact">
				<Footer />
			</section>
		</>
	);
}

export default App;
