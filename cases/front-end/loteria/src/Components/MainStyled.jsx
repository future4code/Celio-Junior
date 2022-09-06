import styled from "styled-components"

export const MainContainer = styled.div `
    background-color: transparent;
    position: absolute;
    display: flex;
    z-index: 2;
    width: auto;
    left: 7.5%;
    top: 10%;
      @media screen and (max-width: 900px) {
          top: unset;
          left: unset;
          width: 100%;
          justify-content: center;
          align-items: center;
          margin-top: 2.5em;
      }
`
export const SelectStyled = styled.select`
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: white;
  width: 13em;
  font-size: 1.1rem;
  display: flex;
  cursor: pointer;
  outline: 0;
  color: #333333;
    option {
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
      color: #333333;
    }
`