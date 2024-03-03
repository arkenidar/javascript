
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

var obj = window

// Create custom events
const catFound = new CustomEvent("animalfound", {
  detail: { name: "cat" }, // Additional data associated with the event
});

const dogFound = new CustomEvent("animalfound", {
  detail: { name: "dog" },
});

// Add an appropriate event listener
obj.addEventListener("animalfound", (e) => console.log(e.detail.name));

// Dispatch the events
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);
// Output: "cat" and "dog" logged in the console
