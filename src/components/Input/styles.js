import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
  width: 100%;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid;
  font-size: 18px;
  width: 90%;
`

export const Label = styled.label`
  text-transform: capitalize;
  color: #ff9d00;
`

export const RequiredLabel = styled.span`
  color: red;
`

export const ErrorStyled = styled.span`
  color: red;
  font-size: 14px;
`
