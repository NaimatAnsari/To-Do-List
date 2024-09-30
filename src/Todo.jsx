import React, { useState } from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([])

    // Add Item Button

    const addItem = () => {
        if (!inputData) {
            alert("Enter Your Items")
        } else {
            const myNewInputData = {
                id : new Date().getTime().toString(),
                name : inputData,
            } 
            setItems([...items, myNewInputData])
            setInputData("")
        }
    }

    // Delete Item

    const deleteItem = (index) => {
        const updatedItems = items.filter((currElem) => {
            return currElem.id !== index
        })
        setItems(updatedItems)
        
    }

    // Remove All

    const removeAll = () => {
        setItems([]) 
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
                    items.map((currElement) => {
                        return(
                            <div className="eachitem" key={currElement.id}>
                            <p>{currElement.name}</p>
                            <div className="todo-btn">
                            <i className='bx bx-edit'></i>
                            <i className='bx bx-trash' onClick={() => deleteItem(currElement.id)
                            }></i>
                            </div>
                        </div>
                        )
                    }
                    )}
                   
                
                {/* Show our items End*/}
            <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}><span>CHECK LIST</span></button>
           </div>
        </div>
    </div>
    </>
  )
}

export default Todo