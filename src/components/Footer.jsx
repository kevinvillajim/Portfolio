import PropTypes from "prop-types";
import {Social} from "./Social";

export function Footer({scrollToReference, translations}) {
	return (
		<>
			<div className="bg-[#242423] w-[100%] h-[250px] flex flex-col justify-center items-center p-[1rem] gap-5">
				<div className="flex gap-3">
					<Social
						link="https://api.whatsapp.com/send?phone=593963368896&text=Buenas%20tardes,%20me%20contacto%20desde%20tu%20portfolio."
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/whatsapp.png"
					/>
					<Social
						link="https://www.instagram.com/villacreseskevin/"
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/instagram.png"
					/>
					<Social
						link="https://www.facebook.com/kevin.villacreses.5."
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/facebook.png"
					/>
					<Social
						link="https://github.com/kevinvillajim/"
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.svg"
					/>
					<Social
						link="mailto:kevinvillajim@hotmail.com"
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/email.png"
					/>
				</div>
				<div className="flex justify-center" id="footer-nav">
					<ul className="text-[white] text-[18px] flex direction-row space-x-10">
						<li
							onClick={() => scrollToReference("top")}
							className="cursor-pointer transition-transform hover:transform hover:translate-y-[-1px] shaddow-glow"
						>
							{translations.footerHome}
						</li>
						<li
							onClick={() => scrollToReference("about")}
							className="cursor-pointer transition-transform hover:transform hover:translate-y-[-1px] shaddow-glow object-foot"
						>
							{translations.footerAbout}
						</li>
						{/* Agrega otras secciones según sea necesario */}
						<li
							onClick={() => scrollToReference("code")}
							className="cursor-pointer transition-transform hover:transform hover:translate-y-[-1px] shaddow-glow object-foot"
						>
							{translations.footerCodePortfolio}
						</li>
						<li
							onClick={() => scrollToReference("design")}
							className="cursor-pointer transition-transform hover:transform hover:translate-y-[-1px] shaddow-glow object-foot"
						>
							{translations.footerDesignPortfolio}
						</li>
						<li
							onClick={() => scrollToReference("contact")}
							className="cursor-pointer transition-transform hover:transform hover:translate-y-[-1px] shaddow-glow object-foot"
						>
							{translations.footerContact}
						</li>
					</ul>
				</div>
				<div className="text-[#d3d3d3] text-[15px] flex gap-3">
					<p>kevinvillajim ©</p>
					<p>2024</p>
				</div>
			</div>
		</>
	);
}

Footer.propTypes = {
	scrollToReference: PropTypes.func,
	translations: PropTypes.object,
};
