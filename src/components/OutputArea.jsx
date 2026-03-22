import PropTypes from "prop-types";

import { useState } from "react";

export default function OutputArea({ value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("Gagal copy!");
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-64 p-3 rounded bg-black border border-gray-700"
        value={value}
        readOnly
      />

      <button
        onClick={handleCopy}
        className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

OutputArea.propTypes = {
  value: PropTypes.string.isRequired,
};
