import {useState, useEffect} from "react";
import PropTypes from "prop-types";

const ModalImg = ({
	photos,
	currentPhotoIndex = 0,
	setModalVisible,
	language,
}) => {
	const [currentIndex, setCurrentIndex] = useState(currentPhotoIndex);
	const [isAnimating, setIsAnimating] = useState(false);
	const [direction, setDirection] = useState(0); // -1 para previo, 1 para siguiente

	useEffect(() => {
		// Activar teclas de dirección para navegar
		const handleKeyDown = (e) => {
			if (e.key === "ArrowRight") {
				goToNextPhoto();
			} else if (e.key === "ArrowLeft") {
				goToPrevPhoto();
			} else if (e.key === "Escape") {
				setModalVisible(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [currentIndex]);

	const goToNextPhoto = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			setDirection(1);
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
				setTimeout(() => {
					setIsAnimating(false);
				}, 300);
			}, 300);
		}
	};

	const goToPrevPhoto = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			setDirection(-1);
			setTimeout(() => {
				setCurrentIndex(
					(prevIndex) => (prevIndex - 1 + photos.length) % photos.length
				);
				setTimeout(() => {
					setIsAnimating(false);
				}, 300);
			}, 300);
		}
	};

	const getDescription = () => {
		if (language === "EN") {
			return photos[currentIndex].descriptionEN;
		} else if (language === "ES") {
			return photos[currentIndex].descriptionES;
		} else {
			return photos[currentIndex].descriptionPT;
		}
	};


	return (
		<div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm">
			<div className="w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden relative max-h-[90vh]">
				{/* Cabecera */}
				<div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-black to-gray-800 text-white">
					<h2 className="md:text-2xl font-bold font-design">
						{photos[currentIndex].title}
					</h2>

					<div className="min-w-[30%] md:min-w-1 flex items-center gap-4">
						<div className="text-sm bg-gray-700 px-2 py-1 rounded-md">
							{currentIndex + 1} / {photos.length}
						</div>
						<button
							className="hover:bg-gray-700 p-2 rounded-full transition-colors flex items-center"
							onClick={() => setModalVisible(false)}
							aria-label="Close"
						>
							<span className="material-symbols-outlined">close</span>
						</button>
					</div>
				</div>

				{/* Contenido principal */}
				<div className="flex flex-col md:flex-row h-[70vh]">
					{/* Imagen principal */}
					<div className="flex-grow flex items-center justify-center bg-gray-100 p-4 relative overflow-hidden">
						<div
							className={`transition-all duration-100 w-full h-full flex items-center justify-center 
                ${
									isAnimating
										? direction > 0
											? "-translate-x-full opacity-0"
											: "translate-x-full opacity-0"
										: "translate-x-0 opacity-100"
								}`}
						>
							<img
								src={photos[currentIndex].img}
								alt={photos[currentIndex].title}
								className="max-w-full max-h-full object-contain"
							/>
						</div>

						{/* Botones de navegación */}
						<button
							className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors flex items-center"
							onClick={goToPrevPhoto}
							disabled={isAnimating}
							aria-label="Previous image"
						>
							<span className="material-symbols-outlined">arrow_back</span>
						</button>

						<button
							className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors flex items-center"
							onClick={goToNextPhoto}
							disabled={isAnimating}
							aria-label="Next image"
						>
							<span className="material-symbols-outlined">arrow_forward</span>
						</button>
					</div>

					{/* Panel lateral con información */}
					<div className="w-full md:w-72 border-l border-gray-200 flex flex-col bg-white">
						{/* Descripción */}
						<div className="p-4 flex-grow overflow-auto">
							<h3 className="text-lg font-semibold mb-2">
								{photos[currentIndex].title}
							</h3>
							<p className="text-gray-700 text-sm">{getDescription()}</p>
						</div>

						{/* Miniaturas */}
						<div className="border-t border-gray-200 p-2">
							<div className="flex gap-2 overflow-x-auto p-2 snap-x">
								{photos.map((photo, idx) => (
									<div
										key={idx}
										className={`w-16 h-16 flex-shrink-0 rounded cursor-pointer overflow-hidden transition-all ${
											idx === currentIndex
												? "ring-2 ring-blue-500 ring-offset-2"
												: "opacity-70 hover:opacity-100"
										}`}
										onClick={() => {
											if (idx !== currentIndex && !isAnimating) {
												setDirection(idx > currentIndex ? 1 : -1);
												setIsAnimating(true);
												setTimeout(() => {
													setCurrentIndex(idx);
													setTimeout(() => {
														setIsAnimating(false);
													}, 300);
												}, 300);
											}
										}}
									>
										<img
											src={photo.img}
											alt={`Thumbnail ${idx + 1}`}
											className="w-full h-full object-cover snap-center"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalImg.propTypes = {
	photos: PropTypes.array.isRequired,
	currentPhotoIndex: PropTypes.number,
	setModalVisible: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
};

export default ModalImg;
