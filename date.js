<<<<<<< HEAD
// date.js

exports.getDate = function () {
    const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const today = new Date();

 const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);
};
=======
// date.js

exports.getDate = function () {
    const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const today = new Date();

 const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);
};
>>>>>>> 26403c7 (Fix: use dynamic port and start script)
