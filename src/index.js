var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.get("/express", function (req, res) {
    res.send({
        message: "Hello from Express!",
    });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map