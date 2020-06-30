import React, { useState, useEffect } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import TasksView from "./TasksView";
import { getUserNames, capFirst } from "../Util";

// This should support gestures too
const TabMgr = (props) => {
    const [users, setUsers] = useState(null);
    const [tabKey, setTabKey] = useState("home");

    useEffect(() => {
        getUserNames()
            .then((resp) => {
                setUsers(resp);
                setTabKey(props.match.params.user);
            })
            .catch((err) => console.error(err));
    }, [props.match.params.user]);

    return (
        <div>
            <Tabs
                activeKey={tabKey}
                id="tabs"
                onSelect={(k) => {
                    if (k === "home") {
                        props.history.push("/");
                    } else {
                        props.history.push(`/tasks/${k}`);
                    }
                    setTabKey(k);
                }}
            >
                <Tab eventKey="home" title="Home">
                    <Container className="text-center my-3">
                        <h2>Multi-Tasks</h2>
                        <p>
                            Multi-Tasks is a web app that allows you to have
                            multiple To-Do lists for each person in the house.
                        </p>
                        <p>
                            To Start, click "Edit Users" at the top right and
                            add a user.
                        </p>
                    </Container>
                </Tab>
                {users &&
                    users.map((user) => (
                        <Tab eventKey={user} title={capFirst(user)} key={user}>
                            <TasksView user={user} />
                        </Tab>
                    ))}
            </Tabs>
        </div>
    );
};

export default withRouter(TabMgr);
