const express = require('express')
const app = express()

//route and api
app.get("/api", (req, res) => {
    res.json({ "users": ["userOner", "userTwo", "userThree"] })
})

//startup the backend
app.listen(5000, () => {
    console.log("Server started and port 5000")
}) 