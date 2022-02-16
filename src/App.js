import logo from './logo.svg';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import React ,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {add,del,rem} from "./action/action"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function App() {
  const [state, setstate] = useState("");
  const dis=useDispatch();
  const list=useSelector((state)=>
    state.additem.arr
  )
  return (
    <div className="main">
      <div className="con">
        <h1>TODO APP USING <span>REACT REDUX</span></h1>
        <div className="incon">
          <div className="inp">
            <input type="text" placeholder='write something' value={state} onChange={(e)=>setstate(e.target.value)} />
            <div className="oicon" onClick={()=>dis(add(state),setstate(""))}><AddIcon className='icon'/></div>
          </div>
          {list.map((e)=>{
            return (
              <div className="inp" key={e.id}>
                  <div className="para"><p>{e.data}</p></div>
                  <div className="oicon" onClick={()=>dis(del(e.id))} ><DeleteIcon className='icon'/></div>
           </div>
            )
              
            
          })}
          <div className="btn" >
            <button onClick={()=>dis(rem())}><DeleteForeverIcon/>Remove all</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
