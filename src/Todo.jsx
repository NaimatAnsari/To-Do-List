import React from 'react'

const Todo = () => {
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
                className='form-control'/>
                <i className='bx bx-plus-circle add-btn'></i>
                
            </div>
            <div className="showItems">
                {/* Show our items start*/}
                
                    <div className="eachitem">
                        <h3>apple</h3>
                        <div className="todo-btn">
                        <i class='bx bx-edit'></i>
                        <i class='bx bx-trash'></i>
                        </div>
                    </div>
                
                {/* Show our items End*/}
            <button className='btn effect04' data-sm-link-text='Remove All'><span>CHECK LIST</span></button>
           </div>
        </div>
    </div>
    </>
  )
}

export default Todo