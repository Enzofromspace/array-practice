// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Array notes in HTML code</h1>`;

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

function createRange(start, end){
  const range = Array.from({length: end - start + 1}, function(item, index){
    return index + start;
  });
  return range;
}

const myRange = createRange(3,7);

const burgRating = feedback.find(rating => rating.comment.includes('burg'));

console.log(burgRating);