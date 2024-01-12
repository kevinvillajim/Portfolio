import PropTypes from "prop-types";

export function Skills({img, alt}) {
	return (
		<>
			<div className="relative group h-[70px] rounded-lg overflow-hidden transition-transform transform hover:translate-y-[-10px]">
				<img src={img} alt={alt} className="h-[100%] w-auto" />
			</div>
		</>
	);
}

Skills.propTypes = {
	img: PropTypes.node,
	alt: PropTypes.string,
	// text: PropTypes.string,
};
