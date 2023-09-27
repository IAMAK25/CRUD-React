import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import Use from "./components/useState";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Ak from "./components/list";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState([])

  const addData = () => {
    setData([...data, { name, email }])
    setName("")
    setEmail("")
  }

  function remove(i){
    let arr = data
    arr.splice(i,1)
    setData([...arr])
  }

  return (
    <div className="App">
      <Header />
      {/* <Use/> */}
      <div className="home">

        <TextField
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />

        <span></span>

        <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
        <span></span>
        <Button onClick={addData} variant="contained" style={{ backgroundColor: "#5D9B8C" }}>
          Add
        </Button>
      </div>


      <div className="lis">

        <div className="head">


          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>

        </div>


        {
          data.map((element, index) => {
             return(
              <div key={index} className="list">

              <h3>{element.name}</h3>
              <h3>{element.email}</h3>
              <Button onClick={()=>remove(index)} variant="contained" color='error'>
                    <DeleteIcon/>
                  </Button>
          
            </div>
             )
          })
        }


      </div>
    </div>
  );
}

export default App;
