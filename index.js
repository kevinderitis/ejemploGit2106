const express = require('express')
const app = express();


app.get('/', (req, res) => res.send('Esta es la ruta raiz en el cambio 3') )

app.listen(8080, () => console.log('server running'))