// Task 1

const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

// Task 2

const categorieContent = categories.forEach(category => {

    console.log(`Category: ${category.firstElementChild.textContent}`);

    category.lastElementChild.classList.add('sub-item');
    const subItemArray = document.querySelectorAll('.sub-item');
    console.log(`Elements: ${subItemArray.length}`);
    });

// Task 1
// V.2
/* const= body = document.body;
const firstChild  body.firstElementChild;
const list = firstChild.nextElementSibling;
const listChildren = list.children;
console.log(`Number of categories: ${listChildren.length}`); */

// Task 1 
// V.3

/* const categories = document.querySelectorAll(".item");
    let total = 0;
const categoriesQuantity = categories => {
    categories.forEach(categorie => total += 1);
    return total;
    };
console.log(`Number of categories: ${categoriesQuantity(categories)}`); */