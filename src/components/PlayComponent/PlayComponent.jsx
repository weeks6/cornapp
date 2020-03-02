import React from 'react'

// api 
import fetchTasks from '../../api/fetchTasks'

import './PlayComponent.scss'
import ListComponent from '../ListComponent/ListComponent'

export default class PlayComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoading: true,
            tasks: [],
            error: null
        }
    }

    componentDidMount() {
        fetchTasks(this)
    }

    updateState(updatedChildState) {
        const { id, text } = updatedChildState
        const tempList = this.props.tasks
        tempList[id] = text
        
        this.setState({
            tasks: tempList
        })
    }


    render() {
        const components = [<h1 style={{marginLeft: 1 +'rem'}}>Play Component</h1>]

        if (!this.isLoading) {
            components.push(
                <ListComponent tasks={this.state.tasks} callback={this.updateState}/>)
        } else {
            components.push(<h3>Loading...</h3>) 
        }

        return (
            <div className="container">
                {components}
            </div>
        )
        
    }
}