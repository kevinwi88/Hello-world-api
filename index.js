 /* 
 * An Hello World Restful Json API built with NodeJS alone.
 * When a POST request is send to this APi, it responds with an "Hello World!" message.
 */

const http= require('http');

const server = http.createServe((req,res) => {
   const method = req.method.toUpperCase();
   res.setHeader('Content-Type','application/json');
   res.writeHeader(200, 'request is good');
   if (method === 'POST') {
      const response = JSON.stringify({message:'You Need to send a POST request to get the appropriate response' });
      res.end(response);
   }
});

server.listen(8000, () => {
  console.log('App Started on port 8000);
});
