import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const UpdateEnrolledPerson = z.object({
  id: z.number(),
  name: z.string(),
});

export default resolver.pipe(
  resolver.zod(UpdateEnrolledPerson),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const enrolledPerson = await db.enrolledPerson.update({
      where: { id },
      data,
    });

    return enrolledPerson;
  }
);
