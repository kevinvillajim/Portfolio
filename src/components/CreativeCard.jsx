import PropTypes from "prop-types";
import {Button} from "./Button";

const CreativeCard = ({
	img,
	title,
	text,
	skills,
	setModalVisible,
	setCurrentArray,
	arrayNum,
	translations,
}) => {
	return (
		<div className="w-full rounded-lg shadow-lg overflow-hidden bg-white flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
			<div className="relative overflow-hidden group h-[30rem]">
				<img
					src={img}
					className="w-full md:h-full lg:h-full object-cover p-2 transform transition-transform duration-500 group-hover:scale-105"
					alt={title}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
					<div className="p-4 text-white text-center w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
						<h4 className="text-lg font-bold mb-2">{title}</h4>
					</div>
				</div>
			</div>

			<div className="p-5">
				<h3 className="text-xl font-bold mb-2">{title}</h3>
				<p className="text-gray-700 mb-4 text-sm">{text}</p>
			</div>

			<div className="skills-container p-4 bg-gray-50">
				<h4 className="text-sm font-semibold text-gray-500 mb-2">
					{translations.designSkills}
				</h4>
				<div className="flex flex-wrap gap-4 justify-center">
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
						</div>
					))}
				</div>
			</div>

			<div className="p-4 border-t border-gray-100">
				<Button
					text={translations.designButton}
					onClick={() => {
						setModalVisible(true);
						setCurrentArray(arrayNum);
					}}
				/>
			</div>
		</div>
	);
};

CreativeCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	skills: PropTypes.array,
	setModalVisible: PropTypes.func,
	setCurrentArray: PropTypes.func,
	arrayNum: PropTypes.number,
	translations: PropTypes.object.isRequired,
};

export default CreativeCard;
