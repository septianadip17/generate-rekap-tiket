import PropTypes from "prop-types";

export default function Stats({ result }) {
  const count = result
    ? result.split("\n").filter((line) => line.trim() !== "").length
    : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
        <p className="text-gray-400 text-sm">Total Tiket</p>
        <p className="text-xl font-bold">{count}</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
        <p className="text-gray-400 text-sm">Status</p>
        <p className="text-green-400 font-semibold">Ready</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
        <p className="text-gray-400 text-sm">Mode</p>
        <p className="font-semibold">MSRS</p>
      </div>
    </div>
  );
}

Stats.propTypes = {
  result: PropTypes.string
};