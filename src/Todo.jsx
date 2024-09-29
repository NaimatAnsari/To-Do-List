import React, { useState } from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([])

    // Add Item Button

    const addItem = () => {
        if (!inputData) {
            alert("Enter Your Items")
        } else {
            setItems([...items, inputData])
        }
    }


  return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="../public/todo-list.png" alt="Togo-Logo"/>
                <figcaption>Add Your List Here 📑</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder='✍ Add Items' 
                className='form-control'
                value={inputData}
                onChange={(e) => setInputData(e.target.value) }
                />
                <i className='bx bx-plus-circle add-btn' onClick={addItem}></i>
                
            </div>
            <div className="showItems">
                {/* Show our items start*/}
                {
                    items.map((currElement , i) => {
                        return(
                            <div className="eachitem" key={i}>
                            <h3>{currElement}</h3>
                            <div className="todo-btn">
                            <i className='bx bx-edit'></i>
                            <i className='bx bx-trash'></i>
                            </div>
                        </div>
                        )
                    }
                    )}
                   
                
                {/* Show our items End*/}
            <button className='btn effect04' data-sm-link-text='Remove All'><span>CHECK LIST</span></button>
           </div>
        </div>
    </div>
    </>
  )
}

export default Todo