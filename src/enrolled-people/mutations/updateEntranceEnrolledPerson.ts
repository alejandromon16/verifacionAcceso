import { resolver } from "@blitzjs/rpc";
import db from "db";

export default resolver.pipe(
  resolver.authorize(),
  async ({ id }) => {
    const enrolledPerson = await db.enrolledPerson.update({
      where: { id },
      data:{
        entrance: true,
      }
    });

    if(!enrolledPerson) return false;
    return true;
  }
);