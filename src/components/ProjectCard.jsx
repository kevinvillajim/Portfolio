import PropTypes from "prop-types";
import {Button} from "./Button";

const ProjectCard = ({
	img,
	title,
	text,
	skills,
	deploy,
	git,
	translations,
	isPrivate,
	setModalVisible,
	setCurrentArray,
	arrayNum,
}) => {
	const hasGallery = isPrivate && setModalVisible && setCurrentArray;

	const openGallery = () => {
		if (!hasGallery) return;
		setModalVisible(true);
		setCurrentArray(arrayNum);
	};

	const handleActionClick = () => {
		if (hasGallery) {
			openGallery();
			return;
		}

		if (git) {
			window.open(git, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<article
			className={`group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-black/6 bg-[rgba(255,252,247,0.84)] shadow-[0_22px_55px_rgba(29,27,21,0.09)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_85px_rgba(29,27,21,0.16)] ${
				hasGallery ? "cursor-pointer" : ""
			}`}
			onClick={hasGallery ? openGallery : undefined}
		>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#d2b36f]/30 via-transparent to-[#8ca39d]/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"></div>
			<div className="relative overflow-hidden border-b border-black/5 bg-[#efe6d7]">
					<img
					src={img}
					className="h-[250px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
					alt={title}
				/>
				<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-left text-white">
					<p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/70">
						{isPrivate
							? translations.projectPrivateLabel
							: translations.projectFeaturedLabel}
					</p>
					<h3 className="mt-1 font-['Cormorant_Garamond'] text-3xl leading-none">
						{title}
					</h3>
				</div>
			</div>

			<div className="flex flex-1 flex-col space-y-5 p-6 text-left">
				<p
					className="min-h-[120px] text-[0.98rem] leading-7 text-[#4b4538]"
					id="text-project"
				>
					{text}
				</p>

				<div className="min-h-[156px] rounded-[1.25rem] border border-black/5 bg-white/70 p-4">
					<p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#8a7150]">
						{translations.codePortfolioSkills}
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

				<div className="mt-auto flex items-center gap-3 pt-2">
					<div className="flex-1">
						<Button
							text={
								<span className="flex items-center justify-center gap-2">
									<span>{translations.codeButton}</span>
									<span className="text-[1rem] leading-none">↗</span>
								</span>
							}
							link={deploy}
							onClick={!deploy ? handleActionClick : undefined}
							className="button-primary"
						/>
					</div>
					<div className="w-[68px]">
						<Button
							className="button-icon px-0"
							text={
								isPrivate ? (
									<div className="flex h-7 w-7 items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 -960 960 960"
											className="icon-svg h-[23px] w-[23px]"
										>
											<path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
										</svg>
									</div>
								) : (
									<div className="flex h-7 w-7 items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 98 98"
											className="icon-svg h-[23px] w-[23px]"
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
							onClick={(event) => {
								event.stopPropagation();
								handleActionClick();
							}}
						/>
					</div>
				</div>
			</div>
		</article>
	);
};

ProjectCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	skills: PropTypes.array,
	deploy: PropTypes.string,
	git: PropTypes.string,
	isPrivate: PropTypes.bool,
	translations: PropTypes.object.isRequired,
	setModalVisible: PropTypes.func,
	setCurrentArray: PropTypes.func,
	arrayNum: PropTypes.number,
};

export default ProjectCard;
