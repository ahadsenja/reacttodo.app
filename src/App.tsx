import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Todo App</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="todo">Add Todo</label>
          <input className="form-control" type="text" id="todo" />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <hr />
      <h2>List Todo</h2>

      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn-danger">Delete</button>
        </li>

        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
