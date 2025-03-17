const express = require('express');

const app = express()
app.use(express.json())
let books = [];

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


app.get("/books/:id", (request, response) => {
   console.log(`Request to find book with ${request.params.id}`)
   books.forEach(b => {
      if (b.id === request.params.id) {
         console.log("FOUBND");
         console.log(`${b.title}`);
         response.send(b);
      }
   })
      
 
});


app.post("/books", (request, response) => {
   const body = request.body;
   if (!request.body.id) {
      response.status(400).send("400 Bad request");
   }
   else if (!request.body.title) {
      response.status(400).send("400 Bad request");
   }
   else if (!request.body.details) {
      response.status(400).send("400 Bad request");
   }
   else {
      let book = {
         id: request.body.id,
         title: request.body.title,
         details: request.body.details,
      };
      books.push(book);
      console.log(`Added ${book.id}`)
      response.status(200).send(books);
   }

});


app.post("/books/:id/details", (request, response) => {
   const body = request.body;
      let details = {
         author: body.author,
         genre: body.genre,
         year: body.year

   };
   books;
   console.log(`Added ${book.id}`)
   response.status(200).send(books);
   books.forEach(b => {
      if (b.id === request.params.id) {
         b.details.author = details.author;
         b.details.genre = details.genre;
         b.details.year = details.year;
      }
      response.send(books);
   })

})

app.put("/books/:id", (request, response) => {

   const body = request.body;
   books.forEach(b => {
      if (b.id === request.params.id) {
         b.title = body.title;
         b.details = body.details;
      }
      response.send(books);
   })
      
});

app.delete("/books/:id", (request, response) => {

    books.forEach(b => {
      if (b.id === request.params.id) {
         var idx = books.indexOf(b);
         if (idx > -1) {
            books.splice(idx, 1);
         }
      }
      response.send(books);
   })
});








