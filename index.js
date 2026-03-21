const express = require('express');

const app = express();
app.use(express.json());



// Basic health
app.get('/', (req, res) => {
    const sum = addnumber(8, 29, 98, 38);
    res.send({ ok: true, sum: `Sum is ${sum}` });
}
);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));



