module.exports = function (func) {
    try {
        func.apply(this)
    } catch (error) {
        console.log(error.response);
    }
}