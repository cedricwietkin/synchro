loadRulesButton.addEventListener('click', () => {
  fetch('becode.json')
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data)) {
        data.forEach(rule => {
          const li = document.createElement('li');
          li.textContent = rule;
          rulesList.appendChild(li);
        });
      } else {
        console.table('Les règles de bécodage sont au mauvais format.');
      }
    })
    .catch(error => {
      console.table('Une erreur s\'est produite lors du chargement des règles', error);
    });
});