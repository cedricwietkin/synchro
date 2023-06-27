const categorySelect = document.getElementById('categorySelect');
    const getFactButton = document.getElementById('getFactButton');
    const factContainer = document.getElementById('factContainer');
    const clearStorageButton = document.getElementById('clearStorageButton');

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    async function loadCategories() {
      // ...
    }

    async function getFact() {
      // ...

      const factDiv = document.createElement('div');
      factDiv.classList.add('factDiv');
      factDiv.textContent = data.value;
      factDiv.style.backgroundColor = getRandomColor();
      factContainer.appendChild(factDiv);

      // ...
    }

    function clearLocalStorage() {
      // ...
    }

    window.addEventListener('load', loadCategories);

    getFactButton.addEventListener('click', getFact);
    clearStorageButton.addEventListener('click', clearLocalStorage);