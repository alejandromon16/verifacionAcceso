import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const DeleteEnrolledPerson = z.object({
  id: z.number(),
});

export default resolver.pipe(
  resolver.zod(DeleteEnrolledPerson),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const enrolledPerson = await db.enrolledPerson.deleteMany({
      where: { id },
    });

    return enrolledPerson;
  }
);
