import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    username: "John",
    email: "john@example.com",
    password: "123",
  },
  {
    id: 2,
    username: "Done",
    email: "done@example.com",
    password: "123",
  },
];

const posts = [];

app.get("/", (req, res) => {
  res.send({
    data: users,
  });
});

app.post("/signup", (request, response) => {
  const { username, email, password, age, gender } = request.body;
  const user = {
    id: users.length + 1,
    username,
    email,
    password,
    age,
    gender,
  };
  users.push(user);
  response.send({
    success: true,
    msg: "Your account has been created"
  })

});

app.post("/posts", (req, res) => {
  const { title, description} = req.body;
  const post = {
    id: posts.length + 1,
    title,
    description,
  };
  posts.push(post);
  res.send({
    success: true,
    msg: "Post has been uploaded successfully"
  })
});

app.get("/posts", (req, res) => {
  posts.map((post) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        server response
      <head/>
      <body>
          <h1>${post.title}</h1> 
          <div>
              <span>
                  ${post.description}
              </span>
          </div>
      </body>   
    `)
  })
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  users.map((user) => {
    if (user.username === username && user.password === password) {
      res.send({
        success: true,
        msg: "Ta amjjilttai newterlee",
      });
    }
  });
  res.send({
    success: false,
    msg: "Newtreh ner, nuuts ug buruu",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
