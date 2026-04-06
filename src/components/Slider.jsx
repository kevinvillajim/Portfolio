import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";

function Slider({
	img1 = "src/assets/Coder.png",
	img2 = "src/assets/Designer.png",
	coderTitle = "&lt;CODER&gt;",
	designerTitle = "Designer",
	coderText = "Full Stack developer with solid knowledge and 2 years of freelance exprience",
	designerText = "Versatile graphic designer with 11 years of experience, crafting visual brands and digital experiences",
	bgColorLeft = "#1f1d18",
	bgColorRight = "#d8ba82",
}) {
	const [activeView, setActiveView] = useState("code");
	const timeoutRef = useRef(null);

	const scheduleNextSwitch = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			setActiveView((current) => (current === "code" ? "design" : "code"));
		}, 6000);
	};

	const handleViewChange = (view) => {
		setActiveView(view);
	};

	useEffect(() => {
		scheduleNextSwitch();

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [activeView]);

	const isCode = activeView === "code";

	return (
		<div className="wrapper-container">
			<div className="wrapper hero-transform overflow-hidden rounded-[1.35rem]">
				<div
					className="absolute inset-0 transition-all duration-700"
					style={{
						background: isCode
							? `linear-gradient(135deg, ${bgColorLeft} 0%, #2b281f 56%, #5a4f3d 100%)`
							: `linear-gradient(135deg, #3b3328 0%, ${bgColorRight} 58%, #f4dfb2 100%)`,
						zIndex: 0,
					}}
				></div>

				<div className="hero-transform-toggle absolute left-1/2 top-5 z-20 flex -translate-x-1/2 gap-2 rounded-full border border-white/12 bg-black/24 p-2 backdrop-blur-md">
					<button
						type="button"
						onClick={() => handleViewChange("code")}
						className={`rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
							isCode
								? "bg-white text-[#1f1d18] shadow-lg"
								: "text-white/72 hover:bg-white/10 hover:text-white"
						}`}
					>
						Code
					</button>
					<button
						type="button"
						onClick={() => handleViewChange("design")}
						className={`rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
							!isCode
								? "bg-[#1f1d18] text-[#f7efd9] shadow-lg"
								: "text-white/72 hover:bg-white/10 hover:text-white"
						}`}
					>
						Design
					</button>
				</div>

				<div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_24%)]"></div>
				<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] bg-gradient-to-t from-black/26 via-black/6 to-transparent"></div>

				<div
					className={`hero-transform-card hero-transform-card-code absolute left-[4%] top-[10%] z-[3] flex h-[78%] w-[43%] items-end justify-center rounded-[1.8rem] bg-white/5 transition-all duration-700 ${
						isCode
							? "translate-x-0 scale-100 opacity-100 shadow-[0_30px_80px_rgba(0,0,0,0.34)]"
							: "translate-x-[-3%] scale-[0.9] opacity-34 shadow-none"
					}`}
				>
					<img
						src={img1}
						alt="Coder"
						className={`h-full w-full rounded-[1.8rem] object-cover object-[72%_center] transition-all duration-700 ${
							isCode ? "blur-0 saturate-100" : "blur-[3px] saturate-[0.72]"
						}`}
					/>
				</div>

				<div
					className={`hero-transform-card hero-transform-card-design absolute right-[4%] top-[10%] z-[4] flex h-[78%] w-[43%] items-end justify-center rounded-[1.8rem] bg-white/5 transition-all duration-700 ${
						isCode
							? "translate-x-[3%] scale-[0.9] opacity-34 shadow-none"
							: "translate-x-0 scale-100 opacity-100 shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
					}`}
				>
					<img
						src={img2}
						alt="Designer"
						className={`h-full w-full rounded-[1.8rem] object-cover object-[38%_center] transition-all duration-700 ${
							!isCode ? "blur-0 saturate-100" : "blur-[3px] saturate-[0.72]"
						}`}
					/>
				</div>

				<div
					className={`absolute inset-y-[14%] left-1/2 z-[5] w-[12%] -translate-x-1/2 rounded-[999px] border transition-all duration-700 ${
						isCode
							? "border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))]"
							: "border-black/10 bg-[linear-gradient(180deg,rgba(31,29,24,0.18),rgba(255,255,255,0.04))]"
					}`}
					style={{
						transform: `translateX(-50%) ${isCode ? "rotate(-12deg)" : "rotate(12deg)"}`,
					}}
				></div>

				<div
					className={`hero-transform-copy absolute bottom-7 left-1/2 z-[10] w-[min(92%,620px)] -translate-x-1/2 rounded-[1.6rem] border p-5 text-left backdrop-blur-md transition-all duration-700 ${
						isCode
							? "border-white/14 bg-[rgba(13,12,10,0.6)] text-white shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
							: "border-black/10 bg-[rgba(255,248,236,0.86)] text-[#17140f] shadow-[0_18px_42px_rgba(0,0,0,0.12)]"
					}`}
				>
					<p
						className={`mb-2 text-[0.72rem] uppercase tracking-[0.24em] ${
							isCode ? "text-white/60" : "text-black/48"
						}`}
					>
						{isCode ? "Development" : "Design"}
					</p>
					{isCode ? (
						<h2
							className="text-[1.5rem] font-bold leading-none md:text-[3.2rem] xl:text-[4rem]"
							dangerouslySetInnerHTML={{__html: coderTitle}}
						></h2>
					) : (
						<h2 className="fontDesign text-[1.55rem] font-semibold leading-none md:text-[3.3rem] xl:text-[4.1rem]">
							{designerTitle}
						</h2>
					)}
					<p
						className={`mt-3 max-w-[44ch] text-[0.78rem] leading-5 md:text-[0.95rem] md:leading-6 ${
							isCode ? "text-white/82" : "text-black/70"
						}`}
					>
						{isCode ? coderText : designerText}
					</p>
				</div>

			</div>
		</div>
	);
}

Slider.propTypes = {
	img1: PropTypes.string,
	img2: PropTypes.string,
	coderTitle: PropTypes.string,
	designerTitle: PropTypes.string,
	coderText: PropTypes.string,
	designerText: PropTypes.string,
	bgColorLeft: PropTypes.string,
	bgColorRight: PropTypes.string,
};

export default Slider;
