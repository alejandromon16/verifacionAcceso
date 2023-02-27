import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getEnrolledPerson from "src/enrolled-people/queries/getEnrolledPerson";
import updateEnrolledPerson from "src/enrolled-people/mutations/updateEnrolledPerson";
import {
  EnrolledPersonForm,
  FORM_ERROR,
} from "src/enrolled-people/components/EnrolledPersonForm";

export const EditEnrolledPerson = () => {
  const router = useRouter();
  const enrolledPersonId = useParam("enrolledPersonId", "number");
  const [enrolledPerson, { setQueryData }] = useQuery(
    getEnrolledPerson,
    { id: enrolledPersonId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  );
  const [updateEnrolledPersonMutation] = useMutation(updateEnrolledPerson);

  return (
    <>
      <Head>
        <title>Edit EnrolledPerson {enrolledPerson.id}</title>
      </Head>

      <div>
        <h1>Edit EnrolledPerson {enrolledPerson.id}</h1>
        <pre>{JSON.stringify(enrolledPerson, null, 2)}</pre>

        <EnrolledPersonForm
          submitText="Update EnrolledPerson"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateEnrolledPerson}
          initialValues={enrolledPerson}
          onSubmit={async (values) => {
            try {
              const updated = await updateEnrolledPersonMutation({
                id: enrolledPerson.id,
                ...values,
              });
              await setQueryData(updated);
              await router.push(
                Routes.ShowEnrolledPersonPage({ enrolledPersonId: updated.id })
              );
            } catch (error: any) {
              console.error(error);
              return {
                [FORM_ERROR]: error.toString(),
              };
            }
          }}
        />
      </div>
    </>
  );
};

const EditEnrolledPersonPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditEnrolledPerson />
      </Suspense>

      <p>
        <Link href={Routes.EnrolledPeoplePage()}>EnrolledPeople</Link>
      </p>
    </div>
  );
};

EditEnrolledPersonPage.authenticate = true;
EditEnrolledPersonPage.getLayout = (page) => <Layout>{page}</Layout>;

export default EditEnrolledPersonPage;
