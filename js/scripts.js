// 1: Set the text of the <h1> element
const h1 = document.querySelector('h1');
h1.textContent = 'My Activities List';
// 2: Set the color of the <h1> to a different color
h1.style.color = 'blue';
// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const descP = document.querySelector('p.desc');
descP.innerHTML = 'A list of <i>fun</i> things I want to do today';
// 4: Set the class of the <ul> to 'list'
let ul = document.querySelector('ul').className = 'list';
// 5: Create a new list item and add it to the <ul>
ul = document.getElementsByTagName('ul')[0];
let li = document.createElement('li');
li.innerHTML = '<input> Eat ice cream';
ul.appendChild(li);
// 6: Change all <input> elements from text fields to checkboxes
let input = document.getElementsByTagName('input');
for (let i = 0; i < input.length; i += 1) {
  input[i].type = 'checkbox';
}
// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
let extraDiv = document.querySelector('div.extra');
let button = document.createElement('button');
button.textContent = 'Delete';
extraDiv.appendChild(button);
// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
button.addEventListener('click', () => {
  let container = document.getElementsByClassName('container')[0];
  container.removeChild(extraDiv);
});