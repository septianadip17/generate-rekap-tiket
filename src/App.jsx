import { useState, useRef } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import GenerateButton from "./components/GenerateButton";
import { parseTiket } from "./utils/parser";
import { Toaster, toast } from "react-hot-toast";

export default function App() {
  const [rawText, setRawText] = useState("");
  const [result, setResult] = useState("");
  const outputRef = useRef(null);

  const handleGenerate = () => {
    if (!rawText.trim()) {
      toast.error("Input masih kosong!");
      return;
    }

    const output = parseTiket(rawText);
    setResult(output);

    toast.success("Berhasil generate tiket!");

    // auto scroll ke output
    setTimeout(() => {
      outputRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleClear = () => {
    setRawText("");
    setResult("");
    toast("Input dibersihkan!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Toaster position="top-right" />

      <h1 className="text-2xl font-bold mb-4">
        Generator Rekap Tiket MSRS
      </h1>

      <InputArea value={rawText} onChange={setRawText} />

      <div className="flex gap-2 mb-4">
        <GenerateButton onClick={handleGenerate} disabled={!rawText.trim()} />

        <button
          onClick={handleClear}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>

      <div ref={outputRef}>
        <OutputArea value={result} />
      </div>
    </div>
  );
}