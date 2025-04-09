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
						className="group"
						text={
							isPrivate ? (
								<div className="w-6 h-6 scale-[1.1]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 -960 960 960"
										className="fill-white transition-colors group-hover:fill-[#f5cb5c] icon-svg w-6 h-6"
									>
										<path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
									</svg>
								</div>
							) : (
								<div className="w-6 h-6 scale-[1.1]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 98 98"
										className="fill-white transition-colors group-hover:fill-[#f5cb5c] icon-svg w-6 h-6"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
										/>
									</svg>
								</div>
							)
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
