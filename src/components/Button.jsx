import PropTypes from "prop-types";

export function Button({link, text, onClick, className = ""}) {
	if (link) {
		return (
			<a
				href={link}
				onClick={onClick}
				className={`button ${className}`.trim()}
				target="_blank"
				rel="noreferrer"
			>
				<span className="button-highlight" aria-hidden="true"></span>
				<span className="button-label">{text}</span>
			</a>
		);
	}

	return (
		<button type="button" onClick={onClick} className={`button ${className}`.trim()}>
			<span className="button-highlight" aria-hidden="true"></span>
			<span className="button-label">{text}</span>
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.node.isRequired,
	link: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
};
