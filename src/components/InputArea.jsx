import PropTypes from "prop-types";

export default function InputArea({ value, onChange }) {
  return (
    <textarea
    className="
    w-full h-64 md:h-[400px]
    p-3 rounded-xl
    bg-gray-800 border border-gray-700
    focus:outline-none focus:ring-2 focus:ring-blue-500
    text-sm"
      placeholder="Paste raw tiket di sini..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

InputArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
