// import React from "react";

// const Test = () => {
//   const animals = ["dog", "cat", "mouse", "cow", "rat"];

//   const newAnimals = animals.map((animal) => {
//     animal.length === 3;
//   });

//   animals.length === 8
//     ? console.log("this is true")
//     : console.log("this is not true");

//   console.log(newAnimals);

//   return <div></div>;
// };

// export default Test;

// const getUser = async (storedUser) => {
//   try {
//     const res = await fetch(`http://localhost:5000/users`);
//     const data = await res.json();
//     console.log(data);

//     const user = data.find((user) => user.email === storedUser);
//     console.log(user);

//     localStorage.setItem("id", user.id);
//     localStorage.setItem("firstName", user.firstName);
//   } catch (error) {
//     console.error(error);
//   }
// };

// useEffect(() => {
//   const param = localStorage.getItem("email");
//   getUser(param);
//   console.log("hi from useEffect");
// });

// useEffect(() => {
//   window.location.reload();
// });
