import PropTypes from "prop-types";
import {Social} from "./Social";

export function Footer() {
	return (
		<>
			<div className="bg-[black] w-[100%] h-[250px]">
				<div>
					<Social
						link="https://api.whatsapp.com/send?phone=5939963368896&text=Buenas%20tardes,%20me%20contacto%20desde%20tu%20portfolio."
						img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/whatsapp.png"
					/>
				</div>
			</div>
		</>
	);
}

Footer.propTypes = {};
