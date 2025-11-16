# emotion-website

https://emotiondetector-alpha.vercel.app/

✅ Full Project Summary (Bullet Points)
📌 1. Libraries Used & Why
🔹 OpenCV (cv2)

Used for real-time video and face detection.

Purpose:

Access webcam (VideoCapture)

Convert frames to grayscale (cvtColor)

Detect faces (HaarCascade)

Draw bounding boxes & emotion text

Display live window (imshow)

🔹 NumPy

Used for numerical operations on image data.

Purpose:

Convert images into arrays

Normalize pixel values (0–1)

Expand dimensions for model input

Get predicted class (np.argmax)

🔹 TensorFlow / Keras

Used to build, train, load, save the CNN model.

Components:

Sequential Model → Build network layer-by-layer

Layers:

Conv2D → feature extraction

MaxPooling2D → downsampling

Flatten → converts feature maps to vector

Dense → classification

Dropout → reduces overfitting

Input → defines (48×48×1) shape

Utilities:

load_model() → load trained model

model.compile() → Adam, crossentropy, accuracy

model.fit() → training

model.save() → save as .h5

🔹 ImageDataGenerator (Keras)

Used for loading images and augmenting training data.

Purpose:

Rescale pixels

Rotate, shift, zoom, flip images

Generate batches (flow_from_directory)

Handle train & validation sets automatically

✅ 2. What You Did After Model Training
📌 Goal

Run emotion detection in a browser (mobile, laptop, tablet).
This requires converting .h5 → TensorFlow.js web format.

📌 3. Setup for Conversion

Created Python 3.10 virtual environment (because TFJS doesn’t support 3.12+).

Installed:

TensorFlow CPU 2.13.0

NumPy 1.23.5

TensorFlow.js converter 3.19.0

📌 4. Converted the Model to Web Format

Used command:

python -m tensorflowjs.converters.converter --input_format keras emotion_detector_model.h5 web_model/


Output files:

model.json

group1-shard1of1.bin

These are required for browser inference.

📌 5. Built the Website

Created:

index.html → loads webcam & UI

script.js → loads TFJS model + predicts emotions

/web_model/ → contains converted model files

Browser pipeline:

Load webcam

Capture frame

Convert to 48×48 grayscale

Normalize

Run TFJS model prediction

Show emotion label on page

📌 6. Deployed on Vercel

Ran vercel command

Hosted full website online

Got public URL

HTTPS enables webcam access on all devices

📌 7. Final Output

A working browser-based Emotion Detector that runs on:

Mobile phones

Tablets

Laptops

Any modern browser

No Python needed — everything runs in the browser using TensorFlow.js.
