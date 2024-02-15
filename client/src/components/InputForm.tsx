import styled from "styled-components";

const InputForm = () => {
  return (
    <>
      <Container>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Matric Number" />
        <button>Submit</button>
      </Container>
    </>
  );
};

export default InputForm;

const Container = styled.div`
  width: 300px;
  height: 250px;
  background-color: rgb(24, 27, 51);
  border-radius: 15px;
  padding: 30px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 98%;
    height: 40px;
    border-radius: 15px;
    padding-left: 11px;
    border: none;
    outline: none;
  }

  button {
    width: 100%;
    height: 40px;
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
`;
