import React, { useState, useEffect } from "react";


// Get Local Storage Data
const getLocalData = () => {
  const lists = localStorage.getItem("MyTodoList");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItems, setIsEditItems] = useState(null); // null means no item is being edited

  // Add or Edit Item Button
  const addItem = () => {
    if (!inputData) {
      alert("Enter Your Items");
    } else if (isEditItems !== null) {
      // Editing existing item
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItems) {
            return { ...curElem, name: inputData };
          }
          return curElem;
        })
      );
      setInputData("");
      setIsEditItems(null); // Reset after editing
    } else {
      // Adding new item
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  // Edit Item
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => curElem.id === index);
    setInputData(item_todo_edited.name);
    setIsEditItems(index);
  };

  // Delete Item
  const deleteItems = (index) => {
    const updatedItems = items.filter((curElem) => curElem.id !== index);
    setItems(updatedItems);
  };

  // Remove All
  const removeAll = () => {
    setItems([]);
  };

  // Adding Local Storage
  useEffect(() => {
    localStorage.setItem("MyTodoList", JSON.stringify(items));
  }, [items]);

  return (
    <>
    <nav class="navbar">
    <h1>Naimat Ali</h1>
    <div class="social-icons">
      <a href="https://www.facebook.com/naimat.sheikh.5/" target="_blank"><i className="bx bxl-facebook"></i></a>
            <a href="https://github.com/naimatAnsari" target="_blank"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/naimat-ansari-771166268/" target="_blank"><i className="bx bxl-linkedin"></i></a>
            <a href="https://wa.me/923128821855" target="_blank"><i className='bx bxl-whatsapp'></i></a>
            <a href="mailto:naimatansari31@gmail.com" target="_blank"> <i className='bx bx-mail-send' ></i></a>
           
    </div>
  </nav>
      <div className="main-div">
        <div className="child-div">
            
          <figure>
            <img src="/assets/images/todo-list.png" alt="Todo-Logo" />
            <figcaption>Add Your List Here 📑</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items"
              className="form-control"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {/* Button changes dynamically depending on whether it's an edit or add operation */}
            {isEditItems !== null ? (
              <i className="bx bx-edit add-btn" style={{ color: "#40cc19" }} onClick={addItem}></i> // Edit icon
            ) : (
              <i className="bx bx-plus-circle add-btn" onClick={addItem}></i> // Add icon
            )}
          </div>
          <div className="showItems">
            {/* Show our items start */}
            {items.map((curElem) => {
              return (
                <div className="eachitem" key={curElem.id}>
                  <p>{curElem.name}</p>
                  <div className="todo-btn">
                    <i
                      className="bx bx-edit"
                      onClick={() => editItem(curElem.id)}
                    ></i>
                    <i
                      className="bx bx-trash"
                      onClick={() => deleteItems(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
            {/* Show our items End */}
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
