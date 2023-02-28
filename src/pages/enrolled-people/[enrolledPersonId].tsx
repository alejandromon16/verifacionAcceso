import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery} from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";
import Layout from "src/core/layouts/Layout";
import getEnrolledPerson from "src/enrolled-people/queries/getEnrolledPerson";
import Spinner from "src/core/components/Spinner";
import { EnrolledPersonInfo } from "src/enrolled-people/components/EnrolledPersonInfo";

export const EnrolledPerson = () => {
  const router = useRouter();
  const enrolledPersonId = useParam("enrolledPersonId", "string");
  const [enrolledPerson] = useQuery(getEnrolledPerson, {
    enrolledPersonId,
  });

  if(enrolledPerson == null){
    return (
      <div>
        no se encontro esa persona
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>EnrolledPerson {enrolledPerson.id}</title>
      </Head>

      <div>
       <EnrolledPersonInfo enrolledPerson={enrolledPerson} />
      </div>
    </>
  );
};

const ShowEnrolledPersonPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.EnrolledPeoplePage()}>Ir atras</Link>
      </p>

      <Suspense fallback={<Spinner color="#128287" />}>
        <EnrolledPerson />
      </Suspense>
    </div>
  );
};

// ShowEnrolledPersonPage.authenticate = true;
// ShowEnrolledPersonPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowEnrolledPersonPage;
