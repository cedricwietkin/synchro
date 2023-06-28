const categorySelect = document.getElementById('categorySelect');
const getFactButton = document.getElementById('getFactButton');
const factContainer = document.getElementById('factContainer');
const clearStorageButton = document.getElementById('clearStorageButton');

// Charger les catégories depuis l'API et les ajouter au champ select
async function loadCategories() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    const categories = await response.json();

    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  } catch (error) {
    console.table('Une erreur s\'est produite lors du chargement des catégories', error);
  }
}

// Récupérer un fait aléatoire en utilisant la catégorie sélectionnée
async function getFact() {
  const selectedCategory = categorySelect.value;

  try {
    const url = selectedCategory
      ? `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
      : 'https://api.chucknorris.io/jokes/random';

    const response = await fetch(url);
    const data = await response.json();

    const factDiv = document.createElement('div');
    factDiv.textContent = data.value;
    factDiv.style.backgroundColor = getRandomColor();
    factDiv.style.border = '1px solid black';
    factContainer.appendChild(factDiv);

    // Stocker le résultat dans le localStorage
    const storedFacts = localStorage.getItem('chuckNorrisFacts') ? JSON.parse(localStorage.getItem('chuckNorrisFacts')) : [];
    storedFacts.push(data.value);
    localStorage.setItem('chuckNorrisFacts', JSON.stringify(storedFacts));
  } catch (error) {
    console.log('Une erreur s\'est produite lors de la récupération du fait', error);
  }
}

// Effacer tous les éléments du localStorage
function clearLocalStorage() {
  localStorage.removeItem('chuckNorrisFacts');
  factContainer.innerHTML = '';
}

// Charger les catégories lors du chargement de la page
window.addEventListener('load', loadCategories);

getFactButton.addEventListener('click', getFact);
clearStorageButton.addEventListener('click', clearLocalStorage);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}