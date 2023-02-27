import { Suspense } from "react";
import { BlitzPage, Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getEnrolledPersonByCarnetOrNumber from "src/enrolled-people/queries/getEnrolledPersonByCarnetOrNumber";
import { EnrolledPersonInfo } from "src/enrolled-people/components/EnrolledPersonInfo";
import Button from "src/core/components/Button";
import Spinner from "src/core/components/Spinner";
import updateEntranceEnrolledPerson from "src/enrolled-people/mutations/updateEntranceEnrolledPerson";
import XButton from "src/core/components/XButton";

export const EnrolledPerson = () => {
  const router = useRouter();
  const enrolledPersonByCarnetOrNumber = useParam("enrolledPersonByCarnetOrNumber", "string");
  const [enrolledPerson] = useQuery(getEnrolledPersonByCarnetOrNumber, {
    enrolledPersonByCarnetOrNumber,
  });
  const [updateEntranceEnrolledPersonMutation] = useMutation(updateEntranceEnrolledPerson);

  const handleClick = async () => {
   const updateEntrance = await updateEntranceEnrolledPersonMutation({id: enrolledPerson?.id});
   if(updateEntrance){
    await router.replace('/admin/');
   } 
  }

  if(enrolledPerson == null){
    return (
      <div>
        No se encontro persona
        <p>
            <Link href={Routes.NewEnrolledPersonPage()}>
              <Button 
                text="+ Agregar Participante" 
                type="button"            
                />
            </Link>
        </p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>EnrolledPerson {enrolledPerson.id}</title>
      </Head>
      <div style={{display:"flex", justifyContent:"end", paddingInline:"2rem" }}>
        <XButton
          onClick={() => router.replace("/")}
        />
      </div>
      <EnrolledPersonInfo 
        enrolledPerson={enrolledPerson}
        onClick={handleClick}
      />
    </>
  );
};

const ShowEnrolledPersonPageByCarnetOrNumber: BlitzPage = () => {
  return (
    <div>
      {/* <p>
        <Link href={Routes.EnrolledPeoplePage()}>EnrolledPeople</Link>
      </p> */}

      <Suspense fallback={
        <div style={{display:"flex",justifyContent:"center",justifyItems:"center"}}>
          <Spinner 
            color="#128287"
          />
        </div>
      }>
        <EnrolledPerson />
      </Suspense>
    </div>
  );
};

ShowEnrolledPersonPageByCarnetOrNumber.authenticate = true;
ShowEnrolledPersonPageByCarnetOrNumber.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowEnrolledPersonPageByCarnetOrNumber;