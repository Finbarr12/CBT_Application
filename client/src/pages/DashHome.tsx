import { useEffect, useState } from "react";
import styled from "styled-components";


const DashHome = () => {

const [time, setTime] = useState(0)
const [isRunning, setIsRunning] = useState(false);

useEffect(()=>{
  let timer:any
  if (isRunning){
    timer = setInterval(()=>{
      setTime((prevTime)=> prevTime + 1)
    },1000)
  }
  return ()=> clearInterval(timer)
},[isRunning])

const startTimer = () => {
  setIsRunning(true)
}
// const stopTimer = () => {
//   setIsRunning(false)
// }

const formatTime = (seconds:any) =>{
  const minutes = Math.floor(seconds/30)
  const  remainingSeconds = seconds % 30
  return `${String(minutes).padStart(2,`0`)}:${String(remainingSeconds).padStart(2,`0`)}`
}

const getTimerColor = () =>{
  if (time <= 600) {
    return `white`
  }
  return `red`
}
  
  return (
    <Container>
        <Time>
            <Left>
           <div style={{display:"flex", justifyContent: 'center', alignItems:'center',marginLeft:"10px"}}>
           <p>Course:</p>
            <span>Mathematic 201</span>
           </div>
           <div style={{display:"flex", justifyContent: 'center', alignItems:'center',marginLeft:"10px"}}>
           <p>updated</p>
            <span>may 12 2024</span>
           </div>
            </Left>
            <Right>
            <div>
              <p style={{color: getTimerColor()}}>
                {isRunning ? (
                  <>
                  Time: {formatTime(time)}
                  {/* <span>Loading...</span> */}
                  </>
                ):(
                  `Timer Stopped`
                )
              }
              </p>
            </div>
            <div>
              {!isRunning ? (
                <button onClick={startTimer}>Start Timer</button>
              ): (
                null
              )
            }
            </div>
            </Right>
        </Time>
        <Quiz></Quiz>
    </Container>
  );
};

export default DashHome;


const Right = styled.div`
font-size: 2em;
text-align: center;
margin: 20px;
`

const Left = styled.div`
color: white;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

p{
    margin: 0;
}

span{
    margin: 0;
    margin-left: 5px;
}

div{
    font-size: 20px;
    font-weight: 700;
    margin: 0;
}
`

const Quiz = styled.div`
width: 100%;
height: 460px;
background-color: gold;
`

const Time = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: space-between;
/* background-color: red; */
`

const Container = styled.div`
 width: 100%;
 height: 92vh;
 background-color: #181B33;
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-direction: column;
`;