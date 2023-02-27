import { BlitzPage, Routes } from "@blitzjs/next";
import { useRouter } from "next/router";
import BottomNavBar from "src/core/components/BottomNavBar";
import Layout from "src/core/layouts/Layout";
import {
  SearchEnrolledPersonByCarnetForm,
  FORM_ERROR,
} from "src/enrolled-people/components/SearchEnrolledPersonByCarnetForm";
import { SearchEnrolledPersonSchema } from "src/utils/validations";

const SearchEnrolledPerson: BlitzPage = () => {
  const router = useRouter();

  const handleRoute = async (enrolledPersonByCarnetOrNumber) => {
    await router.push(`/enrolled-people/ingreso/${enrolledPersonByCarnetOrNumber}`)
  }
  return (
    <Layout title={"Buscar Inscritos"}>
    <h1 style={{display: "flex", justifyContent:"start", textAlign:"start", alignItems:"start", paddingInline:"50px"}} >Buscar Inscritos</h1>
      <SearchEnrolledPersonByCarnetForm
        submitText="Buscar"
        schema={SearchEnrolledPersonSchema}
        initialValues={{searchEnrolledPersonInput:""}}
        onSubmit={async ({searchEnrolledPersonInput}) => {
          try {
            await handleRoute(searchEnrolledPersonInput)
          } catch (error: any) {
            console.error(error);
            return {
              [FORM_ERROR]: error.toString(),
            };
          }
        }}
      />
        <BottomNavBar 
          activeButton={1}
          onButtonClick={() => router.push('/enrolled-people')}
        />
    </Layout>
  );
};

SearchEnrolledPerson.authenticate = true;
SearchEnrolledPerson.authenticate = {redirectTo: '/'};

export default SearchEnrolledPerson;