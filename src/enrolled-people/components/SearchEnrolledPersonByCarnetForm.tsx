import { Form, FormProps } from "src/core/components/Form";
import { LabeledTextField } from "src/core/components/LabeledTextField";
import { z } from "zod";
export { FORM_ERROR } from "src/core/components/Form";
import styles from "./styles/SearchEnrolledPersonByCarnetForm.module.css";

export function SearchEnrolledPersonByCarnetForm<S extends z.ZodType<any, any>>(
  props: FormProps<S>
) {
  return (
    <div className={styles.container}>
      <Form<S> {...props}>
        <LabeledTextField 
          name="searchEnrolledPersonInput" 
          label="Buscar" 
          placeholder="Carnet o numero de telefono" />
      </Form>
    </div>
  );
}
