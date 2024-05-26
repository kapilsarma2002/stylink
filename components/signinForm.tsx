'use client'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import SubmitButton from './submitButton'
import { signinUser } from '@/actions/auth'

const initState = { message: null }

const SigninForm = () => {

  const [formState, action] = useFormState<{ message: string | null }>(
    signinUser,
    initState
  )

  return (
    <form action={action} className="bg-content1 border border-default-100 shadow-lg rounded-md p-5 flex flex-col gap-2 ">
      <h3 className="my-4 mx-auto mb-8 text-2xl font-semibold">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />

      <div className='mt-4'>
        <SubmitButton label={'Sign in'} /> 
      </div>

      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>

      {formState?.message && <div>{formState.message}</div>}
    </form>
  )
}

export default SigninForm
