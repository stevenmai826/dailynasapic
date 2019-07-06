export const Nasa = { 
    getPic(podUrl) {
        return fetch(podUrl)
        .then(response => {
            return response.json();
          }).then(response => {

                    return [response.url, response.explanation];      
                
            })
            .catch(err => {
                console.error(err);
            });
        }
    }
