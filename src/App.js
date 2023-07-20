import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addTodo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { text: toDo, status: false }]);
      setToDo(''); // Clear the input field after adding a ToDo
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...toDos];
    updatedTodos[index].status = !updatedTodos[index].status;
    setToDos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...toDos];
    updatedTodos.splice(index, 1);
    setToDos(updatedTodos);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const options = {  month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {getCurrentDate()} 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value, index) => (
          <div className="todo" key={index}>
            <div className="left">
              <input
                onChange={() => handleCheckboxChange(index)}
                checked={value.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{value.text}</p>
            </div>
            <div className="right" onClick={() => removeTodo(index)}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
