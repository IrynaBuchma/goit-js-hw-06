const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('.id');
console.log(ulRef);

const liListRef = ingredients.map((name) => {
  const liRef = document.createElement('li');
  liRef.textContent = name;
  return liRef;
});

console.log(liListRef);


