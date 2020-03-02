import React, { useState, useContext } from 'react';

import { PlayContext } from '../PlayComponent/PlayComponent'

export default function ListItem({task}) {

    const context = useContext(PlayContext)

    const [state, setState] = useState({
        id: task.id,
        text: task.text,
        isHovered: false,
        isEdit: false
    })

    const enterHandler = () => {
        setState({
            id: state.id,
            text: state.text,
            isHovered: true,
            isEdit: state.isEdit
        })
    }

    const leaveHandler = () => {
        setState({
            id: state.id,
            text: state.text,
            isHovered: false,
            isEdit: state.isEdit
        })
    }

    const handleEdit = () => {
        setState({
            id: state.id,
            text: state.text,
            isHovered: state.isHovered,
            isEdit: !state.isEdit
        })
    }

    const handleChange = (event) => {
        setState({
            id: state.id,
            text: event.target.value,
            isHovered: state.isHovered,
            isEdit: state.isEdit
        })    
    }

    const handleSave = (event) => {
        const taskToSave = {
            id: state.id,
            text: state.text,
            isHovered: state.isHovered,
            isEdit: !state.isEdit
        }
        context.saveTask(taskToSave)
    }


    if (state.isEdit) {
        return (
            <li className="list-item"
            onMouseEnter={() => enterHandler()}
            onMouseLeave={() => leaveHandler()}>   
                <form onSubmit={() => handleSave()} className="edit-form">
                    <input type="text" value={ state.text } onChange={(event) => handleChange(event) } className="edit-input"/>  
                    <div className={ state.isEdit ? "item-controls" : "item-controls not-hovered"}>
                        <i className="material-icons icon" onClick={(event) => handleSave(event)}>save</i>
                    </div>
                </form>
            </li>
        )
    } else {
        return(
        <li className="list-item"
            onMouseEnter={() => enterHandler()}
            onMouseLeave={() => leaveHandler()}
            onDoubleClick={() => handleEdit()}>
            { state.text } 
            <div className={ state.isHovered ? "item-controls" : "item-controls not-hovered"}>
                <i className="material-icons icon" onClick={() => handleEdit()}>edit</i>
                <i className="material-icons icon">delete</i>
            </div>
        </li>
    )}
}       