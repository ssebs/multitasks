import React, { useState, useEffect } from "react";

import { loadData, saveData } from "../Util";


const AddUserForm = () => {

}


const EditTasksUsers = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        loadData()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Here you will edit the tasks and people.</h1>
        </div>
    );
};

export default EditTasksUsers;
