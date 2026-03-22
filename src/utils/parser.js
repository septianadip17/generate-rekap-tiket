export function parseTiket(text) {
  const blocks = text.split("============================================")
                     .join("")
                     .split(/\d+\.\n/g)
                     .filter(Boolean);

  let results = [];

  blocks.forEach((block) => {
    const sid = getValue(block, "SID");
    const nama = getValue(block, "NAMA PELANGGAN");
    const ip = getValue(block, "IP");
    const alarmStart = getValue(block, "ALARM START");
    const tiket = getValue(block, "ID TIKET");
    const waktuTiket = getValue(block, "WAKTU TIKET DIBUAT");

    if (!sid) return;

    const isPLN = nama?.toUpperCase().includes("PLN");

    const row = [
      formatDate(alarmStart),
      "HIGH",
      "PROBLEM",
      sid,
      nama,
      ip,
      isPLN ? "PLN" : "Publik",
      "Unavailable by ICMP ping",
      "Sedang menunggu konfirmasi CA",
      "Septian",
      "Active",
      "Active",
      "Open",
      "", // kolom kosong
      tiket,
      formatDateTime(waktuTiket)
    ].join("\t");

    results.push(row);
  });

  return results.join("\n");
}

function getValue(text, key) {
  const regex = new RegExp(`${key}\\s*:\\s*(.*)`);
  const match = text.match(regex);
  return match ? match[1].trim() : "";
}

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().slice(0, 10);
}

function formatDateTime(date) {
  if (!date) return "";
  const [d, t] = date.split(" ");
  const [day, month, year] = d.split("/");
  return `${year}-${month}-${day} ${t}`;
}