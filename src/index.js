import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import ListComponent from './components/ListComponent/ListComponent'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoading: true,
            tasks: [],
            error: null
        }
    }

    componentDidMount() {
        this.fetchTasks()
    }

    fetchTasks() {
        const url = 'https://weeks6.github.io/tasks.json'
        window.fetch(url)
            .then(response => response.json())
            .then(data => {
                data.map(item => {
                    console.log(item)
                    window.localStorage.setItem(item.id, item.text)
                })

                // console.log(window.localStorage)

                let compiledList = []

                console.log(window.localStorage)
                for (let [key, value] of Object.entries(window.localStorage)) {
                    compiledList.push({
                        id: key,
                        text: value
                    })
                }

                compiledList = compiledList.sort( (a, b) => {
                    return a.id - b.id
                })

                this.setState({
                    isLoading: false,
                    tasks: compiledList
                })

                console.log(this.state.tasks)
                
            }) 
            .catch(error => this.setState({
                error,
                isLoading: false
            }))
    }

    render() {
        if (!this.isLoading) {
            return (
                <ListComponent tasks={this.state.tasks}/>
            )
        } else {
            return (
                <h3>Loading...</h3>
            )
        }
    }
}

ReactDOM.render(
    <App classname="container"/>,
    document.getElementById('root')
);
  