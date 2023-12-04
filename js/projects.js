document.addEventListener('DOMContentLoaded', function () {
    // Utilisez l'API fetch pour récupérer les données
    fetch('https://api.github.com/users/PatrickLoic-dev/repos')
        .then(response => response.json())
        .then(data => {
            // Manipulez les données ici
            displayData(data);
        })
        .catch(error => {
            console.error('Erreur de récupération des données:', error);
        });
});

// Fonction pour afficher les données dans la structure HTML existante
function displayData(data) {
    const resultDiv = document.getElementById('cards');

    // Créez les éléments nécessaires pour chaque élément de données
    data.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('item');

        const paragraph = document.createElement('p');
        paragraph.innerHTML = `<span>Project</span> ${item.name}`;

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image');

        const languageDiv = document.createElement('div');
        languageDiv.classList.add('language');

        if(item.language == "C#"){
            const languageImage = document.createElement('img');
            languageImage.src = `../assets/csharp-dark.svg`; // Assurez-vous que le champ language correspond à vos données
            languageImage.alt = '';
        }else if(item.language == "null"){
            const languageImage = document.createElement('img');
            languageImage.src = `../assets/flutter-dark.svg`; // Assurez-vous que le champ language correspond à vos données
            languageImage.alt = '';
        }
            const languageImage = document.createElement('img');
            languageImage.src = `../assets/${item.language}-dark.svg`; // Assurez-vous que le champ language correspond à vos données
            languageImage.alt = '';
        
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = item.description;

        const link = document.createElement('a');
        link.href = item.html_url; // Assurez-vous que le champ repositoryLink correspond à vos données
        link.textContent = 'view-repository';

        // Assemblez les éléments
        languageDiv.appendChild(languageImage);
        imageDiv.appendChild(languageDiv);
        cardDiv.appendChild(imageDiv);
        cardDiv.appendChild(descriptionParagraph);
        cardDiv.appendChild(link);

        newItem.appendChild(paragraph);
        newItem.appendChild(cardDiv);

        resultDiv.appendChild(newItem);
    });
}
