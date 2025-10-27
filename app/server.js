const express = require('express');
const app = express();
const port = process.env.PORT || 2000 ;

app.get('/', (req, res) => res.send('Hello from Jenkins DevOps Build Demo!'));
app.listen(port, () => console.log(`App running on port ${port}`));
