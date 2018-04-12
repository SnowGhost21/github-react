const BASE_URL = "https://api.github.com/users/{user}/repos"

export async function fetchData(user) {
    return new Promise((resolve, reject) => {
        let url = BASE_URL.replace("{user}", user)
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(e => reject(e))
    })
}