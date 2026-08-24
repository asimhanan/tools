<div align="center">

# Python Learning Tools

**Small, practical Python projects for learning, teaching, and experimenting.**

[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)[![Learning by Building](https://img.shields.io/badge/Learning-by%20Building-7C3AED?style=for-the-badge)](#why-this-repository)[![Educational](https://img.shields.io/badge/Purpose-Educational-16A34A?style=for-the-badge)](#license)

</div>

---

## About This Repository

This repository is a growing collection of beginner-friendly Python tools designed to make learning more practical. Each project focuses on a real-world idea—such as optical character recognition, image enhancement, document retrieval, or AI-assisted workflows—so students can study useful concepts by running, reading, and improving working examples.

The projects are intentionally small enough to explore in a classroom, workshop, or self-study session. They are also open-ended: learners can add features, improve the interface, test edge cases, and turn each example into a larger project.

> **Learning principle:** understand the idea, run the example, inspect the code, then improve it.

## What You Can Learn

| Topic | Practical concepts | Repository example |
| --- | --- | --- |
| **OCR and computer vision** | Image upload, text extraction, image formats, external engines | Image-to-text OCR tool |
| **Desktop GUI development** | Tkinter widgets, callbacks, sliders, file dialogs, status messages | Image enhancement tool |
| **Image processing** | Brightness, contrast, sharpness, saturation, filters, resizing | Image enhancement tool |
| **AI agents and tools** | Prompt design, tool calling, response parsing, agent loops | Google Docs agent |
| **Python project setup** | Virtual environments, dependencies, environment variables, debugging | All examples |

## Included Tools

### 1. Image-to-Text OCR Converter

**File:** [`ocr_app.py`](./ocr_app.py)

A Streamlit web application that accepts an image and extracts the text inside it using Pillow, Pytesseract, and the Tesseract OCR engine. It is a useful introduction to web interfaces in Python and the basic OCR pipeline.

**Students can explore:** file uploaders, image previews, button-driven actions, progress indicators, text areas, and connecting Python code to a system-level OCR engine.

**Run it:**

```bash
python -m pip install streamlit pytesseract Pillow
streamlit run ocr_app.py
```

The OCR application accepts PNG, JPG, and JPEG uploads. Because Pytesseract is a Python wrapper, the Tesseract OCR engine must also be installed on the computer. On Windows, you may need to configure the executable path in `ocr_app.py`:

```python
pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)
```

### 2. Google Docs Reading Agent

**File:** [`google_doc_agent.py`](./google_doc_agent.py)

A demonstration of a simple tool-using AI agent. The script can recognize when it needs to read a publicly accessible Google Doc, fetch the document as plain text, return the tool result to the model, and continue the conversation until it produces a final answer.

**Students can explore:** regular expressions, HTTP requests, environment variables, structured action formats, tool registries, error handling, and the request–tool–response agent loop.

**Install and configure:**

```bash
python -m pip install huggingface_hub
```

Set a Hugging Face access token before running the script:

```bash
# macOS/Linux
export HF_TOKEN="your_hugging_face_token"

# Windows PowerShell
$env:HF_TOKEN = "your_hugging_face_token"
```

Then run:

```bash
python google_doc_agent.py
```

The example document must be shared so that **anyone with the link can view it**. Do not commit tokens or other secrets to this repository. For a production application, add authentication, validate URLs more strictly, handle rate limits, and avoid sending private documents to external services without permission.

### 3. Image Enhancement Desktop Tool

**Files:** [`pic_enahancment_code.txt`](./pic_enahancment_code.txt) and [`pic_enhanse_instruction.txt`](./pic_enhanse_instruction.txt)

A Tkinter desktop application that demonstrates interactive image editing. The tool includes upload and save dialogs, a live preview area, enhancement sliders, reset functionality, resolution scaling, and several enhancement actions.

| Capability | What it demonstrates |
| --- | --- |
| Brightness, contrast, sharpness, and saturation | Pillow enhancement classes and UI-controlled parameters |
| Noise reduction | OpenCV filtering and conversion between NumPy, OpenCV, and Pillow formats |
| Resolution scaling | High-quality image resizing |
| Detail enhancement | Pillow image filters |
| Super-resolution demonstration | 2× LANCZOS upscaling with sharpening |
| Upload, preview, reset, and save | Tkinter event handling and file dialogs |

The current implementation is an educational enhancement demo. Its “super resolution” feature uses upscaling and sharpening rather than a trained deep-learning super-resolution model, and the face-enhancement action is intended as a placeholder for future development.

**Install and run:**

```bash
python -m pip install Pillow opencv-python numpy
python pic_enahancment_code.txt
```

If your operating system does not launch `.txt` files as Python scripts, save a copy as `image_enhancer.py` first:

```bash
python image_enhancer.py
```

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/asimhanan/tools.git
cd tools
```

### 2. Create a virtual environment

Using a virtual environment keeps project dependencies separate from your system Python installation.[1]

```bash
python -m venv .venv
```

Activate it with the command for your operating system:

```bash
# macOS/Linux
source .venv/bin/activate

# Windows PowerShell
.venv\Scripts\Activate.ps1

# Windows Command Prompt
.venv\Scripts\activate.bat
```

### 3. Install the dependencies for the project you want to study

```bash
# OCR web app
python -m pip install streamlit pytesseract Pillow

# Image enhancement desktop app
python -m pip install Pillow opencv-python numpy

# Google Docs agent
python -m pip install huggingface_hub
```

### 4. Run one of the examples

```bash
streamlit run ocr_app.py
python google_doc_agent.py
python image_enhancer.py
```

## Suggested Learning Path

If you are new to Python, begin with the image enhancement tool and identify each widget, callback, and image transformation. Next, run the OCR app and compare a clear, high-resolution image with a blurry or low-contrast image. Finally, study the Google Docs agent to understand how a model can decide to call a Python function and use the returned data.

For each project, write down what enters the program, what transformation occurs, and what the user receives as output. Then make one controlled change—for example, add a download button to the OCR app, add a new filter to the enhancer, or add a second tool to the agent.

## Project Structure

```
.
├── ocr_app.py
├── google_doc_agent.py
├── pic_enahancment_code.txt
├── pic_enhanse_instruction.txt
├── README.md
└── README.md — Image to Text OCR Tool.md
```

The existing OCR-specific notes are preserved in [`README.md — Image to Text OCR Tool.md`](./README.md%20%E2%80%94%20Image%20to%20Text%20OCR%20Tool.md). This top-level README provides the overview for the complete collection.

## How to Extend the Repository

This collection is intended to grow. Good beginner contributions include adding `requirements.txt` files, improving input validation, separating reusable functions from UI code, adding automated tests, supporting more image formats, adding OCR language selection, exporting extracted text, and documenting screenshots or classroom exercises.

When adding a new tool, include a short description, the learning objectives, installation instructions, a minimal usage example, known limitations, and a note explaining which Python concepts the project demonstrates.

## Troubleshooting

| Problem | Suggested solution |
| --- | --- |
| `ModuleNotFoundError` | Activate the virtual environment and install the dependencies with `python -m pip install ...`. |
| Tesseract cannot be found | Install the Tesseract OCR engine and set `pytesseract.pytesseract.tesseract_cmd` to the correct executable path. |
| Streamlit is not recognized | Run the app with `python -m streamlit run ocr_app.py`. |
| Tkinter does not open | Confirm that Python was installed with Tk support; some Linux distributions provide it through a separate package. |
| Image results look poor | Use a sharper, well-lit image, crop unnecessary background, and test one adjustment at a time. |
| Hugging Face authentication fails | Check that `HF_TOKEN` is set in the current terminal session and that the token is valid. |

## Responsible Use

These examples are for learning and prototyping. Do not upload confidential images or private documents to an external service unless you understand the privacy, security, and consent requirements. Keep API tokens in environment variables, review third-party dependencies, and test tools with data that you are permitted to process.

## Contributing

Contributions, improvements, teaching ideas, and corrections are welcome. Please create a focused issue or pull request with a clear explanation of the change. For new projects, follow the documentation pattern in this README so learners can understand the purpose and run the example quickly.

## License

No license file has been added to the repository yet. Until a license is included, treat the code as **all rights reserved** and ask the author before redistributing or using it in a larger project. If you want others to reuse and adapt the examples, consider adding an appropriate open-source license such as the MIT License.

## Author

Created and maintained by [Asim Hanan](https://github.com/asimhanan).

If these examples help you learn, consider starring the repository and sharing improvements that could help other students.

## References

[1]: https://docs.python.org/3/library/venv.html "Python virtual environments"

[2]: https://streamlit.io/ "Streamlit"

[3]: https://github.com/madmaze/pytesseract "Pytesseract"

[4]: https://github.com/tesseract-ocr/tesseract "Tesseract OCR"

[5]: https://pillow.readthedocs.io/ "Pillow documentation"

[6]: https://docs.opencv.org/ "OpenCV documentation"

[7]: https://huggingface.co/docs/huggingface_hub/en/package_reference/inference_client "Hugging Face InferenceClient"

[2] · [3] · [4] · [5] · [6] · [7]

---

<div align="center">

**Learn by building. Teach by sharing. Improve one tool at a time.**

</div>
