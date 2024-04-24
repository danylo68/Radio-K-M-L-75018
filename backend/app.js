const express = require("express");
const app = express();
// const mongoose = require('mongoose');
const cors = require( 'cors' );
const helmet = require( 'helmet' );
const bodyParser = require( 'body-parser' );
app.disable('x-powered-by')
require( 'dotenv' ).config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const trackRoutes = require( './routes/track.routes.js' );
const userRoutes = require( './routes/user.routes.js' );



// async function connectToDatabase() {
//     try {
//         await mongoose.connect(process.env.MONGOLAB, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connexion à MongoDB réussie !');
//     } catch (error) {
//         console.error('Erreur de connexion à MongoDB :', error);
//     }
// }
// connectToDatabase();

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(helmet());
app.use(cors());
// app.use( '/api/auth', userRoute );
app.use( '/api/tracks', trackRoutes );
app.use( '/api/auth', userRoutes );
app.use( express.json() );


module.exports = app;

