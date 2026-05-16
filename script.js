function calculate() {
  let width = parseFloat(document.getElementById("width").value);
  let depth = parseFloat(document.getElementById("depth").value);
  let rate = parseFloat(document.getElementById("quality").value);

  if (!width || !depth) {
    document.getElementById("result").innerText = "Please enter valid dimensions.";
    return;
  }

  let area = width * depth;
  let cost = area * rate;

  let low = Math.round(cost * 0.9);
  let high = Math.round(cost * 1.1);

  document.getElementById("result").innerHTML =
    `<h3>Estimated Cost:</h3>
     <p>£${low.toLocaleString()} - £${high.toLocaleString()}</p>`;
}
