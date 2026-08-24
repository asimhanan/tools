import streamlit as st
from PIL import Image
import pytesseract

# Set up the Streamlit interface
st.title("Al-Asim Image to Text OCR Converter")
 #To set background color
st.markdown(
    """
    <style>
    .stApp {
        background-color:#72f04f;
    }
    </style>
    """,
    unsafe_allow_html=True
)

# Upload an image file
uploaded_file = st.file_uploader("Choose an image...", type=["png", "jpg", "jpeg"])

if uploaded_file is not None:
    # Display the uploaded image
    image = Image.open(uploaded_file)
    st.image(image, caption='Uploaded Image', use_column_width=True)
    
    # Perform OCR on the image
    if st.button("Convert to Text"):
        with st.spinner('Processing...'):
            text = pytesseract.image_to_string(image)
            st.text_area("Extracted Text", text, height=300)
