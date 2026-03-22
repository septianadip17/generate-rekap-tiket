export default function Guide() {
  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 mb-6">
      <h2 className="font-semibold mb-2">Contoh Format Input</h2>

      <pre className="text-xs text-gray-300 whitespace-pre-wrap">
{`Berikut kami sampaikan informasi terkait alarm proaktif:
Deskripsi Alarm:
SID               : 02000190005
NAMA PELANGGAN    : BALI-DISKOMINFO.BEDUGUL
IP                : 172.26.150.34
ALARM START       : 2026-03-07 09:43:22
ALARM             : UNAVAILABLE BY ICMP PING
STATUS PENGECEKAN : DOWN
INDIKASI GANGGUAN : LOST POWER DI SISI UPE/CPE/PELANGGAN
ID TIKET          : A0478423
WAKTU TIKET DIBUAT: 07/03/2026 15:07:07`}
      </pre>

      <p className="text-xs text-gray-500 mt-2">
        * Bisa input multiple tiket sekaligus
      </p>
    </div>
  );
}