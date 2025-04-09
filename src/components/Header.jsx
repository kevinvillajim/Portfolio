import PropTypes from "prop-types";

export function Header({
	scrollToReference,
	language,
	setLanguage,
	translations,
}) {
	return (
		<div
			className="w-screen h-[6rem] bg-[black] flex items-center justify-between px-[10rem] mb-[0.5rem] sm: w-100%"
			id="top"
		>
			<div className="w-[5rem] text-[white]">
				<img
					src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/logo.png"
					className=" w-[85%]"
					alt="logo"
					id="logo"
				/>
			</div>
			<div className="flex items-center">
				<ul
					id="list"
					className="text-[white] text-[18px] flex direction-row space-x-10 items-center"
				>
					<li
						onClick={() => scrollToReference("about")}
						className="cursor-pointer relative overflow-hidden group px-3 py-1"
					>
						<span className="relative z-10">{translations.headerAbout}</span>
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
						<span className="absolute top-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
						<span className="absolute inset-0 bg-white opacity-0 scale-0 z-0 transition-all duration-300 group-hover:opacity-10 group-hover:scale-100 rounded"></span>
					</li>
					<li
						onClick={() => scrollToReference("code")}
						className="cursor-pointer relative overflow-hidden group px-3 py-1"
					>
						<span className="relative z-10">
							{translations.headerCodePortfolio}
						</span>
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
						<span className="absolute top-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
						<span className="absolute inset-0 bg-white opacity-0 scale-0 z-0 transition-all duration-300 group-hover:opacity-10 group-hover:scale-100 rounded"></span>
					</li>
					<li
						onClick={() => scrollToReference("design")}
						className="cursor-pointer relative overflow-hidden group px-3 py-1"
					>
						<span className="relative z-10">
							{translations.headerDesignPortfolio}
						</span>
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
						<span className="absolute top-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
						<span className="absolute inset-0 bg-white opacity-0 scale-0 z-0 transition-all duration-300 group-hover:opacity-10 group-hover:scale-100 rounded"></span>
					</li>
					<li
						onClick={() => scrollToReference("contact")}
						className="cursor-pointer relative overflow-hidden group px-3 py-1"
					>
						<span className="relative z-10">{translations.headerContact}</span>
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
						<span className="absolute top-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
						<span className="absolute inset-0 bg-white opacity-0 scale-0 z-0 transition-all duration-300 group-hover:opacity-10 group-hover:scale-100 rounded"></span>
					</li>
				</ul>
				<button
					id="lang"
					className="border-[2px] border-white rounded-full p-[7px] ml-[2rem] hover:scale-105"
					onClick={() => {
						setLanguage(
							language === "EN" ? "ES" : language === "ES" ? "PR" : "EN"
						);
					}}
				>
					{language === "ES" ? (
						<img
							title="Cambiar el Idioma"
							src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/ES.png"
							className="h-[30px]"
							alt="ES Language"
						/>
					) : language === "EN" ? (
						<img
							title="Change the Language"
							src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/EN.png"
							className="h-[30px]"
							alt="EN Language"
						/>
					) : (
						<img
							title="Troca o Idioma"
							src="https://raw.githubusercontent.com/kevinvillajim/CV/main/images/icons/PR.png"
							className="h-[30px]"
							alt="PR Language"
						/>
					)}
				</button>
			</div>
		</div>
	);
}

Header.propTypes = {
	scrollToReference: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
	setLanguage: PropTypes.func.isRequired,
	translations: PropTypes.object.isRequired,
};
