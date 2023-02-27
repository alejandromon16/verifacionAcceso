import { Form, FormProps } from "src/core/components/Form";
import { LabeledTextField } from "src/core/components/LabeledTextField";
import { z } from "zod";
export { FORM_ERROR } from "src/core/components/Form";

export function EnrolledPersonForm<S extends z.ZodType<any, any>>(
  props: FormProps<S>
) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Nombre" placeholder="Nombre Completo" />
      <LabeledTextField name="email" label="Email" placeholder="Email" />
      <LabeledTextField name="carnet" label="Carnet" placeholder="Carnet" />
      <LabeledTextField name="phoneNumber" label="Numero de telefono" placeholder="Numero" />
      <LabeledTextField name="church" label="Congregacion" placeholder="Congregacion" />
    </Form>
  );
}
