import {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";

function Slider({img1, img2}) {
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

			// Función de easing para hacer el movimiento más natural
			// (ease in/out)
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
				<img src={img1} alt="Image 1" className="img1" />
				<img
					src={img2}
					alt="Image 2"
					className="img2"
					style={{clipPath: clipPathValue}}
				/>
				<input
					type="range"
					min="0"
					max="100"
					value={slideValue}
					className={`slider ${animating ? "animating" : ""}`}
					onChange={handleSlideChange}
					style={{
						pointerEvents: animating ? "none" : "auto",
					}}
				/>
			</div>
			<span className="material-symbols-outlined arrowRigth right-arrow">
				arrow_forward_ios
			</span>
		</div>
	);
}

Slider.propTypes = {
	img1: PropTypes.string.isRequired,
	img2: PropTypes.string.isRequired,
};

export default Slider;
