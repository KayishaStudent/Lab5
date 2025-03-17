const express = require('express');

const app = express()
app.use(express.json())
const books = [];

const PORT= process.env.PORT||3000;

app.listen(PORT, () => {
    console.log(`Server listening on Port:${PORT}`)
})

app.get("/whoami", (request, response) => {
   const studentNumber = {
      "StudentNumber": "2562592"
   };
   
   response.send(studentNumber);
});

app.get("/books", (request, response) => {
      
   response.send(books);
});

id = 500;
app.get("/books/:id", (request, response) => {
   try {
      const bookId = request.params.id;
      response.status(200).send(books[books.id]); 
      
   }
   catch {
      const error={  "error": "Missing required book details"}
      response.status(404).send(error);
    }
   
});

app.post("/books", (request, response) => {
   const body = request.body;
   books.push(body);
   response.status(200).send(books);

})



