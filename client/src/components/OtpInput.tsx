import  { useState } from 'react';
import Input from 'react-otp-input';

import styled from "styled-components"
import pix from ".././assets/exam.jpg"
import { Link } from 'react-router-dom';


const OtpInput = () => {
    const [otp, setOtp] = useState<any>();
  return (
    <Container>
        <Warpper>
           <Input
     value={otp}
     onChange={setOtp}
     numInputs={4}
   renderSeparator={<span>-</span>}
     renderInput={(props:any) => <input {...props} />}
  inputStyle={{width:"50px",height:"50px",borderRadius:"5px"}}/>
  <Link to={"/instruction"}>
  <button>Continue</button>
  </Link>
        </Warpper>
    </Container>
  )
}

export default OtpInput

const Warpper = styled.div`
width: 100%;
  height: 100%;
  background-color: rgba(31, 28, 59, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  
  button {
    /* width: 30%;
    height: 40px; */
    padding: 10px 40px;
    border: none;
    background-color: white;
    color: rgb(24, 27, 51);
    font-size: 17px;
    border-radius: 10px;
    margin-top: 20px;
    transition: all 350ms ease-in;
    cursor: pointer;

    &:hover {
      background-color: rgb(45, 48, 68);
      color: white;
    }
  }
`
const Container = styled.div`
      width: 100%;
  height: 100vh;
  background: url(${pix});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`