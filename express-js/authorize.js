const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === "safwen") {
        req.user = { id: 1, name: "Safwen", age: 22 }
        next()
    } else {
        res.status(401).send("Not authorized to this webapge")
    }
    console.log("authorize");
    next()
}
module.exports = authorize