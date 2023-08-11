import styled from 'styled-components'

export const Container = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 80%;
  max-width: 600px;
  justify-content: center;
  box-shadow: 0 1px 2px;
  padding: 30px;
`

export const Row = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 550px) {
    display: block;
  }
`

export const Footer = styled.div`
  text-align: end;
`

export const Button = styled.button`
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  background-color: #ff9d00;
  color: white;
  border: none;
  border-radius: 5px;
`
