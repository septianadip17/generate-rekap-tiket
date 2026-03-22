export default function Navbar() {
  return (
    <div className="w-full bg-gray-900 border-b border-gray-800 px-4 md:px-10 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg md:text-xl text-white">
        MSRS Ticket Generator
      </h1>

      <span className="text-xs text-gray-400">
        <img src="../../public/pln-icon-plus-logo.png" alt="pln icon plus logo" className="h-24 w-28 object-cover" />
      </span>
    </div>
  );
}