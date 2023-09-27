
function useState(){

const[num,setNum] = useState(0);

  function inc(n){
    setNum(num+n)
  }

  
  function dec(){
    setNum(num-1000)
  }

  return (
    <div className="App">
 

    <p>{num}</p>
    <button onClick={()=>{inc(100)}}>Inc</button>
    <button onClick={dec}>dec</button>
 
    </div>
  );
}

export default useState;