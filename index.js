if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

/* =================================================================================================== */
/*                              Initialising Express & other dependencies                              */
/* =================================================================================================== */

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
// const gzip = require('compression');
/* =================================================================================================== */
/*                          Data server to handle data transfer & processing                           */
/* =================================================================================================== */

const app = express();

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: false }))
// app.use(gzip()); // for GZIP COMPRESSION

const PORT = process.env.PORT;
const IP = process.env.IP;
app.listen(PORT, IP, () => {
    console.log(`Server listening on ${IP}:${PORT}`);
});


/* =================================================================================================== */
/*                                          Data server routes                                         */
/* =================================================================================================== */

const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);