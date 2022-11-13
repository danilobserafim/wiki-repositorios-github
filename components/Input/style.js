import styled from "styled-components";

export const InputContainer = styled.input`
    display: block;
    padding: 8px;
    width: 600px;
    border-radius: 10px;
    font-size: large;
    color: gray;
    border: 1px solid gray;
    background-color: transparent;
    &:focus{
      border-color: white;
      outline: 0;
      color: white;
    }
  

`