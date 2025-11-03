<<<<<<< HEAD
// app.js
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

// Data storage
let items = [
  { name: "Buy Food", done: false },
  { name: "Cook Food", done: false },
  { name: "Eat Food", done: false },
];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home page
app.get("/", function (req, res) {
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

// Add new task
app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const list = req.body.list;
  const newItem = { name: itemName, done: false };

  if (list === "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    items.push(newItem);
    res.redirect("/");
  }
});

// Mark task as done/undone
app.post("/toggle", function (req, res) {
  const list = req.body.list;
  const itemName = req.body.itemName;
  const targetList = list === "Work" ? workItems : items;
  const task = targetList.find((i) => i.name === itemName);
  if (task) task.done = !task.done;
  res.redirect(list === "Work" ? "/work" : "/");
});

// Delete a task
app.post("/delete", function (req, res) {
  const list = req.body.list;
  const itemName = req.body.itemName;
  if (list === "Work") {
    workItems = workItems.filter((i) => i.name !== itemName);
    res.redirect("/work");
  } else {
    items = items.filter((i) => i.name !== itemName);
    res.redirect("/");
  }
});

// Work page
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newListItems: workItems });
});

// About page
app.get("/about", function (req, res) {
  res.render("about");
});

// Server start
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
=======
// app.js
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

// Data storage
let items = [
  { name: "Buy Food", done: false },
  { name: "Cook Food", done: false },
  { name: "Eat Food", done: false },
];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home page
app.get("/", function (req, res) {
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

// Add new task
app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const list = req.body.list;
  const newItem = { name: itemName, done: false };

  if (list === "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    items.push(newItem);
    res.redirect("/");
  }
});

// Mark task as done/undone
app.post("/toggle", function (req, res) {
  const list = req.body.list;
  const itemName = req.body.itemName;
  const targetList = list === "Work" ? workItems : items;
  const task = targetList.find((i) => i.name === itemName);
  if (task) task.done = !task.done;
  res.redirect(list === "Work" ? "/work" : "/");
});

// Delete a task
app.post("/delete", function (req, res) {
  const list = req.body.list;
  const itemName = req.body.itemName;
  if (list === "Work") {
    workItems = workItems.filter((i) => i.name !== itemName);
    res.redirect("/work");
  } else {
    items = items.filter((i) => i.name !== itemName);
    res.redirect("/");
  }
});

// Work page
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newListItems: workItems });
});

// About page
app.get("/about", function (req, res) {
  res.render("about");
});

// Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});

>>>>>>> 6dfa7ae (Use Render dynamic port)
