import PropTypes from "prop-types";
import {Button} from "./Button";

const ProjectCard = ({
	img,
	title,
	text,
	skills,
	deploy,
	git,
	onClick,
	translations,
	isPrivate,
	setModalVisible,
	setCurrentArray,
	arrayNum,
}) => {
	const handleImgClick = () => {
		if (isPrivate && onClick) {
			setModalVisible(true);
			setCurrentArray(arrayNum);
		} else if (git) {
			window.open(git, "_blank");
		}
	};

	return (
		<div className="w-full rounded-lg shadow-lg overflow-hidden bg-white flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
			<div className="relative overflow-hidden group">
				<img
					src={img}
					className="w-full object-cover p-2 transform transition-transform duration-500 group-hover:scale-105"
					alt={title}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
					<div className="p-4 text-white text-center w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
						<h4 className="text-lg font-bold mb-2">{title}</h4>
					</div>
				</div>
			</div>

			<div className="p-5">
				<h3 className="text-xl lg:text-2xl font-bold mb-2" id="title-project">
					{title}
				</h3>
				<p className="text-gray-700 mb-4 text-sm" id="text-project">
					{text}
				</p>
			</div>

			<div className="skills-container p-4 bg-gray-50">
				<h4 className="text-sm font-semibold text-gray-500 mb-2">
					{translations.codePortfolioSkills}
				</h4>
				<div className="flex flex-wrap gap-2 justify-center">
					{skills.map((item, index) => (
						<div
							key={index}
							className="transform transition hover:-translate-y-1 tooltip-container"
						>
							<img
								src={item}
								className="h-8 w-auto object-contain"
								alt={`Skill ${index + 1}`}
							/>
							<span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 transition-opacity pointer-events-none">
								{/* Aquí podrías agregar el nombre de la tecnología si lo tienes disponible */}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-evenly align-middle items-center mb-[1rem] gap-3 px-[1rem]">
				<Button text={translations.codeButton} link={deploy} />
				<div className="w-[20%]" id="git-button">
					<Button
						text={
							<img
								src={
									isPrivate
										? "https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/img.svg"
										: "https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.svg"
								}
								alt="github"
								className="h-[18px]"
							/>
						}
						// link={git}
						onClick={handleImgClick}
					/>
				</div>
			</div>
		</div>
	);
};

ProjectCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	skills: PropTypes.array,
	deploy: PropTypes.string.isRequired,
	git: PropTypes.string,
	onClick: PropTypes.func,
	isPrivate: PropTypes.bool,
	translations: PropTypes.object.isRequired,
	setModalVisible: PropTypes.func,
	setCurrentArray: PropTypes.func,
	arrayNum: PropTypes.number,
};

export default ProjectCard;
