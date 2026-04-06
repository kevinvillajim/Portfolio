import PropTypes from "prop-types";

export function Social({link, img}) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/14 bg-white/6 p-[11px] transition duration-200 hover:-translate-y-1 hover:bg-white/12"
			id="social"
		>
			<img src={img} alt="social" className="max-h-full w-auto" />
		</a>
	);
}

Social.propTypes = {
	link: PropTypes.string,
	img: PropTypes.node,
};
