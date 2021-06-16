import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import AddUser from "./components/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <Router>
      <Route
        path="/"
        exact
        render={(props) => <Homepage {...props} users={users} />}
      />
      <Route
        path="/create"
        exact
        render={(props) => (
          <AddUser {...props} users={users} setUsers={setUsers} />
        )}
      />
    </Router>
  );
}

export default App;
