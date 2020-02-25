import React from 'react'

import './ListComponent.scss'
import ListItem from './ListItem'

export default class ListComponent extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props !== prevProps) {
            this.setState({
                tasks: this.props.tasks
            })
        }
    }

    render() {

        if (this.state !== null) {
            return (
                <ul className="list-component">
                    {
                        this.state.tasks.map(item => 
                            <ListItem task={item}/>
                        )
                    }
                </ul>
            )
        } else {
            return (
                <ul className="list-component"></ul>
            )
        }
    }
}