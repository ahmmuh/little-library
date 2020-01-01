const Http = new EasyHTTP();

Http.get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));

//create user data
const data = {
  name: "Ahmed Mukhtar",
  username: "quuquule",
  email: "mukhtar1100@hotmail.com"
};
// post user
Http.post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//update user
Http.put("https://jsonplaceholder.typicode.com/users/6", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// delete user
Http.delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .then(err => console.log(err));
