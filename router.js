var express = require('express')
var router = express.Router()

var foods = [
    { "id": 1, "name": "Donuts" },
    { "id": 2, "name": "Pizza" },
    { "id": 3, "name": "Tacos" }
  ];
   
  var books = [
    { "title": "Hitchhiker's Guide to the Galaxy" },
    { "title": "The Fellowship of the Ring" },
    { "title": "Moby Dick" }
  ];
   
  var movies = [
    { "title": "Ghostbusters" },
    { "title": "Star Wars" },
    { "title": "Batman Begins" }
  ];
   
  router.get('/books',function(req,res){
      res.send(books);
  })

  router.get('/movies', function(req,res){
      res.send(movies);
  })
 
  router.get('/foods', function(req,res){
    res.send(foods);
})

// PUT endpoint for editing food
router.put('/food/:id',function(req,res){
    let id = req.params.id;
    let f = foods.find( x=> x.id == id);
    f.name = req.body.name;
    res.send(f);
})


// DELETE endpoint for deleting food

router.delete('/foods/:id',function(req,res)
{
    let id = req.body.id;
    
    let f = foods.find(x => x.id == id);
 
    foods.filter(x => x.id != id);
    
    res.send(f);
})

// POST endpoint for creating a new food
router.post('/foods', function (req, res) {
    // calculate the next ID
    let id = 1;
    if (foods.length > 0) {
        let maximum = Math.max.apply(Math, foods.map(function (f) { return f.id; }));
        id = maximum + 1;
    }
    let new_food = {"id": id, "name": req.body.name};
    foods.push(new_food);
    res.send(new_food);
});

  // the "index" route, which serves the Angular app
  /*app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname,'/dist/allment/index.html'))
  });*/

  
 

  router.use(function (req, res, next) 
  {
      console.log("Error");
      res.status(404).send("Sorry can't find that!")
  })

  module.exports = router
/*app.use(function(req,res,next){
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})*/