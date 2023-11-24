import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  const [Password, setPassword] = useState('')
  const [number, setnumber] = useState(false)
  const [Character, setCharacter] = useState(false)
  const [lenght, setlenght] = useState(8)
  const generate= useCallback(()=>{
    let pass="";
    let str="zxcvbnmmasdfghjjkklqwertyuiop";
    if(number){
      str += "1234567890";
    }
    if(Character){
      str +="!@#$%&*(){}"
    }
    for( let i=1;i<=lenght;i++){
           let rdm= Math.floor( Math.random()*str.length+1);
           pass += str.charAt(rdm);   
    }
  setPassword(pass);
  },[Character,number,lenght,setPassword]);
  useEffect(()=>{
    generate();
  },[Character,number,lenght ,generate])

  const ref =useRef(null);

  const copy= ()=>{
    
    ref.current?.select();
    window.navigator.clipboard.writeText(Password);
   
   

  }
  return (
    <>
      <h2 className='text-xl font-bold'> Password Generator</h2>
      <div id="box" className='w-[1000px] bg-slate-400 border-solid border-black h-[500px] ml-24 font-bold text-xl '>
             <div> <input type="text" placeholder='Password' ref={ref} className=' mt-10 rounded  h-10 w-1/3 p-2' readOnly value={Password}/> <button onClick={()=>{copy() }} className=' bg-blue-800 h-10 rounded-lg w-16'>Copy</button></div>
             <div className=' mt-5 w-full flex justify-center gap-2'>    
             <label className=' text-sm p-1'>Lenght:{lenght}</label> <input type="range" value={lenght} min={6} max={16} onChange={(e)=>{
              setlenght( e.target.value) 
             }}/>
             <input type="checkbox" className=' w-5 h-8 ' defaultChecked={Character} id='chr' onChange={ function(){ setCharacter(!Character)}}/><label  className=' text-sm p-1' >Character</label>
             <input type="checkbox" className=' w-5 h-8' id='nmbr' defaultChecked={number} onChange={()=>{ setnumber(!number)}} /> <label className=' text-sm p-1'>Number</label>
             </div>
      </div>
    </>
  )
}
export default App