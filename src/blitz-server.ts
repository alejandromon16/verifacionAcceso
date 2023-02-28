import { setupBlitzServer } from "@blitzjs/next"
import {
  AuthServerPlugin,
  PrismaStorage,
  simpleRolesIsAuthorized,
} from "@blitzjs/auth"
import db from "db"
import { authConfig } from "./blitz-client"

const { gSSP, gSP, api } = setupBlitzServer({
  plugins: [
    AuthServerPlugin({
      ...authConfig,
      storage: PrismaStorage(db),
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
})

export { gSSP, gSP, api }