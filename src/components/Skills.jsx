import PropTypes from "prop-types";

export function Skills({img, title = "", alt}) {
	return (
		<div
			title={title}
			className="group flex min-w-0 flex-col items-center justify-center gap-2 rounded-[1.25rem] border border-black/5 bg-[rgba(255,255,255,0.72)] px-3 py-4 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_35px_rgba(34,30,23,0.08)] sm:min-w-[92px] sm:px-4"
		>
			<img src={img} alt={alt} className="h-[42px] w-auto object-contain md:h-[52px]" />
			{title ? (
				<span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#776549]">
					{title}
				</span>
			) : null}
		</div>
	);
}

Skills.propTypes = {
	img: PropTypes.node,
	alt: PropTypes.string,
	title: PropTypes.string,
};
