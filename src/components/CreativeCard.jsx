import PropTypes from "prop-types";
import {Button} from "./Button";

export function CreativeCard({
	img,
	title,
	text,
	skills,
	setModalVisible,
	setCurrentArray,
	arrayNum,
	translations,
}) {
	return (
		<>
			<div
				className="w-[100%] rounded-lg shadow-md overflow-hidden bg-white flex flex-col justify-between"
				id="creative-card-container"
			>
				<div className="w-[100%] h-[500px] overflow-hidden flex justify-center">
					<img
						src={img}
						className="h-[100%] object-cover p-[1rem]"
						id="creative-img"
					></img>
				</div>
				<div className="my-[1rem] mx-[1rem]">
					<h3 className="text-[20px] mb-[0.5rem]">
						<strong>{title}</strong>
					</h3>
					<span className="text-start my-[1rem]">{text}</span>
				</div>
				<div className="flex flex-row w-[100%] justify-center gap-3 my-[2rem]">
					{skills.map((item, index) => (
						<img src={item} key={index} className="h-[50px]" />
					))}
				</div>
				<div className="flex justify-evenly align-middle mb-[1rem] p-[1rem]">
					<Button
						text={translations.designButton}
						onClick={() => {
							setModalVisible(true);
							setCurrentArray(arrayNum);
						}}
					/>
				</div>
			</div>
		</>
	);
}

CreativeCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	skills: PropTypes.node,
	setModalVisible: PropTypes.func,
	setCurrentArray: PropTypes.func,
	arrayNum: PropTypes.number,
	translations: PropTypes.object.isRequired,
};
