import { useEffect, useState } from 'react'


function App() {
  const [isDisabled, setIsDisable] = useState(false)
  const [random, setRandom] = useState('')
  const [timer,setTimer] =useState();

  const generator =()=>{
      setTimer(5)
      setIsDisable(!isDisabled)
      const randomString = Math.random().toString().slice(2,8)
      setRandom(randomString)

  }

  useEffect(()=>{
    if(!isDisabled) return ;
    if(isDisabled ){
   const   intervalId = setInterval(()=>{
        setTimer(prev =>{ 
          if(prev <=1){
          clearInterval(intervalId)
            setIsDisable(!isDisabled)
            return 0
          }
         return  prev -1})
      },1000)

      return  ()=>clearInterval(intervalId)
    }
 
  },[isDisabled])

  const styles ={
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    border: "2px solid white ",
    padding: '5px',
    height: '400px',
    margin: '90px auto',
    borderRadius: '10px',
    boxShadow: "5px 5px rgba(45,10,30,0.5)"

  }
  return (
    <>
     <div style={styles}>
      <h1>OTP Generator</h1>
      <h2 >{random? random : "Click 'Generate OTP' to get a code"}</h2>
      <p id='timer' style={{ fontSize: '1.2rem'}}>{ isDisabled&&timer > 0
      ? `Expires in: ${timer} seconds`
      : timer ===0 
          ? `OTP expired. Click the button to generate a new OTP.`
          :""}</p>
      <button  style={{cursor:isDisabled? 'not-allowed':'pointer'}}onClick={generator} disabled={isDisabled}> Generate OPT</button>
     </div>
    </>
  )
}

export default App
