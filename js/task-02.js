const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const ingredientsListRef = ingredients.map(name => {
  const liRef = document.createElement('li');
  liRef.classList.add('item');
  liRef.textContent = name;
  return liRef;
});

ulRef.append(...ingredientsListRef);



