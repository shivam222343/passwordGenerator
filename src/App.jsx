import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
const [color, setColor] = useState("blue")
const [length, setLength] = useState(8)
const [takeNumber, setTakeNumber] = useState(false)
const [character, setCharacter ] = useState(false)
const [password, setPassword] = useState("")
console.log(password)
let passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(takeNumber) str += "0123456789"
  if(character) str += "<>?{}[]!@$%^&*()^~`"
  
  for (let i = 1; i<=+length; i++) {
        let char = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(char)
  }
 setPassword(pass)

}, [length, takeNumber, character, setPassword])

     useEffect(()=>{
             passwordGenerator()

     },[length, takeNumber, character, passwordGenerator])

     //use ref hook
     let passwordRef = useRef(null)
      
     const copyToClipboard = useCallback((e)=>{
                   window.nevigator.clipboard.writeText(password)
                   e.target.
     },[password])


  return (
    
       <div className='w-full h-screen duration-200 flex justify-center'
       style={{backgroundColor:color, height:"100vh", width:"100vw"}}>
             <div className='h-40 w-96 rounded-lg mt-5 flex flex-wrap justify-center'style={{backgroundColor:'gray'}}>
             <div className='search h-10 w-60 flex-initial flex flex-wrap relative mt-2'>
              <input className='h-8 rounded-l-lg p-1 border-none'
                     type="text"
                     value={password}
                     placeholder='Password'
                     readOnly
                     ref={passwordRef}
              />
              <button
              onClick={copyToClipboard}
               className='h-8 w-10 p-1 size-1 rounded-r-lg rounded-l-none font-bold bg-green-400'style={{fontSize:'10px'}}>Copy
              </button>
              <div className='h-10 w-60 mt-4 rounded-lg bg-slate-200 flex justify-center '>
                <input className='bg-lime-500 cursor-pointer' style={{backgroundColor:"green"}} 
                type="range"
                value={length}
                min={6}
                max={100}
                onChange={(e)=>{setLength(e.target.value)}}
                /> <label className='size-2 text-fuchsia-600 mt-2 ml-2 font-bold '>{length}</label>
              </div>
              <input className='mt-4' type="checkbox" 
                     defaultChecked={takeNumber}
                     id='number'
                     onChange={()=>{
                          setTakeNumber((prev) => !prev)
                     }}
              /> <label className='mt-4 ml-2 bg-white rounded-lg p-1 font-bold text-blue-600 type="checkbox" '>Numbers</label>

              <input className='mt-4 ml-5' type="checkbox" 
                     type="checkbox"
                     defaultChecked={character} 
                     id="character" 
                     onChange={()=>{
                      setCharacter((prev) => !prev)
                     }}

                     /> <label className='mt-4 ml-2 rounded-lg p-1 font-bold text-blue-600 ' type="checkbox" style={{backgroundColor:'rgba(255, 255, 255, 0.421)'}}   >Characters</label>
             </div>
             </div>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className=' justify-center shadow-xl px-2 py-3 rounded-lg bg-white '>
            <button className=' outline-none px-4 shadow-xl mt-2 bg-red-600 ' onClick={()=>{setColor("red")}}>Red</button>
            <button className=' outline-none px-4 shadow-xl mt-2 bg-orange-500 ml-2 'onClick={()=>{setColor("orange")}}>Orange</button>
            <button className=' outline-none px-4 shadow-xl mt-2 bg-yellow-300 ml-2 'onClick={()=>{setColor("yellow")}}>Yellow</button>
            <button className=' outline-none px-4 shadow-xl mt-2 bg-green-500 ml-2 'onClick={()=>{setColor("green")}}>Green</button>
            <button className=' outline-none px-4 shadow-xl mt-2 bg-white ml-2 'style={{color:"black"}}onClick={()=>{setColor("white")}}>White</button>
            <button className=' outline-none px-4 shadow-xl mt-2 bg-zinc-900 ml-2 'onClick={()=>{setColor("black")}}>black</button>
          </div>
        </div>
       </div>
  )
}

export default App
