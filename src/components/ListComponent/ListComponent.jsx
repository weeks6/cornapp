import React, { useContext} from 'react'

import { PlayContext } from '../PlayComponent/PlayComponent'

import './ListComponent.scss'
import ListItem from './ListItem'

export default function ListComponent() {

    const context = useContext(PlayContext)

    if (context.tasks !== null) {
        return (
            <ul className="list-component">
                {
                    context.tasks.map((item, idx) => 
                        <ListItem key={idx} task={item}/>
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