import { NotFoundError } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";


export default resolver.pipe(
  // resolver.authorize(),
  async ({enrolledPersonId}) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const enrolledPerson = await db.enrolledPerson.findFirst({ where: { id:enrolledPersonId } });

    if (!enrolledPerson) return null;

    return enrolledPerson;
  }
);
