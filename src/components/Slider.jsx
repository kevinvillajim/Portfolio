import {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";

function Slider({
	img1 = "https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/Coder.jpg",
	img2 = "https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/Designer.jpg",
	coderTitle = "&lt;CODER&gt;",
	designerTitle = "Designer",
	coderText = "Full Stack developer with solid knowledge and 2 years of freelance exprience",
	designerText = "Versatile graphic designer with 11 years of experience, crafting visual brands and digital experiences",
}) {
	const [slideValue, setSlideValue] = useState(50);
	const [animating, setAnimating] = useState(false);
	const wrapperRef = useRef(null);
	const animationRef = useRef(null);

	const animateSlider = (start, end, duration, onComplete) => {
		setAnimating(true);

		const startTime = performance.now();

		const animate = (currentTime) => {
			const elapsedTime = currentTime - startTime;
			const progress = Math.min(elapsedTime / duration, 1);

			const easeInOut = (progress) => {
				return progress < 0.5
					? 4 * progress ** 3
					: 1 - (-2 * progress + 2) ** 3 / 2;
			};

			const easedProgress = easeInOut(progress);
			const currentValue = start + (end - start) * easedProgress;

			setSlideValue(currentValue);

			if (progress < 1) {
				animationRef.current = requestAnimationFrame(animate);
			} else {
				if (onComplete) onComplete();
			}
		};

		animationRef.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		// Pequeño retraso antes de iniciar la animación
		const initialDelay = setTimeout(() => {
			// Animar de 50% a 15%
			animateSlider(50, 15, 800, () => {
				// Pequeña pausa en el lado izquierdo
				setTimeout(() => {
					// Animar de 15% a 85%
					animateSlider(15, 85, 1200, () => {
						// Pequeña pausa en el lado derecho
						setTimeout(() => {
							// Animar de vuelta al 50%
							animateSlider(85, 50, 800, () => {
								setAnimating(false);
							});
						}, 200);
					});
				}, 200);
			});
		}, 500);

		return () => {
			clearTimeout(initialDelay);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	const handleSlideChange = (event) => {
		if (!animating) {
			const newValue = parseInt(event.target.value, 10);
			setSlideValue(newValue);
		}
	};

	const clipPathValue = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`;

	return (
		<div className="wrapper-container">
			<span className="material-symbols-outlined arrowLeft left-arrow">
				arrow_back_ios
			</span>
			<div className="wrapper" ref={wrapperRef}>
				{/* IMAGEN 1 (Coder) - Capa base */}
				<div className="bg-blue">
				<img
					src={img1}
					alt="Image 1"
					className="img1 w-full h-full object-cover absolute inset-0"
					style={{zIndex: 1}}
				/>

				{/* TEXTO CODER - Siempre visible, encima de la imagen base */}
				<div
					className="max-w-[43%] absolute left-5 bottom-5 text-black text-left"
					style={{
						zIndex: 2,
					}}
				>
					<h2
						className="text-xl  font-bold mb-2"
						dangerouslySetInnerHTML={{__html: coderTitle}}
					></h2>
					<p className="text-xs">{coderText}</p>
				</div></div>

				{/* IMAGEN 2 (Designer) con clip-path - Se muestra por encima del contenido Coder */}
				<div className="absolute inset-0" style={{zIndex: 3}}>
					<img
						src={img2}
						alt="Image 2"
						className="w-full h-full object-cover"
						style={{clipPath: clipPathValue}}
					/>
				</div>

				{/* TEXTO DESIGNER - Encima de la imagen 2, también con clip-path */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						zIndex: 4,
						clipPath: clipPathValue,
					}}
				>
					<div className="max-w-[43%] absolute right-6 bottom-4 text-black text-right">
						<h2 className="text-xl font-bold mb-2 fontDesign">
							{designerTitle}
						</h2>
						<p className="text-[11px]">{designerText}</p>
					</div>
				</div>

				{/* LÍNEA DIVISORIA */}
				<div
					className="absolute inset-y-0 w-1 bg-white shadow-lg"
					style={{
						left: `${slideValue}%`,
						zIndex: 5,
					}}
				></div>

				{/* CONTROL SLIDER */}
				<input
					type="range"
					min="0"
					max="100"
					value={slideValue}
					className={`slider ${animating ? "animating" : ""}`}
					onChange={handleSlideChange}
					style={{
						pointerEvents: animating ? "none" : "auto",
						zIndex: 10,
					}}
				/>

				{/* PUNTO SLIDER */}
				<div
					className="absolute w-6 h-6 bg-white rounded-full border-2 border-gray-800 shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
					style={{
						left: `${slideValue}%`,
						top: "50%",
						zIndex: 11,
					}}
				>
					<div className="w-2 h-2 bg-gray-800 rounded-full"></div>
				</div>
			</div>
			<span className="material-symbols-outlined arrowRigth right-arrow">
				arrow_forward_ios
			</span>
		</div>
	);
}

Slider.propTypes = {
	img1: PropTypes.string,
	img2: PropTypes.string,
	coderTitle: PropTypes.string,
	designerTitle: PropTypes.string,
	coderText: PropTypes.string,
	designerText: PropTypes.string,
};

export default Slider;
