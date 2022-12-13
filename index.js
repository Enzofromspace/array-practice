// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function createRange(start, end){
  const range = Array.from({length: end - start + 1}, function(item, index){
    return index + start;
  });
  return range;
}

const myRange = createRange(3,7);