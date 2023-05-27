import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import router from "./routes/blogs.mjs";
import bodyParser from "body-parser";
const PORT = process.env.PORT || 5050;
const app = express();
// const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use("/blogs", router);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});