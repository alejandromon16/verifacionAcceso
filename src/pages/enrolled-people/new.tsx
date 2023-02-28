import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import createEnrolledPerson from "src/enrolled-people/mutations/createEnrolledPerson";
import {
  EnrolledPersonForm,
  FORM_ERROR,
} from "src/enrolled-people/components/EnrolledPersonForm";
import XButton from "src/core/components/XButton";

const NewEnrolledPersonPage = () => {
  const router = useRouter();
  const [createEnrolledPersonMutation] = useMutation(createEnrolledPerson);

  return (
    <Layout title={"Create New EnrolledPerson"}>
      <div style={{display:"flex", justifyContent:"end", paddingInline:"2rem" }}>
        <XButton
          onClick={() => router.replace("/")}
        />
      </div>
      <h1>Nuevo Participante</h1>

      <EnrolledPersonForm
        submitText="Registrar"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateEnrolledPerson}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const enrolledPerson = await createEnrolledPersonMutation(values);
            await router.push(
              Routes.ShowEnrolledPersonPage({
                enrolledPersonId: enrolledPerson.id,
              })
            );
          } catch (error: any) {
            console.error(error);
            return {
              [FORM_ERROR]: error.toString(),
            };
          }
        }}
      />

    </Layout>
  );
};

// NewEnrolledPersonPage.authenticate = true;

export default NewEnrolledPersonPage;
