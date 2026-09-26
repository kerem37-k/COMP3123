var http = require("http");

//TODO - Use Employee Module here
const employees = require("./Employee");

console.log("Lab 03 - NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081;

//Create Web Server using CORE API
const server = http.createServer((req, res) => {

    if (req.method !== "GET") {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            error: http.STATUS_CODES[405]
        }));
        return;
    }

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to Lab Exercise 03</h1>");
        return;
    }

    if (req.url === "/employee") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(employees));
        return;
    }

    if (req.url === "/employee/names") {
        const employeeNames = employees
            .map(employee => `${employee.firstName} ${employee.lastName}`)
            .sort();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(employeeNames));
        return;
    }

    if (req.url === "/employee/totalsalary") {
        const totalSalary = employees.reduce(
            (total, employee) => total + employee.Salary,
            0
        );

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            total_salary: totalSalary
        }));
        return;
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        error: http.STATUS_CODES[404]
    }));
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});