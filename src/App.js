import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Accordion from 'react-bootstrap/Accordion'
import SignUp from './Component/SignUp';
import { Outlet } from 'react-router-dom';

function App() {
  const [li, setLi] = useState([]);
  const [txt, setTxt] = useState("");
  const adding = (e) => {
    setTxt(e.target.value)
  }

const handleKeys = (key) => {
  if(key==='Enter')
    submitHandler();
  else if(key==='Escape')
    setTxt("");
  // console.log(key);
  }

  const submitHandler = () => {
    console.log("clicked");
    if(txt!=""){
        setLi([...li,txt]);
        setTxt("");
    }
  }
  const removeTask = (index) =>{
    setLi(()=>
      li.filter((task,id)=>{
        return id!=index;
      })
    );
  }

  const editTask = (task) =>{
    setTxt(task);
  }
  return (
    <div className="App">
      <div class="inputBox">
      <i class="bi bi-clipboard-data-fill"></i><br></br>
        <input id="text" onKeyDown={(e)=>handleKeys(e.code)} value={txt} onChange={adding}></input>
        <br />
        <button id="btnSubmit" onClick={submitHandler}><i class="bi bi-plus-circle-fill"></i> Add Task</button>
        <button id="btnResetAll" onClick={()=>setLi([])}><i class="bi bi-trash-fill"></i> Reset All Tasks</button>
      </div>
      <div class="displayBox">
        {li.map((task,index)=>{
          return<div class="task" id={index}>
           
            <button id="btnRemoveTask" onClick={(e) => removeTask(index)}><i class="bi bi-file-check-fill"></i></button>
            <button id="btnEditTask" onClick={(e)=>{removeTask(index);editTask(task);}}><i class="bi bi-pencil-fill"></i></button>    
            <br></br>
            {task}
          </div>;
        })}
      </div>
      <div><Outlet/></div>
      {/* <div class="footer">
      <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How To Use 
                  </Accordion.Header>
                <Accordion.Body>
                  <ol align="left">
                    <li>Type your tasks in input Box and add it to the list.</li>
                    <li>Remove tasks by checking them out individually with chek button against it.</li>
                    <li>Edit a task individually with pencil button.</li>
                    <li>Reset the whole list with reset button.</li>
                  </ol>
                  
                </Accordion.Body>
              </Accordion.Item>
      </Accordion>
      </div> */}
    </div>
  );
}

export default App;
