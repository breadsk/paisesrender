const { request , response } = require("express");

const returnOne = (array,id)=> {
    return array.find((arr) => {
        return arr.id === id;
    })
}

module.exports = { returnOne }

