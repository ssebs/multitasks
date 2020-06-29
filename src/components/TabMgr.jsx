import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

// This should support gestures too
const TabMgr = () => {
    const [tabKey, setTabKey] = useState("home");
    return (
        <div>
            <Tabs activeKey={tabKey} id="tabs" onSelect={(k) => setTabKey(k)}>
                <Tab eventKey="home" title="home">
                    <p>Home page</p>
                </Tab>
                <Tab eventKey="user1" title="user1">
                    <p>User 1</p>
                </Tab>
            </Tabs>
        </div>
    );
};

export default TabMgr;
