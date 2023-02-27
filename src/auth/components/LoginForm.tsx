import { AuthenticationError, PromiseReturnType } from "blitz"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "src/core/components/Form"
import login from "src/auth/mutations/login"
import { Login } from "src/utils/validations"
import { useMutation } from "@blitzjs/rpc"
import { Routes } from "@blitzjs/next"
import styles from './styles/LoginForm.module.css';


type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <div className={styles.boxForm}>
      <div>
        <h1 className={styles.title}>Iniciar Sesion</h1>
        <span>Por favor Inicie sesion</span>
      </div>
      <Form
        submitText="Login"
        schema={Login}
        initialValues={{ email: "avivamiento@gmail.com", password: "" }}
        onSubmit={async (values: { email: string; password: string } | undefined) => {
          try {
            const user = await loginMutation(values)
            props.onSuccess?.(user)
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Lo sentimos, los credenciales no son validos." }
            } else {
              return {
                [FORM_ERROR]:
                  "Lo sentimos. Ocurrio un error .- " + error.toString(),
              }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        {/* <div>
          <Link href={Routes.ForgotPasswordPage()}>Forgot your password?</Link>
        </div> */}
      </Form>
    </div>
  )
}

export default LoginForm
