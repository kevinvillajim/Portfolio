import PropTypes from "prop-types";

export function Skills({img, title = "", alt}) {
	return (
		<>
			<div
				title={title}
				className="relative group h-[50px] md:h-[70px] rounded-lg overflow-hidden transition-transform transform hover:translate-y-[-10px]"
			>
				<img src={img} alt={alt} className="h-[100%] w-auto" />
			</div>
		</>
	);
}

Skills.propTypes = {
	img: PropTypes.node,
	alt: PropTypes.string,
	title: PropTypes.string,
	// text: PropTypes.string,
};
