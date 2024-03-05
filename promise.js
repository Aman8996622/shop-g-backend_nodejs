const { reject } = require("lodash");

const promise = new Promise((resovle,reject) => {
    setTimeout(() => {
        resovle("This is my resolved data");
    }, 5000);
})