const http = require("http");
const fs = require("fs"); // Not used in this code, but kept for clarity

function handler(req, res) {
  if (req.headers["Content-Type"] !== 'application/json') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 400; // Set status code before writing the response
    res.write(JSON.stringify({ code: 400, message: "Bad Request" })); // Use write instead of writeFile
    res.end();
    return;
  }

  if (req.url === "/submit" && req.method === "POST") {
    let submitData = "";

    req.on('data', (chunk) => {
      submitData += chunk; // Concatenate chunks efficiently
    });

    req.on('end', () => {
      try {
        submitData = JSON.parse(submitData); // Parse within a try-catch block
        res.statusCode = 201;
        res.write(JSON.stringify({ code: 201, data: submitData })); // Use data instead of submitData (assuming successful parsing)
        res.end();
      } catch (error) {
        res.statusCode = 400; // Set status code for parsing errors
        res.write(JSON.stringify({ code: 400, message: "Invalid JSON format" }));
        res.end();
      }
    });
  } else {
    // Handle other request methods or paths (optional)
    res.statusCode = 404;
    res.write(JSON.stringify({ code: 404, message: "Not Found" }));
    res.end();
  }
}

http.createServer(handler).listen(3000, () => {
  console.log('Server listening on port 3000');
});
