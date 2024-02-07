import { Request, Response } from "express";
const express = require("express");
const cors = require("cors");

const app = express();

// Menggunakan middleware CORS
app.use(
    cors({
        origin: "http://www.situsa.com", // Atur domain yang diizinkan di sini
    })
);

// Endpoint yang mengizinkan akses
app.get("/data", (req: Request, res: Response) => {
    res.json({ message: "Data diakses dengan sukses!" });
});

app.listen(3000, () => {
    console.log("Server berjalan pada port 3000");
});
