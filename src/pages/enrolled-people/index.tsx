import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { usePaginatedQuery } from "@blitzjs/rpc";
import { useRouter } from "next/router";
import Layout from "src/core/layouts/Layout";
import getEnrolledPeople from "src/enrolled-people/queries/getEnrolledPeople";
import BottomNavBar from "src/core/components/BottomNavBar";
import Spinner from "src/core/components/Spinner";
import Button from "src/core/components/Button";
import DataTableEnrolledPeople from "src/enrolled-people/components/DataTableEnrolledPeople";
import db from "db";

const ITEMS_PER_PAGE = 20;

export const EnrolledPeopleList = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 0;
  const [{ enrolledPeople, hasMore, count }] = usePaginatedQuery(getEnrolledPeople, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  });
  
  const goToPreviousPage = () => router.push({ query: { page: page - 1 } });
  const goToNextPage = () => router.push({ query: { page: page + 1 } });

  return (
    <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <p style={{display:"flex",justifyContent:"center", marginBlock:"2rem" }}>Total de Participantes: {count}</p>
      <DataTableEnrolledPeople users={enrolledPeople}   />
      <div style={{paddingBottom:"10rem" }}>
          <button text="anterior" disabled={page === 0} onClick={goToPreviousPage}>anterior</button>
          <button text="siguiente" disabled={!hasMore} onClick={goToNextPage}>siguiente</button>
      </div>
    </div>
  );
};

const EnrolledPeoplePage = () => {

  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>EnrolledPeople</title>
      </Head>

      <div>
        <p>
            <Link href={Routes.NewEnrolledPersonPage()}>
              <Button 
                text="+ Agregar Participante"
              />
            </Link>
        </p>
        <Suspense fallback={
          <Spinner 
            color="#128287"
          />}
        >
          <EnrolledPeopleList />
        </Suspense>
      </div>
      <BottomNavBar 
        activeButton={0}
        onButtonClick={() => router.push('/admin')}
      />
    </Layout>
  );
};

export default EnrolledPeoplePage;
