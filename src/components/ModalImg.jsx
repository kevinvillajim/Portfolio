import {useState} from "react";
import PropTypes from "prop-types";

export function ModalImg({
	photos,
	currentPhotoIndex,
	setModalVisible,
	language,
}) {
	const [currentIndex, setCurrentIndex] = useState(currentPhotoIndex);

	const goToNextPhoto = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
	};

	const goToPrevPhoto = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + photos.length) % photos.length
		);
	};

	return (
		<>
			<div
				className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
				id="modal-img-container"
			>
				<div
					className="bg-white px-[3rem] py-2 rounded-lg relative"
					id="whiteboard-container"
				>
					<h1 className="text-[40px] fontDesign">
						{photos[currentIndex].title}
					</h1>
					<div className="flex justify-center">
						<img
							src={photos[currentIndex].img}
							alt="Imagen Modal"
							className="h-[550px]"
							id="img-modal"
						/>
					</div>
					<div className="bg-[#656565] p-[1rem] rounded-lg mt-[1rem] w-[100%]">
						<p className="font-semibold text-[15px] text-[white]">
							{language === "EN"
								? photos[currentIndex].descriptionEN
								: language === "ES"
								? photos[currentIndex].descriptionES
								: photos[currentIndex].descriptionPT}
						</p>
					</div>
					<button
						className=" text-black absolute top-10 right-5"
						onClick={() => setModalVisible(false)}
					>
						<span className="material-symbols-outlined">close</span>
					</button>
					<button
						className="absolute top-1/2 transform -translate-y-1/2 left-0 ml-[1rem] text-white rounded bg-black bg-opacity-50"
						onClick={goToPrevPhoto}
					>
						<span className="material-symbols-outlined p-[7px] text-center">
							arrow_back_ios
						</span>
					</button>
					<button
						className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-[1rem] text-white rounded bg-black bg-opacity-50"
						onClick={goToNextPhoto}
					>
						<span className="material-symbols-outlined p-[7px]">
							arrow_forward_ios
						</span>
					</button>
				</div>
			</div>
		</>
	);
}

ModalImg.propTypes = {
	photos: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired))
		.isRequired,
	currentPhotoIndex: PropTypes.number.isRequired,
	setModalVisible: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
};
