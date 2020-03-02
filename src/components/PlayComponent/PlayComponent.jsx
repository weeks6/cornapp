import React, { useState, useContext, useReducer, useEffect} from 'react'

import './PlayComponent.scss'
import ListComponent from '../ListComponent/ListComponent'

let GlobalState = {
    isLoading: true,
    tasks: [],
    error: null
}

export default function PlayComponent() {

    const [innerState, setState] = useState({
        status: false
    })
    
    const context = useContext(PlayContext)
    const url = 'https://weeks6.github.io/tasks.json'

    useEffect(() => {
        if (!innerState.status) {
            window.fetch(url)
            .then(response => response.json())
            .then(data => {
    
                console.log(data)
    
                context.tasks = [...data, ...GlobalState.tasks]
                context.isLoading = false
    
                setState({
                    status: true
                })
    
                GlobalState = context
    
            }) 
            .catch(error => GlobalState = {
                error,
                isLoading: false
            })
    
        }
    })

    const PlayProvider = ({ children }) => {

        const [state, dispatch] = useReducer((state, action) => {
            switch (action.type) {
                case "SAVE_TASK":

                    state.tasks[action.payload.id] = action.payload

                    return {
                        ...state 
                    }
                default:
                    return state
            }
        }, GlobalState)

        function saveTask(task) {
            dispatch({
                type: "SAVE_TASK",
                payload: task
            })
        }
    
        return (
            <PlayContext.Provider value={{
                tasks: state.tasks,
                saveTask
            }}>
                { children }
            </PlayContext.Provider>
        )
    }
        

    if (!context.isLoading) {
        return (
            <PlayProvider>
                <div className="container">
                    <h1 key={0} style={{marginLeft: 1 +'rem'}}>Play Component</h1>
                    <ListComponent key={1} status={innerState.status}/>
                </div>
            </PlayProvider>
        )
    } else {
        return(
            <PlayContext.Provider value={1}>
                <h1 key={0} style={{marginLeft: 6 +'rem'}}>Loading...</h1>
            </PlayContext.Provider>
        )
    }
}

export const PlayContext = React.createContext(GlobalState)