import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  // const [first, setfirst] = useState("");

  const handleInputs = (e) => {
    console.log(e);
    let name = e.target.name; // here, name as a all fields attributes name like firstname, lastname etc.
    let value = e.target.value; // value as all attributes name value like  fist name value , lastname value etc.

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <form>
        <label htmlFor="firstname">First name: </label>
        <input
          type="text"
          name="firstname"
          required
          value={user.firstname}
          onChange={(e) => handleInputs(e)}
        />
        <br />
        <label htmlFor="lastname">Last name: </label>
        <input
          type="text"
          name="lastname"
          required
          value={user.lastname}
          onChange={handleInputs}
        />
        <br />
        <label htmlFor="email">email: </label>
        <input
          type="email"
          name="email"
          required
          value={user.email}
          onChange={handleInputs}
        />
        <br />
        <label htmlFor="password">password: </label>
        <input
          type="password"
          name="password"
          required
          value={user.password}
          onChange={handleInputs}
        />
        <br />
        <input type="submit" value="Login!" />
      </form>
    </>
  );
};
export default Form;
