import { useQuery } from "@blitzjs/rpc"
import getCurrentUser from "src/users/queries/getCurrentUser"

export const useCurrentUser = async () => {
  const [user] = await useQuery(getCurrentUser, null)
  return user
}
