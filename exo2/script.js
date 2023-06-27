const getFactButton = document.getElementById('getFactButton');
    const factContainer = document.getElementById('factContainer');

    getFactButton.addEventListener('click', () => {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
          const factDiv = document.createElement('div');
          factDiv.textContent = data.value;
          factContainer.appendChild(factDiv);
        })
        .catch(error => {
          console.log('Une erreur s\'est produite lors de la récupération du fait', error);
        });
    });