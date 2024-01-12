import PropTypes from "prop-types";

export function Social({link, img}) {
	return (
		<>
			<div className="w-[50px] h-[50px] rounded-full border border-white border-[2px] p-[8px] flex items-center">
				<a href={link} target="_blank" rel="noreferrer">
					<img src={img} alt="social" className="" />
				</a>
			</div>
		</>
	);
}

Social.propTypes = {
	link: PropTypes.string,
	img: PropTypes.node,
};
