import React, { useState } from "react";

const Contact = () => {
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);
    setUserRegistration({ name: "", mobile: "", email: "", password: "" });
  };

  return (
    <div className="container my-3">
      <div>
        <h3>Registration Info</h3>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter name"
          value={userRegistration.name}
          onChange={handleInput}
          name="name"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile</label>
        <input
          type="mobile"
          className="form-control"
          placeholder="Enter mobile"
          value={userRegistration.mobile}
          onChange={handleInput}
          name="mobile"
          id="mobile"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={userRegistration.email}
          onChange={handleInput}
          name="email"
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          value={userRegistration.password}
          onChange={handleInput}
          name="password"
          id="password"
        />
      </div>
      <div className=" my-3">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Registration
        </button>
      </div>

      <div>
        <table class="table">
          <tbody>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </tbody>
        </table>
        {records.map((curElem) => {
          return (
            <div className="showDataStyle">
              <table class="table">
                <tbody key={curElem.id}>
                  <tr>
                    <th scope="row"></th>
                    <td>{curElem.name}</td>
                    <td>{curElem.email}</td>
                    <td>{curElem.mobile}</td>
                    <td>{curElem.password}</td>
                    <td>
                      <button type="button" class="btn btn-success">
                        EDIT
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger">
                        DELETE
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
