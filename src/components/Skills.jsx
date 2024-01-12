import PropTypes from "prop-types";

export function Skills({img, alt}) {
	return (
		<>
			<div className="relative group h-[70px] rounded-lg overflow-hidden transition-transform transform hover:translate-y-[-10px]">
				<img src={img} alt={alt} className="h-[100%] w-auto" />
			</div>
			<div className="text-white text-center opacity-0 transition-opacity group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 py-2">
				textooooooooooo
			</div>
		</>
	);
}

Skills.propTypes = {
	img: PropTypes.node,
	alt: PropTypes.string,
	// text: PropTypes.string,
};
