const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>✈️ SriLankan Airlines CI/CD Demo</h1>
    <p>This application was built to demonstrate GitHub Actions and CI/CD.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});