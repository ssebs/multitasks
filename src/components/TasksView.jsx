import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

import { capFirst, getUserTasks, setUserTasks, generateUUID } from "../Util";
import TaskItem from "./TaskItem";

const TasksView = (props) => {
    const [userName, setUserName] = useState('')
    const [tasks, setTasks] = useState(null);


    useEffect(() => {
        // console.log(`Load tasks for ${props.user}`);
        getUserTasks(props.user)
            .then((resp) => {
                // console.log(resp);
                setUserName(props.user)
                setTasks(resp.items);
            })
            .catch((err) => window.alert(err));
    }, [props.user]);

    // // route based
    // useEffect(() => {
    //     console.log(`Load tasks for ${props.match.params.user}`);
    //     getUserTasks(props.match.params.user)
    //         .then((resp) => {
    //             console.log(resp);
    //             setTasks(resp);
    //         })
    //         .catch((err) => window.alert(err));
    // }, [props.match.params.user]);

    const handleTaskChange = (newTask) => {
        const tmp = tasks.map((task) => {
            if (task.id === newTask.id) {
                task = newTask;
            }
            return task;
        });
        // console.log(tmp);
        setTasks(tmp);
        setUserTasks(userName, tmp)
            .then((resp) => {
                // console.log(resp);
            })
            .catch((err) => console.error(err));
        // console.log(tmp);
    };

    const addTaskItem = () => {
        const newID = generateUUID();
        setTasks([
            ...tasks,
            {
                id: newID,
                text: "",
                done: false,
            },
        ]);
    };

    const handleDeleteTask = (id) => {
        const tmp = tasks.filter((task) => task.id !== id);
        // console.log(tmp);
        setTasks(tmp);
        setUserTasks(userName, tmp)
            .then((resp) => {
                // console.log(resp);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h1 className="text-center pt-3">
                {userName && capFirst(userName)}'s Tasks:
            </h1>
            {tasks && (
                <div className="justify-content-center text-center my-3">
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            data={task}
                            handleTaskChange={(task) => handleTaskChange(task)}
                            handleDeleteTask={(id) => handleDeleteTask(id)}
                        />
                    ))}
                    <div className="clearfix" />
                    <Button
                        className="mt-2"
                        variant="outline-primary"
                        onClick={addTaskItem}
                    >
                        + Add new item
                    </Button>
                </div>
            )}
        </div>
    );
};

export default withRouter(TasksView);
