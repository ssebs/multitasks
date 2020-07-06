import React, { useState } from "react";

import { addUser, wipeData } from "../Util";
import { Form, Button, Container } from "react-bootstrap";
import SoftKeyboard from "./SoftKeyboard";

const AddUserForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            return;
        }
        addUser(name)
            .then((resp) => {
                // console.log(resp);
                window.alert(resp);
            })
            .catch((err) => window.alert(err));
    };

    return (
        <>
            <Form onSubmit={handleSubmit} className="mw-300 my-2">
                <Form.Group>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Submit
                </Button>
            </Form>
            <SoftKeyboard
                onChange={(txt) => {
                    setName(txt);
                }}
            />
        </>
    );
};

const EditUsers = () => {
    return (
        <Container>
            <h2 className="my-3">Add a user below:</h2>
            <hr />
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

export default EditUsers;
