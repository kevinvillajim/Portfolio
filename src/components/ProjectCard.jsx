import PropTypes from "prop-types";
import {Button} from "./Button";

export function ProjectCard({
	img,
	title,
	text,
	skills,
	deploy,
	git,
	translations,
}) {
	return (
		<>
			<div className="w-[100%] rounded-lg shadow-md overflow-hidden bg-white flex flex-col justify-between">
				<img src={img} className="w-[100%] object-cover p-[1rem]"></img>
				<div className="my-[1rem] mx-[1rem]">
					<h3 className="text-[20px] mb-[0.5rem]" id="title-project">
						<strong>{title}</strong>
					</h3>
					<span className="text-start" id="text-project">
						{text}
					</span>
				</div>
				<div
					className="flex flex-row w-[100%] justify-center gap-3 my-[2rem]"
					id="skills-project-container"
				>
					{skills.map((item, index) => (
						<img src={item} key={index} className="h-[50px]" />
					))}
				</div>
				<div className="flex justify-evenly align-middle items-center mb-[1rem] gap-3 px-[1rem]">
					<Button text={translations.codeButton} link={deploy} />
					<div className="w-[20%]" id="git-button">
						<Button
							text={
								<img
									src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.svg"
									alt="github"
									className="h-[18px]"
								/>
							}
							link={git}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

ProjectCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	skills: PropTypes.node,
	deploy: PropTypes.string.isRequired,
	git: PropTypes.string.isRequired,
	translations: PropTypes.object.isRequired,
};
