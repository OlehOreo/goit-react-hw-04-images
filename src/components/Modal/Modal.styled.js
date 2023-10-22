import styled from 'styled-components';

export const BtnCloseImg = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
   border: none;
  color: #f6f6f6;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover{
  transform: scale(1.2);
  color: #ffb6b6;
}
}
`;
