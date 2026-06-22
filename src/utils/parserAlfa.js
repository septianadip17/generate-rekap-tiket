export function parseAlfa(text) {
  const blocks = text.split(/(?=\d+\.\s*A\d+)/g);

  const results = [];

  blocks.forEach((block) => {
    const ticketMatch = block.match(/A\d+/);
    const siteMatch = block.match(/SITE\s*:\s*(.+)/);
    const sidMatch = block.match(/SID IBBC\s*:\s*(.+)/);
    const terminasiMatch = block.match(
      /ALAMAT TERMINASI\s*:\s*([\s\S]*?)SID IBBC/,
    );

    if (!ticketMatch || !siteMatch) return;

    const ticket = ticketMatch[0];
    const site = siteMatch[1].trim();

    const kodeToko = site.split("-")[1]?.substring(0, 4) || "";

    const sid = sidMatch?.[1]?.trim() || "";

    const terminasi = terminasiMatch
      ? terminasiMatch[1].replace(/\s+/g, " ").trim()
      : "";

    results.push(
      [
        kodeToko,
        sid,
        "", // tanggal alarm
        "GSM up BB down", // tunnel
        "", // kuota gsm
        "", // hasil pengecekan
        ticket,
        "Open",
        "", // update tiket
        terminasi,
      ].join("\t"),
    );
  });

  return results.join("\n");
}
