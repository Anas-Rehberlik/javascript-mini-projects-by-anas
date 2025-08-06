# 📁 Custom File Upload Button

A mini project that demonstrates how to create a **custom-styled file upload button** using HTML, CSS, and JavaScript. Instead of relying on the default file input styling, this project hides the native input and provides a custom button that mimics its behavior. Once a file is selected, the button displays the file name.

---

## 🔗 Live Demo

🌐 [Click here to view the live project](https://custom-upload-button.netlify.app/)


---

## ✅ Features

- Custom-designed file upload button
- Hidden native file input
- Displays selected file name on the button
- Smooth gradient hover effects
- Minimal and responsive layout

---

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript

---

## 🧠 Project Logic

### HTML

- A hidden file input (`<input type="file">`)
- A visible custom button (`<div id="btn">Upload File</div>`)

### CSS

- The file input is hidden using `display: none`.
- The button is styled with a gradient background and hover effect.

### JavaScript

- When the custom button is clicked, it triggers a click on the hidden file input.
- When a file is selected, its name is displayed on the button.

```js
let btn = document.querySelector("#btn");
let fileInput = document.querySelector("input");

btn.addEventListener("click", function() {
    fileInput.click(); // Opens the file dialog
});

fileInput.addEventListener("change", function(dets) {
    const file = dets.target.files[0];
    if (file) {
        btn.textContent = file.name; // Show selected file name
    }
});