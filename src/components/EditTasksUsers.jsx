import React, { useState, useEffect } from "react";

import { addUser, wipeData } from "../Util";
import { Form, Button, Container } from "react-bootstrap";

const AddUserForm = () => {
    const [name, setName] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            return;
        }
        addUser(name)
            .then((resp) => {
                console.log(resp);
                window.alert(resp);
            })
            .catch((err) => window.alert(err));
    };

    return (
        <Form onSubmit={handleSubmit} className="mw-300 my-2">
            <Form.Group>
                <Form.Label>Name: </Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

const EditTasksUsers = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // loadData()
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }, []);

    return (
        <Container>
            <h1>Here you will edit the tasks and people.</h1>
            <hr />
            Add users below:
            <AddUserForm />
            <hr />
            <Button
                variant="outline-danger"
                onClick={() => {
                    if (window.confirm("Are you sure?")) {
                        wipeData().then((r) => {
                            window.alert(r);
                        });
                    }
                }}
            >
                Wipe all data
            </Button>
        </Container>
    );
};

export default EditTasksUsers;
