// Util.js - misc utils

// Basic data ones
export const loadData = () => {
    return new Promise((resolve, reject) => {
        // if (localStorage.getItem("data")) {
        //     resolve(JSON.parse(localStorage.getItem("data")));
        // } else {
        //     reject("No data");
        // }
    });
};

export const saveData = (data) => {
    return new Promise((resolve, reject) => {
        // try {
        //     resolve(localStorage.setItem("data", JSON.stringify(data)));
        // } catch (err) {
        //     reject(err);
        // }
    });
};

export const wipeData = () => {
    return new Promise((resolve) => {
        localStorage.clear();
        resolve("Done");
    });
};

// Users
export const addUser = (name) => {
    const lName = name.toLowerCase();
    return new Promise((resolve, reject) => {
        if (localStorage.getItem(lName)) {
            reject("User already exists");
        } else {
            const firstItem = {
                items: [{ name: "Enter your first task here!", time: "9am" }],
            };
            localStorage.setItem(lName, firstItem);
            resolve({ lName: firstItem });
        }
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
                name: "Get ready",
                time: "7:30am",
            },
            {
                name: "Start working",
                time: "8am",
            },
            {
                name: "Eat lunch",
                time: "11:30am",
            },
            {
                name: "Walk dog",
                time: "1:30pm",
            },
            {
                name: "Practice guitar",
                time: "3pm",
            },
            {
                name: "Finish work",
                time: "5pm",
            },
            {
                name: "Walk dog",
                time: "6pm",
            },
            {
                name: "Practice guitar",
                time: "7pm",
            },
            {
                name: "Eat dinner",
                time: "7:30pm",
            },
            {
                name: "Excercise of some sort (Swim, Walk dog, etc)",
                time: "8pm",
            },
        ],
    },
    {
        name: "Matt",
        tasks: [
            {
                name: "Get ready",
                time: "9am",
            },
            {
                name: "Youtube / Vidya",
                time: "9:01am",
            },
            {
                name: "Lunch (If applicable)",
                time: "11:30am",
            },
            {
                name: "Apply for Jobs",
                time: "2pm",
            },
            {
                name: "Vidya / TV",
                time: "3pm",
            },
            {
                name: "Eat dinner (If applicable)",
                time: "7:30pm",
            },
            {
                name: "Vidya / TV",
                time: "8pm",
            },
        ],
    },
    {
        name: "Carissa",
        tasks: [
            {
                name: "Walk dog",
                time: "6am",
            },
            {
                name: "Get ready",
                time: "8:30am",
            },
            {
                name: "Feed dog",
                time: "9am",
            },
            {
                name: "Start working",
                time: "11am",
            },
            {
                name: "Eat lunch",
                time: "2pm",
            },
            {
                name: "Walk dog",
                time: "2pm",
            },
            {
                name: "Feed dog",
                time: "2pm",
            },
            {
                name: "Back to work",
                time: "2:45pm",
            },
            {
                name: "Feed dog",
                time: "7pm",
            },
            {
                name: "Eat dinner",
                time: "7:30pm",
            },
            {
                name: "Walk dog",
                time: "9pm",
            },
        ],
    },
];
