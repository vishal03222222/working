import React, { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([
    { name: "sai", age: "30", birthdate: "11/10/1989" },
    { name: "jeswanth", age: "32", birthdate: "10/1/1989" },
    { name: "shekar", age: "29", birthdate: "10/14/1990" },
    { name: "vishal", age: "25", birthdate: "11/29/1993" },
    { name: "sam", age: "27", birthdate: "3/12/1991" },
    { name: "kumar", age: "24", birthdate: "10/31/1995" },
    { name: "nethaji", age: "23", birthdate: "26/08/2001" },
  ]);

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="card card-body">
            <label htmlFor="search-input">Search name</label>
            <input
              type="text"
              className="form-control"
              id="search-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>

      <table className="table table-striped mt-3">
        <thead className="bg-info text-white">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
