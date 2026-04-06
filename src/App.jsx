import {useState} from "react";
import Slider from "./components/Slider";
import {Header} from "./components/Header";
import "./App.css";
import {WhyCard} from "./components/WhyCard";
import {Skills} from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import CreativeCard from "./components/CreativeCard";
import ModalImg from "./components/ModalImg";
import {Footer} from "./components/Footer";
import {
	skills,
	nameSkills,
	skillsDesign,
	nameSkillsDesign,
	otherPhotos,
	ecoPlagasPhotos,
	queHechoBurguerPhotos,
	ggBetPhotos,
	ecoDomoticHomePhotos,
	multiserviciosTecPhotos,
	vinculoLicoresPhotos,
	cooprogresoPhotos,
	lagascaPhotos,
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
			element.scrollIntoView({behavior: "smooth"});
		}
	};

	const modalPhotosMap = {
		0: ecoPlagasPhotos,
		1: queHechoBurguerPhotos,
		2: ggBetPhotos,
		3: ecoDomoticHomePhotos,
		4: multiserviciosTecPhotos,
		5: vinculoLicoresPhotos,
		6: otherPhotos,
		7: cooprogresoPhotos,
		8: lagascaPhotos,
	};

	const selectedModalPhotos = modalPhotosMap[currentArray] ?? null;

	return (
		<div className="page-shell">
			<div className="page-glow page-glow-left"></div>
			<div className="page-glow page-glow-right"></div>
			<Header
				scrollToReference={scrollToReference}
				language={language}
				setLanguage={setLanguage}
				translations={translations}
			/>
			<main className="pb-12">
				<section className="hero-shell" id="top">
					<div className="hero-slider-panel">
						<div className="hero-slider-frame">
							<Slider
								img1="src/assets/Coder.png"
								img2="src/assets/Designer.png"
								coderTitle={translations.coderTitle}
								designerTitle={translations.designerTitle}
								coderText={translations.coderText}
								designerText={translations.designerText}
							/>
						</div>
					</div>
					<div className="hero-copy hero-copy-compact">
						<h1 className="hero-title">{translations.heroTitle}</h1>
						<p className="hero-text">{translations.heroText}</p>
						<div className="hero-actions">
							<button
								className="hero-button hero-button-primary"
								onClick={() => scrollToReference("code")}
							>
								{translations.headerCodePortfolio}
							</button>
							<button
								className="hero-button hero-button-secondary"
								onClick={() => scrollToReference("design")}
							>
								{translations.headerDesignPortfolio}
							</button>
						</div>
					</div>
					<div className="hero-strip">
						<div className="hero-strip-card">
							<span className="hero-strip-label">Frontend</span>
							<p className="hero-strip-text">
								React, UI systems, landing pages y producto visual.
							</p>
						</div>
						<div className="hero-strip-card">
							<span className="hero-strip-label">Design</span>
							<p className="hero-strip-text">
								Branding, identidad visual y piezas digitales con intención.
							</p>
						</div>
						<div className="hero-strip-card">
							<span className="hero-strip-label">{translations.heroNoteLabel}</span>
							<p className="hero-strip-text">{translations.heroNoteText}</p>
						</div>
					</div>
				</section>
				<section className="section-block" id="about-container">
					<div className="section-heading">
						<span className="section-kicker">{translations.headerAbout}</span>
						<h2 className="section-title" id="about">
							{translations.aboutTitle}
						</h2>
					</div>
					<div className="about-grid">
						<div className="about-copy-card">
							<p className="about-copy">
								{translations.aboutContent}{" "}
								<span className="about-highlight">
									{translations.aboutContentU}
								</span>
							</p>
						</div>
						<div className="about-note-card">
							<p className="about-note-label">{translations.heroNoteLabel}</p>
							<p className="about-note-text">{translations.heroNoteText}</p>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-3" id="why-container">
						<WhyCard
							img={
								<img
									src="src/assets/brain.svg"
									className="w-[116px]"
									alt={translations.aboutCardTitle1}
								/>
							}
							title={translations.aboutCardTitle1}
							text={translations.aboutCardText1}
						/>
						<WhyCard
							img={
								<img
									src="src/assets/bulb.svg"
									className="w-[116px]"
									alt={translations.aboutCardTitle2}
								/>
							}
							title={translations.aboutCardTitle2}
							text={translations.aboutCardText2}
						/>
						<WhyCard
							img={
								<img
									src="src/assets/diamond.svg"
									className="w-[116px] color-[#E9E9E9]"
									alt={translations.aboutCardTitle3}
								/>
							}
							title={translations.aboutCardTitle3}
							text={translations.aboutCardText3}
						/>
					</div>
				</section>
				<section className="section-block" id="code-section">
					<div className="section-heading">
						<span className="section-kicker">{translations.headerCodePortfolio}</span>
						<h2 className="section-title code-title" id="code">
							<strong>&lt;code&gt;</strong>
							<span>{translations.codePortfolioTitle}</span>
							<strong>&lt;/code&gt;</strong>
						</h2>
					</div>
					<div className="content-panel">
						<div className="subsection-header">
							<h3 className="subsection-title">
								{translations.codePortfolioSkills}
							</h3>
						</div>
						<div className="skills-board" id="code-skills">
							{skills.map((item, index) => (
								<Skills
									title={nameSkills[index]}
									key={index}
									alt={`skill-${index}`}
									img={item}
								/>
							))}
						</div>
					</div>
					<div className="content-panel">
						<div className="subsection-header">
							<h3 className="subsection-title">
								{translations.codePortfolioProjects}
							</h3>
						</div>
						<div
							className="grid grid-cols-1 gap-6 xl:grid-cols-2"
							id="project-container"
						>
							<ProjectCard
								img="src/assets/portfolio/b-connect2.0-site.png"
								title={translations.projectTitle19}
								text={translations.projectContent19}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/TW.svg",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://bconnect-ec.com/home"
								git="https://github.com/kevinvillajim/bConnect2.0"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/lagasca-platform.png"
								title={translations.projectTitle18}
								text={translations.projectContent18}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/TW.svg",
									"src/assets/icons/PHP.png",
									"src/assets/icons/LV.png",
									"src/assets/icons/MYSQL.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://lista-lagasca.capacitacion-cooprogreso.com/"
								translations={translations}
								isPrivate={true}
								setModalVisible={setModalVisible}
								setCurrentArray={setCurrentArray}
								arrayNum={8}
							/>
							<ProjectCard
								img="src/assets/portfolio/cooprogreso-platform.png"
								title={translations.projectTitle17}
								text={translations.projectContent17}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/TW.svg",
									"src/assets/icons/PHP.png",
									"src/assets/icons/LV.png",
									"src/assets/icons/MYSQL.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://capacitacion-cooprogreso.com/"
								translations={translations}
								isPrivate={true}
								setModalVisible={setModalVisible}
								setCurrentArray={setCurrentArray}
								arrayNum={7}
							/>
							<ProjectCard
								img="src/assets/portfolio/bitsoftTeam-site.png"
								title={translations.projectTitle16}
								text={translations.projectContent16}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/TW.svg",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://bitsofteam.com/"
								git="https://github.com/kevinvillajim/BitsoftTeam"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/b-connect-site.png"
								title={translations.projectTitle15}
								text={translations.projectContent15}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/TW.svg",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://bconnect-ec-com.onrender.com/"
								git="https://github.com/kevinvillajim/bconnect-ec.com"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/blaget-site.png"
								title={translations.projectTitle14}
								text={translations.projectContent14}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/TW.svg",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://kevinvillajim.github.io/Blaget/"
								git="https://github.com/kevinvillajim/Blaget"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/ecoplagas-site.png"
								title={translations.projectTitle6}
								text={translations.projectContent6}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/BS.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://kevinvillajim.github.io/EcoPlagas/"
								git="https://github.com/kevinvillajim/EcoPlagas"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/weather-project.png"
								title={translations.projectTitle2}
								text={translations.projectContent2}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://kevinvillajim.github.io/weatherProyectoFinalN2/"
								git="https://github.com/kevinvillajim/weatherProyectoFinalN2"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/multiserviciostec-site.png"
								title={translations.projectTitle12}
								text={translations.projectContent12}
								skills={[
									"src/assets/icons/WP.png",
								]}
								deploy="https://kevinvillajim.github.io/multiserviciosTEC/"
								git="https://github.com/kevinvillajim/multiserviciosTEC"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/ecodomotichome-site.png"
								title={translations.projectTitle13}
								text={translations.projectContent13}
								skills={[
									"src/assets/icons/WP.png",
								]}
								deploy="https://kevinvillajim.github.io/ecoDomoticHome/"
								git="https://github.com/kevinvillajim/ecoDomoticHome"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/login-project.png"
								title={translations.projectTitle4}
								text={translations.projectContent4}
								skills={[
									"src/assets/icons/PHP.png",
									"src/assets/icons/MYSQL.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://miniproyecton3kevinvillajim.000webhostapp.com/"
								git="https://github.com/kevinvillajim/miniproyectoN3_Login"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/bitacora-project.png"
								title={translations.projectTitle1}
								text={translations.projectContent1}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/TW.svg",
									"src/assets/icons/LV.png",
									"src/assets/icons/PHP.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://kevinvillajim.github.io/bitacoraPFN4/#/login"
								git="https://github.com/kevinvillajim/bitacoraPFN4"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/university-project.png"
								title={translations.projectTitle3}
								text={translations.projectContent3}
								skills={[
									"src/assets/icons/PHP.png",
									"src/assets/icons/MYSQL.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://github.com/kevinvillajim/ProyectoFinalN3"
								git="https://github.com/kevinvillajim/ProyectoFinalN3"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/API-university.png"
								title={translations.projectTitle5}
								text={translations.projectContent5}
								skills={[
									"src/assets/icons/LV.png",
									"src/assets/icons/PHP.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/MYSQL.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://github.com/kevinvillajim/miniProyecto4_API/tree/main/Capturas%20documentacion%20API%20Postman"
								git="https://github.com/kevinvillajim/miniProyecto4_API"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/windbnb-practice.png"
								title={translations.projectTitle7}
								text={translations.projectContent7}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/BS.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://kevinvillajim.github.io/windbnb2/"
								git="https://github.com/kevinvillajim/windbnb2"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/tiktaktoe-game.png"
								title={translations.projectTitle8}
								text={translations.projectContent8}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://kevinvillajim.github.io/tikTakToe/"
								git="https://github.com/kevinvillajim/tikTakToe"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/eddiewebsite-practice.png"
								title={translations.projectTitle9}
								text={translations.projectContent9}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://kevinvillajim.github.io/edieSite/"
								git="https://github.com/kevinvillajim/edieSite"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/pokedex-practice.png"
								title={translations.projectTitle10}
								text={translations.projectContent10}
								skills={[
									"src/assets/icons/REACT.png",
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://kevinvillajim.github.io/pokeDex/"
								git="https://github.com/kevinvillajim/pokeDex"
								translations={translations}
							/>
							<ProjectCard
								img="src/assets/portfolio/tipcalculator.png"
								title={translations.projectTitle11}
								text={translations.projectContent11}
								skills={[
									"src/assets/icons/HTML5.png",
									"src/assets/icons/CSS.png",
									"src/assets/icons/JS.png",
									"src/assets/icons/GH.png",
								]}
								deploy="https://kevinvillajim.github.io/tipCalculator/"
								git="https://github.com/kevinvillajim/tipCalculator"
								translations={translations}
							/>
						</div>
					</div>
				</section>
				<section className="section-block" id="design-section">
					<div className="section-heading">
						<span className="section-kicker">
							{translations.headerDesignPortfolio}
						</span>
						<h2 className="section-title design-title" id="design">
							<strong>{translations.designPortfolioTitle}</strong>
						</h2>
					</div>
					<div className="content-panel">
						<div className="subsection-header">
							<h3 className="subsection-title">{translations.designSkills}</h3>
						</div>
						<div className="skills-board" id="design-skills">
							{skillsDesign.map((item, index) => (
								<Skills
									title={nameSkillsDesign[index]}
									key={index}
									alt={`skillDesign-${index}`}
									img={item}
								/>
							))}
						</div>
					</div>
					<div className="content-panel">
						<div className="subsection-header">
							<h3 className="subsection-title">
								{translations.designProjects}
							</h3>
						</div>
						<div
							className="grid grid-cols-1 gap-6 xl:grid-cols-2"
							id="creative-container"
						>
							<CreativeCard
								img="src/assets/portfolio/Creative/ecoPlagas/1.png"
								title="Eco Plagas"
								text={translations.designText1}
								skills={[
									"src/assets/icons/ILL.png",
									"src/assets/icons/PS.png",
								]}
								setCurrentArray={setCurrentArray}
								arrayNum={0}
								setModalVisible={setModalVisible}
								translations={translations}
							/>
							<CreativeCard
								img="src/assets/portfolio/Creative/queHechoBurguer/1.jpg"
								title="Que Hecho Burguer"
								text={translations.designText2}
								skills={[
									"src/assets/icons/ILL.png",
									"src/assets/icons/PS.png",
								]}
								setCurrentArray={setCurrentArray}
								arrayNum={1}
								setModalVisible={setModalVisible}
								translations={translations}
							/>
							<CreativeCard
								img="src/assets/portfolio/Creative/ggBet/1.png"
								title="GGBet"
								text={translations.designText3}
								skills={[
									"src/assets/icons/ILL.png",
									"src/assets/icons/PS.png",
								]}
								setCurrentArray={setCurrentArray}
								arrayNum={2}
								setModalVisible={setModalVisible}
								translations={translations}
							/>
							<CreativeCard
								img="src/assets/portfolio/Creative/ecoDomoticHome/1.png"
								title="Eco Domotic Home"
								text={translations.designText4}
								skills={[
									"src/assets/icons/ILL.png",
									"src/assets/icons/PS.png",
								]}
								setCurrentArray={setCurrentArray}
								arrayNum={3}
								setModalVisible={setModalVisible}
								translations={translations}
							/>
							<CreativeCard
								img="src/assets/portfolio/Creative/multiserviciosTec/1.png"
								title="Multiservicios TEC"
								text={translations.designText5}
								skills={[
									"src/assets/icons/ILL.png",
									"src/assets/icons/PS.png",
								]}
								setCurrentArray={setCurrentArray}
								arrayNum={4}
								setModalVisible={setModalVisible}
								translations={translations}
							/>
							<CreativeCard
								img="src/assets/portfolio/Creative/vinculoLicores/1.jpg"
								title="Vínculo Distribuidora"
								text={translations.designText6}
								skills={[
									"src/assets/icons/ILL.png",
									"src/assets/icons/PS.png",
								]}
								setCurrentArray={setCurrentArray}
								arrayNum={5}
								setModalVisible={setModalVisible}
								translations={translations}
							/>
							<div>
								<CreativeCard
									img="src/assets/portfolio/Creative/otros/5.png"
									title={translations.designTitle7}
									text={translations.designText7}
									skills={[
										"src/assets/icons/ILL.png",
										"src/assets/icons/PS.png",
									]}
									setCurrentArray={setCurrentArray}
									arrayNum={6}
									setModalVisible={setModalVisible}
									translations={translations}
								/>
							</div>
						</div>
					</div>
				</section>
				<section id="contact" className="section-block section-block-footer">
					<Footer
						scrollToReference={scrollToReference}
						translations={translations}
					/>
				</section>
			</main>
			{modalVisible && selectedModalPhotos ? (
				<ModalImg
					photos={selectedModalPhotos}
					setModalVisible={setModalVisible}
					currentPhotoIndex={0}
					language={language}
				/>
			) : null}
		</div>
	);
}

export default App;
