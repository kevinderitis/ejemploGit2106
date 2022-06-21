const express = require('express')
const app = express();


app.get('/', (req, res) => res.send('Esta es la ruta raiz que modifique ') )

app.listen(8080, () => console.log('server running'))