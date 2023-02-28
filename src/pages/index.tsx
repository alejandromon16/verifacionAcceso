import { Suspense } from "react"
import Link from "next/link"
import Layout from "src/core/layouts/Layout"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import styles from "src/styles/Home.module.css"
import LoginForm from "src/auth/components/LoginForm"
import { useRouter } from "next/router"


const UserAuthForm = () => {
  const router = useRouter();

    return (
      <Layout title="Congreso Sedientos Auth">
        <LoginForm
          onSuccess={async (_user) => {
            await router.replace("/admin/")
          }}
        />
      </Layout>
    )
}

const Home: BlitzPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
          <UserAuthForm />
    </Suspense>
  )
}

// Home.redirectAuthenticatedTo = '/admin/'
export default Home
