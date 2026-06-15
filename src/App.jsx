import { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Guide from "./components/Guide";
import Footer from "./components/Footer";

import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import GenerateButton from "./components/GenerateButton";

import { parseTiket } from "./utils/parser";
import { parseAlfa } from "./utils/parserAlfa";

export default function App() {
  const [rawText, setRawText] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("msrs");

  const outputRef = useRef(null);

  const handleGenerate = () => {
    if (!rawText.trim()) {
      toast.error("Input masih kosong!");
      return;
    }

    try {
      const output = mode === "msrs" ? parseTiket(rawText) : parseAlfa(rawText);

      setResult(output);

      toast.success("Berhasil generate tiket!");

      setTimeout(() => {
        outputRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } catch (error) {
      console.error(error);
      toast.error("Gagal memproses data!");
    }
  };

  const handleClear = () => {
    setRawText("");
    setResult("");
    toast("Input dibersihkan!");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-950 text-white px-4 py-6 md:px-10">
        <Toaster position="top-right" />

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Generator Rekap Tiket {mode === "msrs" ? "MSRS" : "ALFA"}
          </h1>

          <p className="text-gray-400 text-sm">
            {mode === "msrs"
              ? "Convert raw alarm → format MSRS otomatis"
              : "Convert raw ticket → format ALFA otomatis"}
          </p>
        </div>

        {/* STATS */}
        <Stats result={result} />

        {/* GUIDE */}
        <Guide />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* INPUT */}
          <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
            <h2 className="mb-3 font-semibold text-lg">Input</h2>

            {/* MODE SWITCH */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setMode("msrs")}
                className={`px-4 py-2 rounded-xl transition font-medium ${
                  mode === "msrs"
                    ? "bg-blue-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                MSRS
              </button>

              <button
                onClick={() => setMode("alfa")}
                className={`px-4 py-2 rounded-xl transition font-medium ${
                  mode === "alfa"
                    ? "bg-green-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                ALFA
              </button>
            </div>

            <InputArea value={rawText} onChange={setRawText} />

            <div className="flex gap-2 mt-3 flex-wrap">
              <GenerateButton
                onClick={handleGenerate}
                disabled={!rawText.trim()}
              />

              <button
                onClick={handleClear}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition"
              >
                Clear
              </button>
            </div>
          </div>

          {/* OUTPUT */}
          <div
            ref={outputRef}
            className="bg-gray-900 rounded-2xl p-4 border border-gray-800"
          >
            <h2 className="mb-3 font-semibold text-lg">Output</h2>

            <OutputArea value={result} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
