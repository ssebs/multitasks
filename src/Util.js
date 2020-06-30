// Util.js - misc utils

export const wipeData = () => {
    return new Promise((resolve) => {
        localStorage.clear();
        resolve("Done");
    });
};

export const addUser = (name) => {
    const lName = name.toLowerCase();
    return new Promise((resolve, reject) => {
        if (localStorage.getItem(lName)) {
            reject("User already exists");
        } else {
            const firstItem = [
                {
                    text: "Enter your first task here!",
                    time: "9am",
                    id: generateUUID(),
                    done: false,
                },
            ];

            localStorage.setItem(lName, JSON.stringify(firstItem));
            resolve("User added");
        }
    });
};

export const getUserTasks = (name) => {
    const lName = name.toLowerCase();
    return new Promise((resolve, reject) => {
        if (localStorage.getItem(lName)) {
            resolve(JSON.parse(localStorage.getItem(lName)));
        } else {
            reject(`${name} does not exist!`);
        }
    });
};

export const setUserTasks = (name, tasks) => {
    const lName = name.toLowerCase();
    return new Promise((resolve, reject) => {
        localStorage.setItem(lName, JSON.stringify(tasks));
    });
};

export const getUserNames = () => {
    return new Promise((resolve, reject) => {
        resolve(Object.keys(localStorage));
    });
};

// Misc util
export const capFirst = (inputStr) => {
    return inputStr.charAt(0).toUpperCase() + inputStr.slice(1);
};

// Data structure for users / tasks

export const sampleData = [
    {
        name: "Seb",
        tasks: [
            {
                text: "Get ready",
                time: "7:30am",
                id: "8fe04b05-d023-404c-b598-478f99bc1d20",
                done: false,
            },
            {
                text: "Start working",
                time: "8am",
                id: "8fe04b05-d023-404c-b598-478f99bc1319",
                done: false,
            },
            {
                text: "Eat lunch",
                time: "11:30am",
                id: "8fe04b05-d023-404c-b598-478f99bc1318",
                done: false,
            },
            {
                text: "Walk dog",
                time: "1:30pm",
                id: "8fe04b05-d023-404c-b598-478f99bc1317",
                done: false,
            },
            {
                text: "Practice guitar",
                time: "3pm",
                id: "8fe04b05-d023-404c-b598-478f99bc1316",
                done: false,
            },
            {
                text: "Finish work",
                time: "5pm",
                id: "8fe04b05-d023-404c-b598-478f99bc1396",
                done: false,
            },
            {
                text: "Walk dog",
                time: "6pm",
                id: "8fe04b05-d023-404c-b598-478f99bc13915",
                done: false,
            },
            {
                text: "Practice guitar",
                time: "7pm",
                id: "8fe04b05-d023-404c-b598-478f99bc1314",
                done: false,
            },
            {
                text: "Eat dinner",
                time: "7:30pm",
                id: "8fe04b05-d023-404c-b598-478f99bc1313",
                done: false,
            },
            {
                text: "Excercise of some sort (Swim, Walk dog, etc)",
                time: "8pm",
                id: "8fe04b05-d023-404c-b598-478f99bc1312",
                done: false,
            },
        ],
    },
    {
        name: "Matt",
        tasks: [
            {
                text: "Get ready",
                time: "9am",
                id: "2faeae2f-3a28-44aa-99e5-ee8a96cb15af",
                done: false,
            },
            {
                text: "Youtube / Vidya",
                time: "9:01am",
                id: "2faeae2f-3a28-44aa-99e5-ee8a96cb1511",
                done: false,
            },
            {
                text: "Lunch (If applicable)",
                time: "11:30am",
                id: "2faeae2f-3a28-44aa-99e5-ee8a96cb1512",
                done: false,
            },
            {
                text: "Apply for Jobs",
                time: "2pm",
                id: "2faeae2f-3a28-44aa-99e5-ee8a96cb1513",
                done: false,
            },
            {
                text: "Vidya / TV",
                time: "3pm",
                id: "2faeae2f-3a28-44aa-99e5-ee8a96cb1514",
                done: false,
            },
            {
                text: "Eat dinner (If applicable)",
                time: "7:30pm",
                id: "2faeae2f-3a28-44aa-99e5-ee8a96cb1516",
                done: false,
            },
            {
                text: "Vidya / TV",
                time: "8pm",
                id: "2faeae2f-3a28-44aa-99e5-ee8a96cb1517",
                done: false,
            },
        ],
    },
    {
        name: "Carissa",
        tasks: [
            {
                text: "Walk dog",
                time: "6am",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb64c",
                done: false,
            },
            {
                text: "Get ready",
                time: "8:30am",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb612",
                done: false,
            },
            {
                text: "Feed dog",
                time: "9am",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb613",
                done: false,
            },
            {
                text: "Start working",
                time: "11am",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb614",
                done: false,
            },
            {
                text: "Eat lunch",
                time: "2pm",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb615",
                done: false,
            },
            {
                text: "Walk dog",
                time: "2pm",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb616",
                done: false,
            },
            {
                text: "Feed dog",
                time: "2pm",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb617",
                done: false,
            },
            {
                text: "Back to work",
                time: "2:45pm",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb618",
                done: false,
            },
            {
                text: "Feed dog",
                time: "7pm",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb619",
                done: false,
            },
            {
                text: "Eat dinner",
                time: "7:30pm",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb620",
                done: false,
            },
            {
                text: "Walk dog",
                time: "9pm",
                id: "0f8d89b1-3baf-4075-8966-6ed9924bb621",
                done: false,
            },
        ],
    },
];

export const generateUUID = () => {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
        c
    ) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
};
