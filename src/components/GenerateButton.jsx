export default function InputArea({ value, onChange }) {
  return (
    <textarea
      className="w-full h-64 p-3 rounded bg-gray-800 border border-gray-700 mb-4"
      placeholder="Paste raw tiket di sini..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}