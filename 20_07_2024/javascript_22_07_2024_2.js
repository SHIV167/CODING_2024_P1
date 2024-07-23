// //

const user1 = {
  names: "shiv",
  age: 12,
  address: { city: "patna", State: "Bihar" },
};

//const user2 = JSON.parse(JSON.stringify(user1));
const user2 = structuredClone(user1);

// const user2 = {
//   ...user1,
//   names: "ghghghg",
//   address: { ...user1.address, city: "hhhhh" },
// };

// user2 = {
//   ...user2,
//   names: "ghghghg",
//   address: { ...user2.address, city: "hhhhh" },
// };
user2.names = "ddddddd";
user2.address.city = "fhhfhfhfh";

console.log(user2);
console.log(user1);
console.log({ name: "Shiv" } === { name: "Shiv" });

////

// function delay(i) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve(i);
//     }, i * 1000);
//   });
// }

// async function loop() {
//   console.log("started");
//   for (let i = 1; i < 10; i++) {
//     //setTimeout(() => {}, i * 1000);
//     const result = await delay(i);
//     console.log(result);
//   }

//   console.log("Ended");
// }

// loop();

//

const users = [
  "jhashiv5@gmail.com",
  "jhashiv5@gmail.com",
  "jhashiv5@gmail.com",
  "jhashiv5@gmail.com",
  "jhashiv5@gmail.com",
  "jhashiv5@gmail.com",
];

function delay(user) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(`Email sent to ${user}`);
    }, 1000);
  });
}

async function loop() {
  for (user of users) {
    const result = await delay(user);
    console.log(result);
  }

  console.log("email sent to all users...");
}

loop();

////REACT FORM

// import React, { useState } from "react";

// function Home() {
//   const [formData, setFormData] = useState({
//     names: "",
//     email: "",
//     details: "",
//   });
//   const SubmitEvent = () => {
//     //e.preventDefault;
//     console.log(formData);
//   };
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   return (
//     <form action="">
//       <input type="text" onChange={handleChange} name="names" />
//       <input type="text" name="email" />
//       <input type="text" name="details" />
//       <button onClick={SubmitEvent} type="submit">
//         SUBMIT
//       </button>
//     </form>
//   );
// }

// export default Home;
