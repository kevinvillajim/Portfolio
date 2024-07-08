import PropTypes from "prop-types";
export function Button({link, text, onClick}) {
	return (
		<a href={link} onClick={onClick} className="button">
			<svg>
				<rect x="0" y="0" fill="none" width="100%" height="100%" />
			</svg>
			{text}
		</a>
	);
}

Button.propTypes = {
	text: PropTypes.node.isRequired,
	link: PropTypes.string,
	onClick: PropTypes.func,
};
