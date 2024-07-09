const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 2005;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); // Serve index.html for the root route
});


app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}/ `);
})

