// ## Warmup

// 1. Adjust the font size of the span with the class `mess-with-me` to 40 pixels.
const span = document.querySelector("span.mess-with-me");
span.style.fontSize = "40px";

// 2. Modify the paragraph with the class `mess-with-me` to have a green background.
const paragraph = document.querySelector("p.mess-with-me");
paragraph.style.backgroundColor = "green";

// 3. Conceal the second dinosaur's image, rendering it invisible while causing the space below it to adjust accordingly. If you're uncertain about the method to achieve this, you can look up the CSS rule to hide an element.
const img2 = document.querySelector("#hide-me");
img2.style.display = "none";

// 4. Resize the first dinosaur image to be 324 pixels in width.
const img1 = document.querySelector("#triceratops");
img1.style.width = "324px";


// ## Event Listeners

// 1. Apply an event listener to the span with the class `mess-with-me` such that when clicked, the font color transitions to orange.
span.addEventListener("click", ()=> {
  span.style.color = "orange";
});

// 2. Attach an event listener to the first dinosaur, so that clicking it results in a red border.
img1.addEventListener("click", ()=> {
  img1.style.border = "3px solid red";
});

// 3. Assign an event listener to the feathered dinosaur, causing it to become 50% transparent upon clicking.
const feathers = document.querySelector('#feathers')
feathers.addEventListener("click", ()=> {
  feathers.style.opacity = "0.5";
});

// 4. Implement an event listener for the "Switch Background Color" button that, upon clicking, alters the background color of the row of dinosaurs to a color of your preference.
const button = document.querySelector("#toggle");
const row = document.querySelector("#row");
button.addEventListener("click", ()=> {
    if (row.style.backgroundColor === "pink") {
        row.style.backgroundColor = "red"
    } else {
        row.style.backgroundColor = "pink";
    }
});

// 5. Establish an event listener for the dinosaur with the ID `biggify`, ensuring that when HOVERED, the image expands to a width of 200 pixels. Note that this requires a different event type, so some research may be necessary to determine the correct event.
const img3 = document.querySelector("#biggify");
img3.addEventListener("mouseover", ()=> {
  img3.style.width = "200px";
});
img3.addEventListener("mouseout", ()=> {
  img3.style.width = "";
});

// ## Stretch Goals

// 1. Enable the "Switch Background Color" button to toggle between white and your chosen color upon clicking. This modification can be achieved by reworking the function used in your existing event listener. **Hint:** If you haven't explicitly set the background color **via JavaScript**, its value will always be an empty string, regardless of any prior settings from other sources.

// I thought I already did this one?

// 2. Introduce a new event listener that reverts the `biggify` dinosaur back to its original size when it is no longer being hovered. **Hint:** This action is similar to the previous one, but focuses on the width. **Hint 2:** You'll need to use a different type of event, though the name is somewhat related.

// I already did this too. Oops.
