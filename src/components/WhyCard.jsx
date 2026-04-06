import {useState} from "react";
import PropTypes from "prop-types";

export function WhyCard({img, title, text}) {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className="perspective h-[320px]">
			<button
				type="button"
				className={`preserve-3d relative h-full w-full cursor-pointer rounded-[1.7rem] text-left transition-transform duration-500 ${
					flipped ? "rotate-y-180" : ""
				}`}
				onClick={() => setFlipped((value) => !value)}
			>
				<div className="backface-hidden absolute inset-0 flex h-full w-full flex-col justify-between rounded-[1.7rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,252,247,0.92),rgba(247,241,232,0.84))] p-7 shadow-[0_20px_50px_rgba(29,27,21,0.08)]">
					<p className="text-[0.74rem] uppercase tracking-[0.24em] text-[#8d6730]">
						Tap to reveal
					</p>
					<div className="flex flex-1 items-center justify-center">{img}</div>
					<h3 className="font-['Cormorant_Garamond'] text-4xl leading-none text-[#2a241c]">
						{title}
					</h3>
				</div>

				<div className="backface-hidden rotate-y-180 absolute inset-0 flex h-full w-full flex-col rounded-[1.7rem] border border-black/6 bg-[linear-gradient(155deg,#29261f,#574b37)] p-7 text-[#f8f2e7] shadow-[0_20px_50px_rgba(29,27,21,0.14)]">
					<p className="text-[0.74rem] uppercase tracking-[0.24em] text-[#d6bd8d]">
						{title}
					</p>
					<p className="mt-5 overflow-auto text-[0.98rem] leading-7 text-white/80">
						{text}
					</p>
				</div>
			</button>

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
