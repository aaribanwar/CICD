import express from "express";
import { sum } from "./sum.mjs";
const app = express();
const PORT = 9000;




app.use(express.json());

app.get("/", async( req, res) => {
    console.log("base URL hit on frontend");
    res.send("landed on base URL");
});


app.post("/sum", async(req,res) => {
    console.log("Sending sum json");
    const {a,b} = req.body;
    const result = sum(Number(a),Number(b));
    res.json({sum: result});
});



app.listen( PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
});