import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";

import { getUserNames } from "../Util";
import TasksView from "./TasksView";

// This should support gestures too
const TabMgr = () => {
    const [users, setUsers] = useState(null);
    const [tabKey, setTabKey] = useState("home");

    useEffect(() => {
        getUserNames()
            .then((resp) => {
                setUsers(resp);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <Tabs activeKey={tabKey} id="tabs" onSelect={(k) => setTabKey(k)}>
                <Tab eventKey="home" title="home">
                    <p>Home page</p>
                </Tab>
                {users &&
                    users.map((user) => (
                        <Tab eventKey={user} title={user} key={user}>
                            <TasksView user={user} />
                        </Tab>
                    ))}
            </Tabs>
        </div>
    );
};

export default TabMgr;
