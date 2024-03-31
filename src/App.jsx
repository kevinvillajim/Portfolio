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
import {
	skills,
	skillsDesign,
	otherPhotos,
	ecoPlagasPhotos,
	queHechoBurguerPhotos,
	ggBetPhotos,
	ecoDomoticHomePhotos,
	multiserviciosTecPhotos,
	vinculoLicoresPhotos,
} from "./components/designInformation.js";
import {
	translationEN,
	translationES,
	translationPR,
} from "./components/lang/translations.js";

function App() {
	const [modalVisible, setModalVisible] = useState(false);

	const [currentArray, setCurrentArray] = useState(0);

	const [language, setLanguage] = useState("ES");
	const translations =
		language === "EN"
			? translationEN
			: language === "ES"
			? translationES
			: translationPR;

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
			<Header
				scrollToReference={scrollToReference}
				language={language}
				setLanguage={setLanguage}
				translations={translations}
			/>
			<Slider
				img1="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/Coder.png"
				img2="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/Designer.png"
			/>
			<img
				src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/divisorInvertido.png"
				className="mt-[3rem] w-[100%]"
			/>
			<div
				className="w-[100%] px-[15rem] bg-[white] my-[0.5px] py-[4rem]"
				id="about-container"
			>
				<h1 className="text-[50px]" id="about">
					{translations.aboutTitle}
				</h1>
				<p className="text-start text-[20px] mb-[2rem]">
					{translations.aboutContent} <u>{translations.aboutContentU}</u>
				</p>
				<div className="grid grid-cols-3 gap-20" id="why-container">
					<WhyCard
						img={
							<img
								src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/brain.svg"
								className="text-center w-[140px]"
							/>
						}
						title={translations.aboutCardTitle1}
						text={translations.aboutCardText1}
					/>
					<WhyCard
						img={
							<img
								src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/bulb.svg"
								className="text-center w-[140px]"
							/>
						}
						title={translations.aboutCardTitle2}
						text={translations.aboutCardText2}
					/>
					<WhyCard
						img={
							<img
								src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/self_improvement.svg"
								className="text-center w-[140px]"
							/>
						}
						title={translations.aboutCardTitle3}
						text={translations.aboutCardText3}
					/>
				</div>
			</div>
			<img
				src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/divisor.png"
				className="w-[100%] mb-[3rem]"
			/>
			<section className="w-[100%] px-[12rem]" id="code-section">
				<h1 className="text-[90px] mb-[5rem]" id="code">
					<strong>&lt;code&gt;</strong>
					{translations.codePortfolioTitle}
					<strong>&lt;/code&gt;</strong>
				</h1>
				<h2 className="text-[40px] text-start my-[2rem]">
					{translations.codePortfolioSkills}
				</h2>
				<div
					className="flex flex-row justify-between align-middle bg-white p-[2rem] rounded-xl"
					id="code-skills"
				>
					{skills.map((item, index) => (
						<Skills key={index} alt={`skill-${index}`} img={item} />
					))}
				</div>
				<h2 className="text-[40px] text-start my-[2rem]">
					{translations.codePortfolioProjects}
				</h2>
				<div className="grid grid-cols-2 gap-3" id="project-container">
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/blaget-site.png"
						title={translations.projectTitle14}
						text={translations.projectContent14}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/TW.svg",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/Blaget/"
						git="https://github.com/kevinvillajim/Blaget"
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/weather-project.png"
						title={translations.projectTitle2}
						text={translations.projectContent2}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/weatherProyectoFinalN2/"
						git="https://github.com/kevinvillajim/weatherProyectoFinalN2"
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/ecoplagas-site.png"
						title={translations.projectTitle6}
						text={translations.projectContent6}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/BS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://ecoplagasecuador.com/"
						git="https://github.com/kevinvillajim/EcoPlagas"
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/multiserviciostec-site.png"
						title={translations.projectTitle12}
						text={translations.projectContent12}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/WP.png",
						]}
						deploy="https://kevinvillajim.github.io/multiserviciosTEC/"
						git="https://github.com/kevinvillajim/multiserviciosTEC"
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/ecodomotichome-site.png"
						title={translations.projectTitle13}
						text={translations.projectContent13}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/WP.png",
						]}
						deploy="https://kevinvillajim.github.io/ecoDomoticHome/"
						git="https://github.com/kevinvillajim/ecoDomoticHome"
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/login-project.png"
						title={translations.projectTitle4}
						text={translations.projectContent4}
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
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/bitacora-project.png"
						title={translations.projectTitle1}
						text={translations.projectContent1}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/TW.svg",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/LV.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PHP.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/bitacoraPFN4/#/login"
						git="https://github.com/kevinvillajim/bitacoraPFN4"
						translations={translations}
					/>

					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/university-project.png"
						title={translations.projectTitle3}
						text={translations.projectContent3}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PHP.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/MYSQL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://github.com/kevinvillajim/ProyectoFinalN3"
						git="https://github.com/kevinvillajim/ProyectoFinalN3"
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/API-university.png"
						title={translations.projectTitle5}
						text={translations.projectContent5}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/LV.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PHP.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/MYSQL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://github.com/kevinvillajim/miniProyecto4_API/tree/main/Capturas%20documentacion%20API%20Postman"
						git="https://github.com/kevinvillajim/miniProyecto4_API"
						translations={translations}
					/>

					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/windbnb-practice.png"
						title={translations.projectTitle7}
						text={translations.projectContent7}
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
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/tiktaktoe-game.png"
						title={translations.projectTitle8}
						text={translations.projectContent8}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/tikTakToe/"
						git="https://github.com/kevinvillajim/tikTakToe"
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/eddiewebsite-practice.png"
						title={translations.projectTitle9}
						text={translations.projectContent9}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/edieSite/"
						git="https://github.com/kevinvillajim/edieSite"
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/pokedex-practice.png"
						title={translations.projectTitle10}
						text={translations.projectContent10}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/REACT.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/pokeDex/"
						git="https://github.com/kevinvillajim/pokeDex"
						translations={translations}
					/>
					<ProjectCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/tipcalculator.png"
						title={translations.projectTitle11}
						text={translations.projectContent11}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/HTML5.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/CSS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/JS.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.png",
						]}
						deploy="https://kevinvillajim.github.io/tipCalculator/"
						git="https://github.com/kevinvillajim/tipCalculator"
						translations={translations}
					/>
				</div>
			</section>
			<section className="w-[100%] px-[12rem]" id="design-section">
				<h1 className="text-[90px] mb-[5rem] mt-[8rem] fontDesign" id="design">
					<strong>{translations.designPortfolioTitle}</strong>
				</h1>
				<h2 className="text-[40px] text-start my-[2rem]">
					{translations.designSkills}
				</h2>
				<div
					className="flex flex-row justify-between align-middle bg-white p-[2rem] rounded-xl"
					id="design-skills"
				>
					{skillsDesign.map((item, index) => (
						<Skills key={index} alt={`skillDesign-${index}`} img={item} />
					))}
				</div>
				<h2 className="text-[40px] text-start my-[2rem]">
					{translations.designProjects}
				</h2>
				<div className="grid grid-cols-2 gap-3" id="creative-container">
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoPlagas/1.png" //qwer
						title="Eco Plagas"
						text={translations.designText1}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={0}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						translations={translations}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/queHechoBurguer/1.jpg" //qwer
						title="Que Hecho Burguer"
						text={translations.designText2}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={1}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						translations={translations}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ggBet/1.png"
						title="GGBet"
						text={translations.designText3}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={2}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						translations={translations}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/ecoDomoticHome/1.png"
						title="Eco Domotic Home"
						text={translations.designText4}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={3}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						translations={translations}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/multiserviciosTec/1.png"
						title="Multiservicios TEC"
						text={translations.designText5}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={4}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						translations={translations}
					/>
					<CreativeCard
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/vinculoLicores/1.jpg"
						title="Vínculo Distribuidora"
						text={translations.designText6}
						skills={[
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
							"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
						]}
						setCurrentArray={setCurrentArray}
						arrayNum={5}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						translations={translations}
					/>
					<div>
						<CreativeCard
							img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/portfolio/Creative/otros/5.png"
							title={translations.designTitle7}
							text={translations.designText7}
							skills={[
								"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/ILL.png",
								"https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/PS.png",
							]}
							setCurrentArray={setCurrentArray}
							arrayNum={6}
							modalVisible={modalVisible}
							setModalVisible={setModalVisible}
							translations={translations}
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
													language={language}
												/>
											);
										case 1:
											return (
												<ModalImg
													photos={queHechoBurguerPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
													language={language}
												/>
											);
										case 2:
											return (
												<ModalImg
													photos={ggBetPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
													language={language}
												/>
											);
										case 3:
											return (
												<ModalImg
													photos={ecoDomoticHomePhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
													language={language}
												/>
											);
										case 4:
											return (
												<ModalImg
													photos={multiserviciosTecPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
													language={language}
												/>
											);
										case 5:
											return (
												<ModalImg
													photos={vinculoLicoresPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
													language={language}
												/>
											);
										case 6:
											return (
												<ModalImg
													photos={otherPhotos}
													modalVisible={modalVisible}
													setModalVisible={setModalVisible}
													currentPhotoIndex={0}
													language={language}
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
			<section id="contact" className="mt-[2rem]">
				<Footer
					scrollToReference={scrollToReference}
					translations={translations}
				/>
			</section>
		</>
	);
}

export default App;
