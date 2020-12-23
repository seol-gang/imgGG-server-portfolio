require('dotenv').config();

const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const usersRouter = require("./routes/users");
const imagesRouter = require("./routes/images");

const app = express();

app.use(cors(
  {
    origin: [`http://localhost:${process.env.CLIENT_PORT}`],
    methods: ['GET', 'POST'],
    credentials: true
  }
));

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/user", usersRouter);
app.use("/image", imagesRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on Port ${process.env.SERVER_PORT}`);
})