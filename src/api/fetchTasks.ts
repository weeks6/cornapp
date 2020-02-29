import React from 'react';

export default function fetchTasks(context: React.Component) {
    const url = 'https://weeks6.github.io/tasks.json'
    window.fetch(url)
        .then(response => response.json())
        .then(data => {

            for (let item of data) {
                window.localStorage.setItem(item.id, item.text)
            }

            let compiledList = []

            console.log(window.localStorage)
            for (let [key, value] of Object.entries(window.localStorage)) {
                compiledList.push({
                    id: key,
                    text: value
                })
            }

            compiledList = compiledList.sort( (a, b) => {
                return Number.parseInt(a.id)  - Number.parseInt(b.id)
            })

            context.setState({
                isLoading: false,
                tasks: compiledList
            })
            
        }) 
        .catch(error => context.setState({
            error,
            isLoading: false
        }))
}