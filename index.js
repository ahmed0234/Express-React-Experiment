import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(express.static("dist"));
app.use(express.json());
app.use(cookieParser());

const items = [
  {
    name: "Laptop",
    price: "$1000",
    description: "A high-performance laptop for work and play.",
  },
  {
    name: "Smartphone",
    price: "$500",
    description: "A feature-packed smartphone for everyday use.",
  },
  {
    name: "Tablet",
    price: "$300",
    description: "A versatile tablet for multitasking and entertainment.",
  },
];

app.get("/api/items", (req, res) => {
  res.status(200).json(items);
});

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello from the server!" });
});

app.get("/api/auth", (req, res) => {
  res.cookie("junky", "tralalalai", {
    httpOnly: true, // Prevent access to the cookie via JavaScript
    secure: true, // Required for HTTPS (use false if testing locally on HTTP)
    sameSite: "None", // Required for cross-origin cookies
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  });
  res.status(200).json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
