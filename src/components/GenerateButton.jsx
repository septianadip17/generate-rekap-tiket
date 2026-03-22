import PropTypes from "prop-types";

export default function GenerateButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    px-4 py-2 rounded-xl font-medium transition
    ${
      disabled
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 active:scale-95"
    }
  `}
    >
      Generate
    </button>
  );
}

GenerateButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
