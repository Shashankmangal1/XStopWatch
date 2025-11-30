XStopwatch – React Stopwatch Application

XStopwatch is a fully responsive, React-based stopwatch application built for the Crio Frontend Buildout Series.
The app supports starting, stopping, and resetting time while displaying the timer in minutes:seconds format.

⏱️ Features

Start, Stop, Reset functionality

Time displays in correct format: 0:00, 1:05, 2:59, etc.

Time updates every second while running

Swap between Start ↔ Stop depending on state

Resets back to 0:00 on Reset

Accurate time tracking using JavaScript intervals

Built with modern React Hooks (useState, useRef, useEffect)

🧰 Tech Stack

React.js

JavaScript (ES6+)

CSS3

📸 Screenshots

(Replace with actual screenshots)

Initial screen (0:00 with Start/Reset buttons)

After clicking Start (timer running)

After clicking Stop (paused)

After clicking Reset (back to 0:00)

🏗️ Project Structure
XSTOPWATCH-APP/
 ├─ public/
 │   └─ index.html
 ├─ src/
 │   ├─ components/
 │   │   └─ StopWatch.jsx
 │   ├─ App.js
 │   ├─ index.js
 │   └─ index.css
 ├─ package.json
 └─ README.md

⚙️ Installation & Setup
1. Clone the repository
git clone <repo-url>

2. Install dependencies
npm install

3. Start the development server
npm start


The app will open at:

http://localhost:3000

🔧 How It Works
✔ Start

Begins counting using setInterval and updates the timer every second.

✔ Stop

Pauses the timer by clearing the interval.

✔ Reset

Stops the timer and resets the display back to 0:00.

✔ Time Formatting

Minutes and seconds are derived from the total seconds:

mins = Math.floor(seconds / 60)
secs = seconds % 60


Displayed using:

{mins}:{secs.toString().padStart(2, "0")}

🧪 Crio Requirements Covered

✔ Default UI shows:

Stopwatch
Time: 0:00
[Start] [Reset]


✔ Timer updates in real time
✔ Buttons use exact terms: Start, Stop, Reset
✔ Time format matches Crio tests (1:05, not 1:5)
✔ Suggestion-free, clean design
✔ Functional-component based implementation
✔ Matches the screenshots provided in Crio workspace
✔ Passes Cypress-based assessment cases

📜 License

This project is created as part of the Crio Frontend Buildout Program.