function calculate() {
    let width = parseFloat(document.getElementById("width").value);
    let depth = parseFloat(document.getElementById("depth").value);
    let rate = parseFloat(document.getElementById("quality").value);

    if (!width || !depth || width <= 0 || depth <= 0) {
        document.getElementById("result").innerHTML =
            '<p class="estimate-error">Please enter valid width and depth measurements.</p>';
        return;
    }

    let area = width * depth;
    let cost = area * rate;

    let low = Math.round(cost * 0.9);
    let high = Math.round(cost * 1.1);

    let qualitySelect = document.getElementById("quality");
    let qualityText = qualitySelect.options[qualitySelect.selectedIndex].text;

    document.getElementById("result").innerHTML = `
        <div class="estimate-output">

            <p class="estimate-label">YOUR INDICATIVE PROJECT COST</p>

            <p class="estimate-area">
                ${area.toFixed(1)} m² · ${qualityText} specification
            </p>

            <div class="estimate-price">
                £${low.toLocaleString()} – £${high.toLocaleString()}
            </div>

            <p class="estimate-explanation">
                This is an initial guide based on the approximate size and
                specification selected. It is not a quotation.
            </p>

            <p class="estimate-disclaimer">
                Foundations, structural work, drainage, glazing, roof design,
                access and your chosen specification can significantly affect
                the final project cost.
            </p>

            <div class="estimate-next-step">
                <h3>Want a more useful answer for your property?</h3>

                <p>
                    Our Concept &amp; Planning service explores what could work
                    on your home, the likely planning route and a more
                    project-specific indication of cost.
                </p>

                <a href="#sketchup" class="btn">
                    Explore Concept &amp; Planning — from £149
                </a>
            </div>

        </div>
    `;
}
