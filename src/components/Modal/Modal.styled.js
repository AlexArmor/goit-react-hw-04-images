import styled from 'styled-components';

export const ModalWindow = styled.div`
  max-height: calc(100vh - 100px);
  max-width: calc(100vw - 100px);
  width: 80%;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    overflow: hidden;
`;

export const ImageModal = styled.img`
width: 100%;
height: 100%;
display: block;
object-fit: cover;`;