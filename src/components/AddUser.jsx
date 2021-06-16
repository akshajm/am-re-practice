import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";

const AddUser = ({ users, setUsers }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handle_submit = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:8000/create", form)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err.message));
    // setUsers])
    setUsers([...users, form]);
    // window.location = "/";
  };
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };
  return (
    <form style={style}>
      <TextField
        id="id"
        placeholder="ID"
        value={form.id || ""}
        onChange={(e) => setForm({ ...form, id: e.target.value })}
      />
      <TextField
        id="name"
        placeholder="Name"
        value={form.name || ""}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <TextField
        id="email"
        placeholder="Email"
        value={form.email || ""}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <TextField
        id="phone"
        placeholder="phone"
        value={form.phone || ""}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <Button variant="outlined" color="primary" onClick={handle_submit}>
        Submit
      </Button>
    </form>
  );
};

export default AddUser;
