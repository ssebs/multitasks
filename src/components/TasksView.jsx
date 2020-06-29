import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";
import { capFirst, getUserTasks } from "../Util";

const TasksView = (props) => {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        console.log(`Load tasks for ${props.match.params.user}`);
        getUserTasks(props.match.params.user)
            .then((resp) => {
                console.log(resp);
                setTasks(resp.items);
            })
            .catch((err) => window.alert(err));
    }, []);

    return (
        <div>
            <h1>{capFirst(props.match.params.user)}'s Tasks:</h1>
            {tasks && (
                <ul>
                    {tasks.map((t) => (
                        <li key={t.name}>{t.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default withRouter(TasksView);
