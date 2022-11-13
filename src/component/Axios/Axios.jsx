import React from 'react'
const axios = require('axios').default;

export default function Axios() {
   

    return (
        <div>
            {
                
                 // Make a request for a user with a given ID
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    })
            }
        </div>
    )
}
