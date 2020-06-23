import styled from "styled-components";

import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height || "100vh"};
  background: ${(props) => props.theme.background || "#eee"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const Card = styled.div`
  background: #fff;
  width: ${(props) => props.width || "550px"};
  text-align: ${(props) => props.position || "left"};
  border-radius: 8px;
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 22px;
    color: #392d2d;
    margin-bottom: 10px;
  }
`;

export const Templates = styled.div`
  width: 100%;
  height: 90px;
  background: #eee;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  overflow-y: auto;
  margin-bottom: 32px;

  button {
    background: transparent;
    margin-right: 10px;
    border: 2px solid transparent;

    img {
      width: 53px;
      height: 53px;
    }

    &.selected {
      border-color: #4395d8;
    }
  }

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #392d2d;
  }
`;

export const Form = styled.form`
  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    padding: 0 15px;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #4395d8;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;
  font-size: 14px;

  &:hover {
    background: #3672a3;
  }
`;

export const ButtonReset = styled.button`
  width: 80%;
  height: 40px;
  margin: 10px auto 0 auto;
  border-radius: 8px;
  background: #4395d8;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;
  font-size: 14px;

  &:hover {
    background: #3672a3;
  }
`;

export const Toggle = styled.label`
  position: absolute;
  top: 20px;
  right: 20px;

  input {
    -webkit-appearance: none;
    visibility: hidden;
    display: none;
  }

  .check {
    position: relative;
    display: block;
    width: 45px;
    height: 25px;
    background: #107;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    transition: ease-in 0.5s;
  }

  input:checked ~ .check {
    background: #fff;
  }

  .check:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    background: url(${moon}) no-repeat;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: 0.5s;
  }

  input:checked ~ .check:before {
    transform: translateX(-50px);
  }

  .check:after {
    content: "";
    position: absolute;
    top: 4px;
    right: 4px;
    background: url(${sun}) no-repeat;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: 0.5s;
    transform: translateX(50px);
  }

  input:checked ~ .check:after {
    transform: translateX(0px);
  }
`;
