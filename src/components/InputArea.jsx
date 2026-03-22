import { useState } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import GenerateButton from "./components/GenerateButton";
import { parseTiket } from "./utils/parser";

export default function App() {
  const [rawText, setRawText] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = () => {
    const output = parseTiket(rawText);
    setResult(output);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">
        Generator Rekap Tiket MSRS
      </h1>

      <InputArea value={rawText} onChange={setRawText} />
      <GenerateButton onClick={handleGenerate} />
      <OutputArea value={result} />
    </div>
  );
}