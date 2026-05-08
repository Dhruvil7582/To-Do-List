# ✅ My To-Do List

A clean, minimal to-do list web app built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, no build tools — just open the file and go.

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📸 Preview

> A responsive task manager with priority levels, filters, and smooth animations.
<img width="1916" height="969" alt="Screenshot 2026-05-08 103952" src="https://github.com/user-attachments/assets/89fae67f-feea-4242-a86c-6ebc0dbf558e" />

---

## ✨ Features

- ➕ **Add tasks** with a priority level (Low / Medium / High)
- ✅ **Mark tasks** as complete with a single click
- 🗑️ **Delete tasks** with a hover-reveal trash button
- 🔍 **Filter tasks** — All, Active, Completed, or High Priority
- 🧹 **Clear all completed** tasks at once
- ⌨️ **Keyboard support** — press `Enter` to add a task
- 📅 **Live date display** showing today's date
- 🎨 **Color-coded priority badges** — green, amber, and red

---

## 🚀 Getting Started

No installation or setup required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhruvil7582/To-Do-List
   ```

2. **Open the file**
   ```bash
   cd To-Do-List
   open index.html
   ```
   Or simply double-click `index.html` in your file explorer.

---

## 📁 Project Structure

```
To-Do-List/
└── index.html.html
└── style.css
└── script.js
└── README.md         # You are here
```

---

## 🧠 How It Works

All tasks are stored in a JavaScript array in memory. Every time you add, complete, delete, or filter a task, the `render()` function rebuilds the list from scratch.

| Function | Description |
|---|---|
| `addTask()` | Reads the input field and pushes a new task object to the array |
| `toggle(id)` | Flips the `done` boolean on a task |
| `remove(id)` | Filters the task out of the array |
| `setFilter()` | Updates the active filter and re-renders |
| `clearDone()` | Removes all tasks where `done === true` |
| `render()` | Rebuilds the task list HTML from the current state |

---

## 🔮 Possible Improvements

- [ ] Save tasks to `localStorage` so they persist on refresh
- [ ] Add due dates with a date picker
- [ ] Double-click a task to edit it inline
- [ ] Drag and drop to reorder tasks
- [ ] Dark mode toggle

---

## 🛠️ Built With

- **HTML5** — structure and semantics
- **CSS3** — styling, animations, and responsive layout
- **Vanilla JavaScript** — all logic, no libraries
- **Font Awesome 6** — icons (loaded via CDN)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
