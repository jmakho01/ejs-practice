// import necessary modules 
import express from 'express';
// Initialize express app
const app = express();
// Define the port
const PORT = 3005;

// Set EJS as templating engine
app.set('view engine', 'ejs');
// Serve static files from the 'public' directory
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    const person = { name: 'Donald Duck', occupation: 'plumber', favColor: 'blue' };
    
    res.render('home', { person });
});

// additional routes can be added here
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));


//New route passes an array of friends
app.get('/friends', (req, res) => {
  const friends = [ 'Micky', 'Goofy', 'Minnie', 'Daisy'];
  res.render('friends', {friends});
});

//New route passes an array of movies
app.get('/movies', (req, res) => {
  const movies = [ 'Up', 'WallE', 'Toy Story', 'Avatar'];
  res.render('movies', {movies});
});