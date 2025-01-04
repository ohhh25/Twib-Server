import express from "express";
import musicAPI from "./API/TwibMusic.mjs";

const hostname = "127.0.0.1";
const port = 8080;

const homepage = `http://${hostname}:${port}`;
const gitHub = "https://github.com/ohhh25/Twib-Server";
const musicGitHub = "https://github.com/ohhh25/Twib-Music";

var app = express();
app.use("/Twib-Music", express.static("public"));
app.use("/api/Twib-Music", musicAPI);
app.set("json spaces", 2);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello and Welcome to Twib Server!</h1>" +
    `This server's <a href="${gitHub}">source code</a> can be found on GitHub` + 
    "<p>Click <a href='/Twib-Music'>here</a> to visit Twib Music</p>"
  );
});

app.get("/Twib-Music", (req, res) => {
  res.status(200).send("<h1>Welcome to Twib Music!</h1>Check out the GitHub repo " +
    `<a href="${musicGitHub}">here</a>`);
});

app.get("*", (req, res) => {
  res.status(404).send('Page Not Found!\n');
});

app.listen(port, hostname, () => {
  console.log(`Server running at ${homepage}/\n`);
  console.log(`${homepage}/api/Twib-Music/`);
});
