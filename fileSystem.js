// const http = require("http");

// const fs = require("fs");

// function handler (req, res) {
// if (req.headers["Content-Type"] !== 'application/json') {
//     res.setHeader('Content-Type', 'application/json');
//     res.statusCode = 400;
//     res.writeFile(JSON.stringify(
//       code = 400,
//       error, {
//         message: "Bad Request"
//     }
//     ));
// }
//     res.end();
//     return
// }
// http.createServer((req, res) => {
//    if (req.url === "/submit" && req.method === "POST") {

//       let submitData = "";
//       req.on('data', (chunk) => {
//           data += chunk;
//       });

//       req.on('end', () => {
  
//         res.statusCode = 201;
//         res.write(JSON.stringify(
//             code = 201,
//             submitData = JSON.parse(data)
//           ));
//         res.end();
//       });

//      return;
//       res.statusCode = 200;
//       res.end();
//     }

//    }).listen(3000, () => {
// 	console.log('Server listening on port 3000');
//    });


    
   
   
