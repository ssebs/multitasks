import React, { useState, useEffect } from 'react'

import { withRouter } from "react-router-dom";
import { capFirst } from '../Util';

const TasksView = (props) => {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        console.log(`Load tasks for ${props.match.params.user}`)
    }, [props.match.params.user])

    return (
        <div>
            <h1>{capFirst(props.match.params.user)}'s Tasks:</h1>
        </div>
    )
}

export default withRouter(TasksView)
