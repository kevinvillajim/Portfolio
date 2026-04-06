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
		<article className="group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-black/6 bg-[rgba(255,252,247,0.84)] shadow-[0_22px_55px_rgba(29,27,21,0.09)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_85px_rgba(29,27,21,0.16)]">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#d2b36f]/25 via-transparent to-[#8ca39d]/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"></div>
			<div className="relative h-[280px] overflow-hidden bg-[#e7dccb] md:h-[320px]">
				<img
					src={img}
					className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
					alt={title}
				/>
				<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-left text-white">
					<p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/70">
						{translations.creativeDirectionLabel}
					</p>
					<h3 className="mt-1 font-['Cormorant_Garamond'] text-3xl leading-none">
						{title}
					</h3>
				</div>
			</div>

			<div className="flex flex-1 flex-col space-y-5 p-6 text-left">
				<p className="min-h-[120px] text-[0.98rem] leading-7 text-[#4b4538]">
					{text}
				</p>

				<div className="rounded-[1.25rem] border border-black/5 bg-white/70 p-4">
					<p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#8a7150]">
						{translations.designSkills}
					</p>
					<div className="flex flex-wrap gap-3">
						{skills.map((item, index) => (
							<div
								key={index}
								className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-[#faf6ef] shadow-sm transition duration-200 hover:-translate-y-1"
							>
								<img
									src={item}
									className="max-h-7 w-auto object-contain"
									alt={`Skill ${index + 1}`}
								/>
							</div>
						))}
					</div>
				</div>

				<div className="mt-auto pt-2">
					<Button
						text={translations.designButton}
						className="button-primary"
						onClick={() => {
							setModalVisible(true);
							setCurrentArray(arrayNum);
						}}
					/>
				</div>
			</div>
		</article>
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
