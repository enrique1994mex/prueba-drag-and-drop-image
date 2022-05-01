const infoActor = async (apiKey, actorName) => {
    return fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${actorName}`)
        .then(response => response.json())
        .then(data => {
            return data.results[0]
        })
        .catch(error => error)
}

export {infoActor}; 