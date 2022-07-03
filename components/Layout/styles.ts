import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  text-align: center;
`;

export const Header = styled.div`
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 9;
  cursor: pointer;
  padding: 16px;
`;

export const Content = styled.div`
  margin-top: 80px;
  padding: 16px;
  align-items: center;
  text-align: center;
`;

export const LoadingContainer = styled.div`
  margin: auto;

  div {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 9;
  }
`;

export const MyPokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5%;
  top: 20%;
  border: 1px solid #e4000f;
  border-radius: 12px;
  padding: 8px 12px;

  span {
    margin-left: 12px;
    font-size: 12px;
  }
`;
