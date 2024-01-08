import PropTypes from "prop-types";

export function Skills({ img, alt }) {
  return (
    <>
      <div className="flex h-[70px] rounded-lg overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="h-[100%]"
        />
      </div>
    </>
  );
}

Skills.propTypes = {
  img: PropTypes.node,
  alt: PropTypes.string,
};
