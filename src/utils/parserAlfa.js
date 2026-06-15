export function parseAlfa(text) {
  const blocks = text.split(/\n\s*\n(?=\d+\.)/);

  const results = [];

  for (const block of blocks) {
    const ticketMatch = block.match(/(A\d+)/);
    const siteMatch = block.match(/SITE\s*:?\s*(.+)/i);
    const ibbcMatch = block.match(/SID IBBC\s*:?\s*(.+)/i);

    if (!ticketMatch || !siteMatch) continue;

    const ticket = ticketMatch[1];

    const site = siteMatch[1].trim();

    const kodeTokoMatch = site.match(/-([A-Z0-9]{4})-/i);

    const kodeToko = kodeTokoMatch ? kodeTokoMatch[1].toUpperCase() : "-";

    const sidIbbc = ibbcMatch ? ibbcMatch[1].trim() : "-";

    results.push(
      [kodeToko, sidIbbc, "GSM up BB down", "", "", ticket, "Open"].join("\t"),
    );
  }

  return results.join("\n");
}
