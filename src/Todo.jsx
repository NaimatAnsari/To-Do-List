import React, { useState , useEffect } from 'react'


// Get Local Storage Data
const getLocalData = () => {
    const lists = localStorage.getItem("MyTodoList")
    if (lists) {
        return JSON.parse(lists)
    } else {
        return []
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())
    const [isEditItems, setIsEditItems] = useState("")

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

    // Edit Item

    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index
        } )
        setInputData(item_todo_edited.name)
        setIsEditItems(index)
    }



    // Delete Item

    const deleteItems = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index
        })
        setItems(updatedItems)
        
    }

    // Remove All

    const removeAll = () => {
        setItems([]) 
    }

    // Adding Local Storage
    
    useEffect(() => {
        localStorage.setItem( "MyTodoList", JSON.stringify(items))
    },[items])
    

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
                    items.map((curElem) => {
                        return(
                            <div className="eachitem" key={curElem.id}>
                            <p>{curElem.name}</p>
                            <div className="todo-btn">
                            <i className='bx bx-edit'  onClick={() => editItem(curElem.id)
                            }></i>
                            <i className='bx bx-trash' onClick={() => deleteItems(curElem.id)
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