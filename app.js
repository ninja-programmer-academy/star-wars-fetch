let form = document.getElementById("form");

function submitEvent(event) {
    event.preventDefault();

    let input = document.getElementById("search");
    let resultsDiv = document.getElementById("results");

    fetch("https://www.swapi.tech/api/people/?name="+input.value)
        .then(function(response) {
            return response.json()
        })
        .then(function(result) {
            for (let i=0; i < result.results.length; i++) {
                let char = result.results[i].properties;
                let characterDiv = document.createElement("div");
                let html = "<h2>"+char.name+"</h2>"
                html += "<ul>"
                html += "<li>birth year: "+char.birth_year+"</li>"
                html += "<li>homeworld: "+char.homeworld+"</li>"
                html += "</ul>"
                characterDiv.innerHTML = html;
                resultsDiv.appendChild(characterDiv);
            }
        });

}

form.addEventListener("submit", submitEvent);
