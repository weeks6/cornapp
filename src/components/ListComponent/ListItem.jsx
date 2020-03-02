import React from 'react';

export default class ListItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.task.id,
            text: this.props.task.text,
            isHovered: false,
            isEdit: false
        }

        this.enterHandler = () => {
            this.setState({
                isHovered: true
            })
        }

        this.leaveHandler = () => {
            this.setState({
                isHovered: false
            })
        }

        this.handleEdit = () => {
            this.setState({
                isEdit: !this.state.isEdit
            })
        }

        this.handleChange = (event) => {
            this.setState({
                text: event.target.value
            })    
        }

        this.handleSave = (event) => {

            window.localStorage.setItem(this.state.id, this.state.text)
            
            this.props.callback({
                id: this.state.id,
                text: this.state.text
            })

            this.setState({
                isEdit: !this.state.isEdit
            })
            
            event.preventDefault()
        }
    }

    render() {
        if (this.state.isEdit) {
            return (
                <li className="list-item"
                onMouseEnter={this.enterHandler}
                onMouseLeave={this.leaveHandler}>   
                    <form onSubmit={this.handleSave} className="edit-form">
                        <input type="text" value={ this.state.text } onChange={ this.handleChange } className="edit-input"/>  
                        <div className={ this.state.isEdit ? "item-controls" : "item-controls not-hovered"}>
                            <i className="material-icons icon" onClick={this.handleSave}>save</i>
                        </div>
                    </form>
                </li>
            )
        } else {
            return(
            <li className="list-item"
                onMouseEnter={this.enterHandler}
                onMouseLeave={this.leaveHandler}
                onDoubleClick={this.handleEdit}>
                { this.state.text } 
                <div className={ this.state.isHovered ? "item-controls" : "item-controls not-hovered"}>
                    <i className="material-icons icon" onClick={this.handleEdit}>edit</i>
                    <i className="material-icons icon">delete</i>
                </div>
            </li>
        )}
        
    }
        
}