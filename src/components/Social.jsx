import PropTypes from "prop-types";

export function Social({link, img}) {
	return (
		<>
			<div className="w-[70px] h-[70px] rounded-full">
				<a href={link}>
					<img src={img} alt="social" className="w-[50px] h-[50px]" />
				</a>
			</div>
		</>
	);
}

Social.propTypes = {
	link: PropTypes.string,
	img: PropTypes.node,
};
