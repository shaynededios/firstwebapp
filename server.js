const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Node.js App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 { color: #333; }
        p { font-size: 18px; line-height: 1.6; }
        .quote {
          font-style: italic;
          color: #555;
          border-left: 4px solid #4CAF50;
          padding-left: 15px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to My profile</h1>
        <p><strong>Full Name:</strong> Shayne De Dios</p>
        <p><strong>Class Section:</strong> BSIT- BA 4102</p>
        <div class="quote">
          <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});