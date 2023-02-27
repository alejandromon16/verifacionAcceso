import { resolver } from "@blitzjs/rpc";
import db, { EnrolledPerson } from "db";
import { z } from "zod";


const CreateEnrolledPerson = z.object({
  name: z.string(),
  email: z.string(),
  carnet: z.string(),
  phoneNumber: z.string().min(2).max(10),
  church: z.string(),
  rol: z.string().optional(),
});

export default resolver.pipe(
  resolver.zod(CreateEnrolledPerson),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const enrolledPerson = await db.enrolledPerson.create({ data: input });

    return enrolledPerson;
  }
);
