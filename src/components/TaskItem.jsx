import React, { useState, useEffect } from "react";

import { Button, Form, FormControl, FormCheck } from "react-bootstrap";

const TaskItem = (props) => {
    const [task, setTask] = useState(props.data);

    useEffect(() => {
        // console.log(props.data);
        if (props.data !== task) {
            props.handleTaskChange(task);
        }
        // eslint-disable-next-line
    }, [task]);

    const handleChange = (e) => {
        if (e.target.name === "done") {
            setTask({ ...task, done: e.target.checked });
        } else {
            const value = e.target.value;
            setTask({ ...task, [e.target.name]: value });
        }
    };

    return (
        <div
            className="m-1 mb-2 d-inline-block text-center"
            style={{ width: "50%", margin: "auto" }}
        >
            <Form
                inline
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="justify-content-center"
            >
                <FormCheck
                    type="checkbox"
                    name="done"
                    onChange={handleChange}
                    defaultChecked={task.done}
                />

                <FormControl
                    type="text"
                    name="text"
                    onChange={handleChange}
                    value={task.text}
                    style={{
                        width: "256px",
                        textDecoration: task.done ? "line-through" : "none",
                    }}
                />

                <Button
                    className="ml-1"
                    variant="danger"
                    size="sm"
                    type="button"
                    name="delete"
                    onClick={() => props.handleDeleteTask(task.id)}
                >
                    X
                </Button>
            </Form>
        </div>
    );
};

export default TaskItem;
