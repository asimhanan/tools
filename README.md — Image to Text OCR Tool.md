# 🖼️ Image to Text OCR Tool

A simple and user-friendly **OCR (Optical Character Recognition)** web application built with **Python, Streamlit, Pillow, and Pytesseract**.

This tool allows users to upload an image and automatically extract the text contained in that image.

---

## 🚀 Features

- 📷 Upload an image
- 🔍 Extract text using OCR
- 📝 Display extracted text directly in the browser
- 🖼️ Preview the uploaded image
- ⚡ Simple and fast Streamlit interface
- 💻 Runs locally on Windows
- 🐍 Built with Python
- 📋 Extracted text can be copied and reused

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Main programming language |
| Streamlit | Web application interface |
| Pytesseract | OCR interface for Python |
| Tesseract OCR | Text recognition engine |
| Pillow | Image processing |
| VS Code | Development environment |

---

## 📁 Project Structure

```text
OCR_files/
│
├── ocr_app.py
├── README.md
└── requirements.txt
```

---

## ⚙️ Requirements

Before running the project, make sure you have:

- Windows 10/11
- Python 3.x
- VS Code
- Tesseract OCR
- Internet connection for installing Python packages

---

## 📦 Installation

### 1. Clone or download the project

Place the project somewhere on your computer, for example:

```text
D:\OCR_files
```

Open this folder in VS Code.

---

### 2. Create a virtual environment

Open the VS Code terminal:

```bash
python -m venv venv
```

Activate it:

### Windows

```bash
venv\Scripts\activate
```

You should see something similar to:

```text
(venv) D:\OCR_files>
```

---

### 3. Install Python packages

Run:

```bash
pip install streamlit pytesseract Pillow
```

Or install everything from `requirements.txt`:

```bash
pip install -r requirements.txt
```

---

## 🔤 Install Tesseract OCR

`pytesseract` is a Python wrapper. It needs the actual **Tesseract OCR engine** installed on your computer.

After installing Tesseract, you may need to tell Python where it is located.

For example:

```python
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
```

The exact path can be different depending on where Tesseract was installed.

---

## ▶️ Run the Application

Open the terminal in VS Code and run:

```bash
streamlit run ocr_app.py
```

Streamlit will start a local web server.

You will normally see an address similar to:

```text
Local URL: http://localhost:8501
```

Open that address in your web browser.

---

## 🖼️ How to Use

### Step 1 — Start the application

```bash
streamlit run ocr_app.py
```

### Step 2 — Open the web application

Open the local Streamlit URL in your browser.

### Step 3 — Upload an image

Select an image containing text.

Supported formats may include:

```text
PNG
JPG
JPEG
WEBP
```

### Step 4 — Extract the text

The application processes the image using Tesseract OCR.

The recognized text will then be displayed on the screen.

### Step 5 — Copy the result

Copy the extracted text and use it in your document, website, application, or other project.

---

## 🧠 How It Works

The basic OCR process is:

```text
       ┌─────────────────┐
       │   Upload Image  │
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │     Pillow      │
       │ Image Processing│
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │   Pytesseract   │
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │  Tesseract OCR  │
       │ Text Recognition│
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │ Extracted Text  │
       └─────────────────┘
```

---

## 📄 requirements.txt

Create a file named:

```text
requirements.txt
```

Add:

```text
streamlit
pytesseract
Pillow
```

Then install them with:

```bash
pip install -r requirements.txt
```

---

## 💡 Example

Suppose you upload an image containing:

```text
Welcome to our school.

Computer Science Department
```

The OCR system attempts to convert the image into:

```text
Welcome to our school.

Computer Science Department
```

The accuracy depends on the quality and clarity of the image.

---

## 🎯 Improving OCR Accuracy

For better results:

- Use high-resolution images
- Make sure the text is clearly visible
- Avoid blurry photographs
- Use good lighting
- Keep the text horizontal
- Avoid complicated backgrounds
- Crop the image around the text when possible

---

## 🔮 Future Improvements

Possible future features include:

- 🌐 Multiple language OCR
- 📄 PDF-to-text conversion
- 📷 Camera capture
- 📋 Copy-to-clipboard button
- 💾 Download extracted text as `.txt`
- 📑 Export to Word
- 🔊 Text-to-speech
- ✨ Image preprocessing
- 🔍 Automatic image enhancement
- 🤖 AI-based OCR correction
- 📊 OCR confidence scores
- 📚 Batch image processing

---

## 🐛 Troubleshooting

### Error: `ModuleNotFoundError: No module named 'pytesseract'`

Run:

```bash
python -m pip install pytesseract
```

Then restart Streamlit.

---

### Error: `No module named 'PIL'`

Install Pillow:

```bash
python -m pip install Pillow
```

---

### Error: Tesseract is not installed or not found

Make sure the Tesseract OCR engine is installed and configure its path in your Python code:

```python
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
```

---

### Streamlit doesn't start

Try:

```bash
python -m streamlit run ocr_app.py
```

This is useful when the `streamlit` command is not recognized.

---

## 👨‍💻 Development

This project was developed using:

```text
Python
Streamlit
Pytesseract
Tesseract OCR
Pillow
VS Code
```

---

## 📜 License

This project is intended for educational and personal use.

You can modify and improve the application according to your requirements.

---

## ⭐ Project Goal

The goal of this project is to demonstrate how **OCR technology can be integrated into a Python web application** to convert information contained in images into editable digital text.

---

## 🙌 Author

**OCR Image-to-Text Project**

Built with ❤️ using Python and Streamlit.