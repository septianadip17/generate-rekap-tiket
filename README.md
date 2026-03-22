# 🚀 MSRS Ticket Generator

A simple internal web tool to convert raw alarm data into a structured **MSRS ticket format** automatically.

Built with **React + Vite + TailwindCSS**, this tool helps reduce manual formatting, minimize errors, and speed up daily operations.

---

## ✨ Features

- ✅ Convert raw alarm text into MSRS ticket format
- ✅ Supports multiple tickets in a single input
- ✅ Auto-format output (ready to copy & paste)
- ✅ Copy-to-clipboard button
- ✅ Clear input button
- ✅ Toast notifications (success, error, info)
- ✅ Auto scroll to output after generate
- ✅ Responsive UI (mobile, tablet, desktop)
- ✅ Dashboard layout (Navbar, Stats, Guide, Footer)

---

## 🧠 How It Works

1. Paste raw alarm data into the input area  
2. Click **Generate**  
3. The system parses the data automatically  
4. Copy the result and use it  

---

## 📥 Input Format (Example)

```
SID                 : 02000190005
NAMA PELANGGAN      : BALI-DISKOMINFO.DENPASAR
IP                  : 172.26.150.34
ALARM START         : 2026-03-07 09:43:22
ALARM               : UNAVAILABLE BY ICMP PING
STATUS PENGECEKAN   : DOWN
INDIKASI GANGGUAN   : LOST POWER DI SISI UPE/CPE/PELANGGAN
ID TIKET            : A0478423
WAKTU TIKET DIBUAT  : 07/03/2026 15:07:07
```

> You can paste multiple ticket blocks at once.

---

## 📤 Output Format

```
YYYY-MM-DD    HIGH    PROBLEM    [SID]    [CUSTOMER NAME]    [IP]    [PLN/PUBLIK]    Unavailable by ICMP ping    Sedang menunggu konfirmasi CA    Septian    Active    Active    Open        [TICKET ID]    [TICKET TIME]
```

- Uses **tab-separated columns**
- Ready for Excel or reporting tools
- Automatically detects:
  - `PLN` or `Publik`
  - Date & time formatting

---

## 📊 Stats Panel

Displays quick summary:
- Total generated tickets
- Status indicator
- Mode (MSRS)

---

## 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES Modules)
- React Hot Toast

---

## 📦 Installation

```bash
git clone https://github.com/septianadip17/generate-rekap-tiket.git
cd generate-rekap-tiket
npm install
npm run dev
```

---

## 🧩 Project Structure

```
src/
 ├── components/
 │    ├── InputArea.jsx
 │    ├── OutputArea.jsx
 │    ├── GenerateButton.jsx
 │    ├── Navbar.jsx
 │    ├── Stats.jsx
 │    ├── Guide.jsx
 │    ├── Footer.jsx
 │
 ├── utils/
 │    ├── parser.js
 │
 ├── App.jsx
```

---

## 🎯 Purpose

This tool is designed to:
- Reduce manual work
- Avoid formatting mistakes
- Improve efficiency in handling MSRS tickets
- Provide a clean and user-friendly internal tool

---

## 🚧 Future Improvements

- 📂 Export to Excel (.xlsx)
- 📄 Upload file support (.txt)
- 🔄 Multi-format support (MSRS, Alfa, etc.)
- ⚠️ Error highlighting for invalid data
- 🕘 History / log of generated results

---

## 👨‍💻 Author

Built by **Septian** ⚡  

---

## 📄 License

Private / Internal Use Only