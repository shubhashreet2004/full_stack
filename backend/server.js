import express from 'express';
const app = express();
connectDB()
app.use(express.urlencoded())

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// POST endpoint example
app.post('/post', async(req, res) => {
    
   
    try {
        const newUser=new User(req.body)  
        await newUser.save()
        res.json(newUser)
     } catch (error) {
          res.status(400).json(error) }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});