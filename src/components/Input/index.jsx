import { Field, ErrorMessage } from 'formik'

import * as C from './styles'

export function Input({ name, type = '', label, required, ...props }) {
  return (
    <C.Container>
      <C.Label>
        {label || name}
        {required && <C.RequiredLabel>*</C.RequiredLabel>}
      </C.Label>
      <Field as={C.Input} name={name} type={type} {...props} />
      <ErrorMessage name={name} component={C.ErrorStyled} />
    </C.Container>
  )
}
