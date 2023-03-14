import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux-toolkit/Number";
import { change } from "./redux-toolkit/TextReduser";
const App = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.number);
  const { text } = useSelector((store) => store.textName);
  console.log(text);
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-5">
          <h1>Counter:{value}</h1>

          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="btn btn-success"
          >
            plus
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="btn btn-danger"
          >
            minus
          </button>
          <button
            onClick={() => {
              dispatch(reset());
            }}
            className="btn btn-warning"
          >
            reset
          </button>
        </div>
        <div className="col-5">
          <h1 className="text-warning">Translate</h1>
          <h2>{text}</h2>
          <button
            className="btn btn-success text"
            onClick={() => {
              dispatch(
                change(
                  <h1 className="text-primary">My name is Khulkar. Age:31</h1>
                )
              );
            }}
          >
            Translate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
