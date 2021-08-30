var rickmortyRepo = function() {
    var t = [],
        urlJSON = "https://rickandmortyapi.com/api/character/";

    function n(urlJSON) {
        t.push(urlJSON)
    }
    return {
        add: n,
        getAll: function() {
            return t
        },
        addListItem: function(t) {
            var urlJSON = $('<li class="list-group-item"></li>'),
                n = $('<button type="button" id="cursor" class="btn btn-block btn-outline-* pop-button" data-toggle="modal" data-target="#popi-modal">' + t.name + "</button>");
            n.on("click", function() {
                var urlJSON;
                urlJSON = t, $(document).on("click", ".pop-button", function() {
                    var t = $("<h4> Nombre: " + urlJSON.name + "</h4>"),
                        n = $("<img>"),
                        a = $("<p> Especie: " + urlJSON.species + "</p>");
                    g = $("<p> Genero: " + urlJSON.gender + "</p>");
                    e = $("<p> Estado: " + urlJSON.status + "</p>");
                    n.attr("src", urlJSON.imageUrl), $("#character-name").html(t), $("#image-element").html(n), $("#species-element").html(a), $("#gender-element").html(g), $("#status-element").html(e)
                })
            }), $(".characters-list").append(urlJSON), urlJSON.append(n)
        },
        loadList: function() {
            return $.ajax(urlJSON).then(function(t) {
                t.results.forEach(function(t) {
                    n({
                        name: t.name,
                        detailsUrl: t.url
                    })
                })
            }).catch(function(t) {
                console.error(t)
            })
        },
        loadDetails: function(t) {
            var urlJSON = t.detailsUrl;
            return $.ajax(urlJSON).then(function(urlJSON) {
                t.imageUrl = urlJSON.image, t.species = urlJSON.species, t.gender = urlJSON.gender, t.status = urlJSON.status, t.origin = urlJSON.origin.name
            }).catch(function(t) {
                console.error(t)
            })
        }
    }
}(),
getAllCharacters = rickmortyRepo.getAll();
rickmortyRepo.loadList().then(function() {
getAllCharacters.forEach(function(t) {
    rickmortyRepo.addListItem(t), rickmortyRepo.loadDetails(t)
})
});