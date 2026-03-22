export default function GenerateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mb-4"
    >
      Generate
    </button>
  );
}