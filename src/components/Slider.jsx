import { useState } from "react";
import PropTypes from "prop-types";

function Slider({ img1, img2 }) {
  const [slideValue, setSlideValue] = useState(50);

  const handleSlideChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setSlideValue(newValue);
  };

  const clipPathValue = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`;

  return (
    <div className="wrapper-container">
      <div className="wrapper">
        <img
          src={img1}
          alt="Image 1"
          className="img1"
        />
        <img
          src={img2}
          alt="Image 2"
          className="img2"
          style={{ clipPath: clipPathValue }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={slideValue}
          className="slider"
          onChange={handleSlideChange}
        />
      </div>
    </div>
  );
}

Slider.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
};

export default Slider;
