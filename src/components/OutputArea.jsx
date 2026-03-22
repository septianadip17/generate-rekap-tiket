import PropTypes from 'prop-types';

export default function OutputArea({ value }) {
  return (
    <textarea
      className="w-full h-64 p-3 rounded bg-black border border-gray-700"
      value={value}
      readOnly
    />
  );
}

OutputArea.propTypes = {
  value: PropTypes.string.isRequired,
};