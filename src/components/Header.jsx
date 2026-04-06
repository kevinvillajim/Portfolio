import PropTypes from "prop-types";

export function Header({
	scrollToReference,
	language,
	setLanguage,
	translations,
}) {
	const navItems = [
		{id: "about", label: translations.headerAbout},
		{id: "code", label: translations.headerCodePortfolio},
		{id: "design", label: translations.headerDesignPortfolio},
		{id: "contact", label: translations.headerContact},
	];

	return (
		<header className="sticky top-0 z-40 px-2 pt-2 md:px-4">
			<div className="mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-[1.6rem] border border-black/5 bg-[rgba(30,29,25,0.82)] px-4 py-3 text-white shadow-[0_20px_60px_rgba(18,18,18,0.18)] backdrop-blur-xl md:px-7">
				<button
					className="flex items-center gap-3 text-left"
					onClick={() => scrollToReference("top")}
					aria-label="Go to top"
				>
					<div className="w-[3.4rem] rounded-full border border-white/10 bg-white/5 p-2">
						<img
							src="src/assets/logo.png"
							className="w-full"
							alt="logo"
							id="logo"
						/>
					</div>
					<div className="hidden sm:block">
						<p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/55">
							Portfolio
						</p>
						<p className="text-sm font-semibold tracking-[0.08em]">
							Kevin Villacreses
						</p>
					</div>
				</button>

				<div className="flex items-center gap-3 md:gap-4">
					<ul
						id="list"
						className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 text-[0.95rem] md:flex"
					>
						{navItems.map((item) => (
							<li key={item.id}>
								<button
									onClick={() => scrollToReference(item.id)}
									className="rounded-full px-4 py-2 text-white/78 transition duration-200 hover:bg-white/10 hover:text-white"
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>

					<button
						id="lang"
						className="rounded-full border border-white/12 bg-white/5 p-[7px] transition duration-200 hover:scale-105 hover:bg-white/10"
						onClick={() => {
							setLanguage(
								language === "EN" ? "ES" : language === "ES" ? "PR" : "EN"
							);
						}}
					>
						{language === "ES" ? (
							<img
								title="Cambiar el Idioma"
								src="src/assets/icons/ES.png"
								className="h-[30px]"
								alt="ES Language"
							/>
						) : language === "EN" ? (
							<img
								title="Change the Language"
								src="src/assets/icons/EN.png"
								className="h-[30px]"
								alt="EN Language"
							/>
						) : (
							<img
								title="Troca o Idioma"
								src="src/assets/icons/PR.png"
								className="h-[30px]"
								alt="PR Language"
							/>
						)}
					</button>
				</div>
			</div>
		</header>
	);
}

Header.propTypes = {
	scrollToReference: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
	setLanguage: PropTypes.func.isRequired,
	translations: PropTypes.object.isRequired,
};
