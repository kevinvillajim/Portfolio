import PropTypes from "prop-types";
import {Social} from "./Social";

export function Footer({scrollToReference, translations}) {
	const navItems = [
		{id: "top", label: translations.footerHome},
		{id: "about", label: translations.footerAbout},
		{id: "code", label: translations.footerCodePortfolio},
		{id: "design", label: translations.footerDesignPortfolio},
		{id: "contact", label: translations.footerContact},
	];

	return (
		<footer className="overflow-hidden rounded-[2rem] border border-black/6 bg-[linear-gradient(160deg,#201e19,#383227)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(25,24,21,0.22)] md:px-10">
			<div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
				<div className="max-w-xl text-left">
					<p className="text-[0.74rem] uppercase tracking-[0.26em] text-white/50">
						{translations.footerContactEyebrow}
					</p>
					<h2 className="mt-3 font-['Cormorant_Garamond'] text-5xl leading-none text-[#f7ecda]">
						{translations.footerTitle}
					</h2>
					<p className="mt-4 max-w-[42ch] text-sm leading-7 text-white/68">
						{translations.footerText}
					</p>
				</div>

				<div className="flex gap-3">
					<Social
						link="https://api.whatsapp.com/send?phone=593963368896&text=Buenas%20tardes,%20me%20contacto%20desde%20tu%20portfolio."
						img="src/assets/icons/whatsapp.png"
					/>
					<Social
						link="https://www.instagram.com/villacreseskevin/"
						img="src/assets/icons/instagram.png"
					/>
					<Social
						link="https://www.facebook.com/kevin.villacreses.5."
						img="src/assets/icons/facebook.png"
					/>
					<Social
						link="https://github.com/kevinvillajim/"
						img="src/assets/icons/GH.svg"
					/>
					<Social
						link="mailto:kevinvillajim@hotmail.com"
						img="src/assets/icons/email.png"
					/>
				</div>
			</div>

			<div className="mt-8 border-t border-white/10 pt-6">
				<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<div className="flex justify-center md:justify-start" id="footer-nav">
						<ul className="flex flex-wrap justify-center gap-3 text-sm text-white/70 md:justify-start">
							{navItems.map((item) => (
								<li key={item.id}>
									<button
										onClick={() => scrollToReference(item.id)}
										className="rounded-full border border-white/10 px-4 py-2 transition duration-200 hover:bg-white/10 hover:text-white"
									>
										{item.label}
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className="flex justify-center gap-3 text-sm text-white/45 md:justify-end">
						<p>kevinvillajim</p>
						<p>2026</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	scrollToReference: PropTypes.func,
	translations: PropTypes.object,
};
