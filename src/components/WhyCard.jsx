import PropTypes from "prop-types";
import { useState } from "react";

export function WhyCard({ img, title, text }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div
        className="flex flex-col justify-center text-center rounded-md p-[20px] bg-[#fff] border border-solid border-gray-300"
        onClick={toggleDetails}
      >
        {showDetails ? (
          <>
            <h4 className="my-[1rem] text-[30px] text-[#a83f47] font-bold">
              {title}
            </h4>
            <span className="why-text">{text}</span>
          </>
        ) : (
          <div className="w-[100%] flex justify-center">{img}</div>
        )}
      </div>
    </>
  );
}

WhyCard.propTypes = {
  img: PropTypes.node.isRequired,
  img2: PropTypes.node,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
