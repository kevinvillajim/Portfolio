import {useState, useEffect} from "react";
import PropTypes from "prop-types";

export function WhyCard({img, title, text}) {
	const [showDetails, setShowDetails] = useState(false);
	const [flipped, setFlipped] = useState(false);

	const handleClick = () => {
		setFlipped(!flipped);

		// Cambiamos el contenido a mitad de la animación
		setTimeout(() => {
			setShowDetails(!showDetails);
		}, 150);
	};

	return (
		<div className="flex flex-col md:flex.row w-full h-64 perspective">
			<div
				className={`relative w-full h-full transition-transform duration-500 preserve-3d cursor-pointer ${
					flipped ? "rotate-y-180" : ""
				}`}
				onClick={handleClick}
			>
				{/* Cara frontal */}
				<div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center p-6">
					<div className="transition-transform duration-300 hover:scale-110">
						{img}
					</div>
				</div>

				{/* Cara trasera */}
				<div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 rotate-y-180 p-6 flex flex-col">
					<h4 className="text-2xl font-bold mb-4 text-rose-600 pb-2 border-b border-rose-200">
						{title}
					</h4>
					<div className="text-gray-700 overflow-auto text-sm">{text}</div>
				</div>
			</div>

			<style>{`
				.perspective {
					perspective: 1000px;
				}

				.preserve-3d {
					transform-style: preserve-3d;
				}

				.backface-hidden {
					backface-visibility: hidden;
				}

				.rotate-y-180 {
					transform: rotateY(180deg);
				}
			`}</style>
		</div>
	);
}

WhyCard.propTypes = {
	img: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
