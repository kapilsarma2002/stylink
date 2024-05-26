'use client'

import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({ label, ...props }) => {
  const { pending } = useFormStatus()

  return (
    <Button fullWidth {...props} isLoading={pending} type="submit">
      {label}
    </Button>
  )
}

export default SubmitButton
