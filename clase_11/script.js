var results = document.getElementById("results");
var getAllBtn = document.getElementById("getAllBtn");
var filterBtn = document.getElementById("filterBtn");


function createCard(character) {
    return `
        <div class="card">
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Gender: ${character.gender}</p>
        </div>
    `;
}

function showCharacters(data) {
    results.innerHTML = "";
    data.results.forEach(char => {
        results.innerHTML += createCard(char);
    });
}

function showError(message) {
    results.innerHTML = `<p style="color:red;">${message}</p>`;
}

getAllBtn.onclick = async () => {
    results.innerHTML = "<p>Cargando personajes...</p>";
    try {
        var response = await fetch("https://rickandmortyapi.com/api/character/");
        if (!response.ok) throw new Error("Error al obtener personajes");
        var data = await response.json();

        var totalPages = data.info.pages;
        var allCharacters = [...data.results];

        var fetches = [];
        for (var i = 2; i <= totalPages; i++) {
            fetches.push(fetch(`${"https://rickandmortyapi.com/api/character/"}?page=${i}`).then(r => r.json()));
        }

        var pages = await Promise.all(fetches);
        pages.forEach(p => allCharacters.push(...p.results));

        results.innerHTML = "";
        allCharacters.forEach(char => {
            results.innerHTML += createCard(char);
        });

    } catch (err) {
        showError(err.message);
    }
};


filterBtn.onclick = async () => {
    var name = document.getElementById("name").value;
    var status = document.getElementById("status").value;
    var species = document.getElementById("species").value;
    var type = document.getElementById("type").value;
    var gender = document.getElementById("gender").value;

    var query = new URLSearchParams({ name, status, species, type, gender }).toString();
    var url = `${"https://rickandmortyapi.com/api/character/"}?${query}`;

    results.innerHTML = "<p>Buscando personajes...</p>";

    try {
        var response = await fetch(url);
        if (!response.ok) throw new Error("No se encontraron personajes con esos filtros.");
        var data = await response.json();

        var totalPages = data.info.pages;
        var filteredCharacters = [...data.results];

        var fetches = [];
        for (var i = 2; i <= totalPages; i++) {
            fetches.push(fetch(`${url}&page=${i}`).then(r => r.json()));
        }

        var pages = await Promise.all(fetches);
        pages.forEach(p => filteredCharacters.push(...p.results));

        results.innerHTML = "";
        filteredCharacters.forEach(char => {
            results.innerHTML += createCard(char);
        });

    } catch (err) {
        showError(err.message);
    }
};



