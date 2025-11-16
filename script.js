let model;

async function loadModel() {
  model = await tf.loadGraphModel("web_model/model.json");
  document.getElementById("emotion").innerText = "Model Loaded ✔";
}

loadModel();

// Start webcam
const video = document.getElementById("video");
navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  video.srcObject = stream;
});

// Emotion labels
const labels = ["Angry","Disgust","Fear","Happy","Sad","Surprise","Neutral"];

video.addEventListener("loadeddata", () => {
  setInterval(() => processFrame(), 150);
});

async function processFrame() {
  if (!model) return;

  const tensor = tf.browser.fromPixels(video)
    .resizeNearestNeighbor([48, 48])
    .mean(2)
    .toFloat()
    .expandDims(0)
    .expandDims(-1)
    .div(255.0);

  const prediction = model.predict(tensor);
  const index = prediction.argMax(1).dataSync()[0];

  document.getElementById("emotion").innerText = labels[index];
}
