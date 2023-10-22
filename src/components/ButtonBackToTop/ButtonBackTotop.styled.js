import styled from 'styled-components';

export const ToTopButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 50px;
  height: 50px;
  width: 50px;

  border: none;
  background: transparent;

  color: #a1d300;
  transition: transform 0.2s;

  &:hover {
    animation: bounce 0.5s infinite alternate;
  }
  @keyframes bounce {
  0% {
    transform: translateY(0); 
  }
  100% {
    transform: translateY(-10px); 
`;
