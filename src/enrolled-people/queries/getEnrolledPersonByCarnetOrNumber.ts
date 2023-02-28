import { NotFoundError } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db from "db";


export default resolver.pipe(
  resolver.authorize(),
  async ({enrolledPersonByCarnetOrNumber}) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const enrolledPerson = await db.enrolledPerson.findFirst({
      where:{
        OR:[
          { carnet: enrolledPersonByCarnetOrNumber },
          { phoneNumber: enrolledPersonByCarnetOrNumber }
        ],
      }
    })

    if (!enrolledPerson) return null;

    return enrolledPerson;
  }
);
