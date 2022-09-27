const express = require("express");
const resultRouter = require("./routes/result.routes");
const PORT = process.env.PORT || 8080;
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", resultRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
