import { ReactNode, PropsWithoutRef, useState } from "react"
import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
import { z } from "zod"
import { validateZodSchema } from "blitz"
import Button from "../components/Button"
import styles from "../styles/Form.module.css"
import { execPath } from "process"
import { e } from "vitest/dist/index-9f5bc072"
export { FORM_ERROR } from "final-form"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  schema?: S
  onSubmit: (arg0: any) => Promise<any>
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
}

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {

  const [isSubmitting, setIsSubmitting]  = useState<boolean>(false);

  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <form onSubmit={handleSubmit} className={styles.form} {...props}>
          {/* Form fields supplied as children are rendered here */}
          {children}

          {submitError && (
            <div role="alert" style={{ color: "red" }}>
              {submitError}
            </div>
          )}

          {submitText && (
            // <button type="submit" disabled={submitting}>
            //   {submitText}
            // </button>
            <div className={styles.wrapButton}>
              <Button type="submit" text={submitText} loading={submitting}/>
            </div>
          )}
        </form>
        )}
     />
  )
}

export default Form
