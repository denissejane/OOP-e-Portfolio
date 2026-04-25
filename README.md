# 📁 OOP e-Portfolio — Midterm Project
### *Object-Oriented Programming · COMP 009 · PUP Manila*

---

> **Student:** Denisse Jane F. Karim  
> **Section:** BSIT 2-3  
> **Professor:** Mr. Severino Bedis  
> **Term:** Midterm · Academic Year 2025–2026  
> **Subject:** COMP 009 — Object-Oriented Programming

---

## 🌐 Live Site

👉 [Click here to view my e-Portfolio](https://denissejane.github.io/OOP-e-Portfolio/)

---

## 📌 Overview

This repository contains the complete source code for my **OOP Midterm e-Portfolio** — a fully hand-coded, single-page web application built using vanilla HTML5, CSS3, and JavaScript (ES6+). The e-portfolio serves as a curated academic record of all coursework completed during the midterm period of my Object-Oriented Programming class at the Polytechnic University of the Philippines – Manila.

The portfolio is designed to be visually engaging, responsive, and interactive — covering assignments, activities, seatworks, and exams across both Midterms and Finals terms, with linked file outputs for each submission.

---

## 🗂️ File Structure

```
📦 oop-eportfolio/
├── 📄 index.html               # Main HTML file — all UI structure and content
├── 🎨 style.css                # Full stylesheet — CSS variables, layout, components
├── ⚙️ script.js                # JavaScript — canvas animation, tabs, accordion logic
│
├── 📂 myfiles/                 # Student-submitted output files
│   ├── About ME.jpg            # Profile photo (used in About Me section)
│   ├── About ME.pdf            # About Me assignment (downloadable)
│   ├── id.jpg                  # ID photo (displayed on Contacts card)
│   ├── Assignment_1.pdf        # Assignment #1: Introduction to Java
│   ├── Activity_1.pdf          # Activity #1: Variables
│   ├── Activity_2.pdf          # Activity #2: Operators
│   ├── Activity_3.pdf          # Activity #3: Basic ATM System
│   ├── Activity_4.pdf          # Activity #4: Scholarship Qualification System
│   ├── Activity_5.pdf          # Activity #5: Personal Expense Tracker
│   ├── Seatwork_2.pdf          # Seatwork #2: Smart Wallet System
│   └── Seatwork_3.pdf          # Seatwork #3: Student Age Analyzer
│
└── 📂 instructions/            # Instructor-provided activity sheets
    ├── Midterm Activity #1.docx
    ├── Midterm Activity #2.docx
    ├── Midterm Activity #3.docx
    ├── Midterm Activity #4.docx
    ├── Midterm Activity #5.docx
    ├── Midterm Seatwork #2.docx
    └── Midterm Seatwork #3.docx
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure, tab sections, accordion markup |
| **CSS3** | Custom properties (variables), Flexbox, CSS Grid, animations, responsive media queries |
| **JavaScript (ES6+)** | Canvas animation, tab/subtab navigation, accordion toggle logic |
| **Google Fonts** | Cormorant Garant (display), Inter (body), Space Mono (monospace) |
| **Canvas API** | Animated background — constellation nodes + dotted grid |
| **No frameworks used** | Pure vanilla stack — zero dependencies, zero build tools |

---

## ✨ Features

- **Dark / Light theme toggle** via the ⭐ star button in the navbar
- **Animated background canvas** — floating constellation nodes with dynamic connection lines (HTML5 Canvas API)
- **Responsive layout** — mobile-friendly via CSS Grid breakpoints
- **Tab & sub-tab navigation** across Home, Midterms, Finals, and Contacts
- **Hidden "About Me" page** — only accessible through the Home CTA button
- **Accordion components** — one open at a time, auto-closes on tab switch
- **View & Download buttons** for each coursework PDF output

---

## 📚 Coursework Documented

### Midterms
| Category | Items |
|---|---|
| **Assignments** | e-Portfolio (Midterm Project), Assignment #1: Introduction to Java |
| **Activities** | Activity #1: Variables, Activity #2: Operators, Activity #3: Basic ATM System, Activity #4: Scholarship Qualification System, Activity #5: Personal Expense Tracker |
| **Seatworks** | Seatwork #1: Operators, Seatwork #2: Smart Wallet System, Seatwork #3: Student Age Analyzer |
| **Exams** | Midterms Exam (Departmental), Quiz #1 (via Canvas LMS) |

### Finals
*Content to be added upon completion of the final term.*

---

## 💡 Technical Notes

- **Theme toggle** — all colors are CSS custom properties on `:root`, overridden by `[data-theme="light"]`. 
Switching themes is just one `setAttribute` call, no inline styles needed.
- **Canvas animation** — uses `requestAnimationFrame` for a smooth render loop. Nodes bounce off viewport 
edges and connect via lines that fade with distance. Resets cleanly on window resize.
- **Tab state** — managed entirely through CSS class toggling (`.active`), no framework needed. 
Accordions auto-reset on every tab switch.

---

## 🌱 Reflections

### On Building the e-Portfolio
Building this e-portfolio was stressful — mostly because of time. A lot of my other subjects had tasks clashing at the same time, so squeezing this in was a real challenge. But despite that, I genuinely enjoyed working on it and felt fulfilled once it came together. Web development is something I've always wanted to learn more of, and this project gave me the chance to actually apply recent lessons from multiple courses I'm currently enrolled in all at once. It made everything feel more connected and worth it.

### On the OOP Course (Midterms)
OOP felt overwhelming at first — there was a lot to take in. But the more I worked through it, the more things started to make sense. What made it enjoyable was getting to write and run actual practice code, then analyzing and debugging it. There's something satisfying about figuring out why something breaks and fixing it. It made the concepts stick in a way that just reading about them never would.

### Key Takeaways
- Time management is hard when everything is due at once — but somehow it works out
- Actually building something is the fastest way to make concepts click
- Web development is genuinely fun and something I want to keep exploring
- Debugging is frustrating in the moment but honestly one of the best ways to learn

---

## 📬 Contact

| | |
|---|---|
| **Name** | Denisse Jane F. Karim |
| **Gmail** | dendenissejane@gmail.com |
| **School Email** | denissejanefkarim@iskolarngbayan.pup.edu.ph |
| **Facebook** | [Denisse Jane Karim](https://www.facebook.com/denissejanefk) |
| **School** | Polytechnic University of the Philippines – Manila |

---

<p align="center">
  made with 🧡 by <strong>KARIM of BSIT 2-3</strong> · OOP 2026
</p>
