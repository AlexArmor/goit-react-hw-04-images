import styled from "styled-components";

export const LoadCircle = styled.span`

top: 45%;
left: 45%;
  width: 150px;
  height: 150px;
  border: 7px dotted #833ab4;
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;

&::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 100;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 7px dotted #3ab45d;
  border-style: solid solid dotted;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: rotationBack 1s linear infinite;
  transform-origin: center center;
}
    
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
} 
`;