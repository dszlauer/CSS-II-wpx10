const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cC = require("./controller/customerController");

// Top level middleware
// bodyParser is required if we need access to the body object on any incoming request, otherwise data is accessed on params or query object.
app.use(bodyParser.json());

app.set("json spaces", 2); // number of spaces for indentation

// endpoints, check controller/customerController for function definitions
app.get("/api/customers", cC.read);
app.get("/api/customer", cC.singleCustomer);
app.post("/api/customers/:name", cC.create);
app.put("/api/customers", cC.update);
app.delete("/api/customer/:id", cC.deleaddte);

const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
