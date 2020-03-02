import React from 'react'

import './ListComponent.scss'
import ListItem from './ListItem'

export default class ListComponent extends React.Component {

    constructor(props) {
        super(props)
    }

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
                        this.state.tasks.map((item, idx) => 
                            <ListItem key={idx} task={item} callback={this.updateState}/>
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