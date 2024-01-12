import PropTypes from "prop-types";

export function Header({scrollToReference}) {
	return (
		<div className="w-screen h-[6rem] bg-[black] flex items-center justify-between px-[10rem] mb-[0.5rem]">
			<div className="w-[5rem] text-[white]">
				<img
					src="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/logo.png"
					className=" w-[85%]"
					alt="logo"
				/>
			</div>
			<div>
				<ul className="text-[white] text-[18px] flex direction-row space-x-10">
					<li
						onClick={() => scrollToReference("about")}
						className="cursor-pointer transition-transform hover:transform hover:translate-y-[-1px] shaddow-glow"
					>
						About
					</li>
					{/* Agrega otras secciones según sea necesario */}
					<li
						onClick={() => scrollToReference("code")}
						className="cursor-pointer transition-transform hover:transform hover:translate-y-[-1px] shaddow-glow"
					>
						Code Portfolio
					</li>
					<li
						onClick={() => scrollToReference("design")}
						className="cursor-pointer transition-transform hover:transform hover:translate-y-[-1px] shaddow-glow"
					>
						Design Portfolio
					</li>
					<li
						onClick={() => scrollToReference("contact")}
						className="cursor-pointer transition-transform hover:transform hover:translate-y-[-1px] shaddow-glow"
					>
						Contact
					</li>
				</ul>
			</div>
		</div>
	);
}

Header.propTypes = {
	scrollToReference: PropTypes.func.isRequired, // Cambiado a func
};
