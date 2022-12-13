import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        server response
      <head/>
    <body style="border:1px solid blue">
        <h1>home page um</h1>        
        <h2>lockdownbawnsha</h2>
        <div>
            <span>
                hair um ansi nawjdn kasjdnk ajdsnfk jabdflkjb alskjdbf lkasdjb laksjdbn lkajsnd
            </span>
        </div>
    </body>   
  `);
});

app.get("/api", (req, res) => {
  res.send({
    success: true,
    data: `Hello ${req.originalUrl}`,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
