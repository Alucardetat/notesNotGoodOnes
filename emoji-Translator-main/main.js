document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const inputElement = document.getElementById('translator-input');
    const resultsElement = document.getElementById('results');

    submitButton.addEventListener('click', function () {
        const inputValue = inputElement.value;
        const selectedRadio = document.querySelector('input[name="translation-section"]:checked').value;

        switch (selectedRadio) {
            case 'encode':
                resultsElement.innerText = encode(inputValue);
                break;
            case 'translate':
                resultsElement.innerText = translate(inputValue);
                break;
            case 'madlib':
                resultsElement.innerText = madlib(inputValue);
                break;
            case 'search':
                const searchResults = search(inputValue);
                displaySearchResults(searchResults);
                break;
            case 'random':
                const translations = ['encode', 'translate', 'madlib', 'search'];
                const randomTranslation = randomElement(translations);
                handleRandomTranslation(randomTranslation, inputValue);
                break;
        }
    });

    const displaySearchResults = function (searchResults) {
        resultsElement.innerHTML = ''; // Clear current content

        if (searchResults.length === 0) {
            resultsElement.innerText = 'No emojis found for the given search criteria.';
        } else {
            searchResults.forEach(function (emojiObject) {
                const pElement = document.createElement('p');
                pElement.innerText = emojiObject.symbol;
                resultsElement.appendChild(pElement);
            });
        }
    };

    const handleRandomTranslation = function (translation, inputValue) {
        switch (translation) {
            case 'encode':
                resultsElement.innerText = encode(inputValue);
                break;
            case 'translate':
                resultsElement.innerText = translate(inputValue);
                break;
            case 'madlib':
                resultsElement.innerText = madlib(inputValue);
                break;
            case 'search':
                const randomSearchResults = search(inputValue);
                displaySearchResults(randomSearchResults);
                break;
        }
    };
});