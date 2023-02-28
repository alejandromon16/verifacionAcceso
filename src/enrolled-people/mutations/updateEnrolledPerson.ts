import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const UpdateEnrolledPerson = z.object({
  idX: z.string(),
  name: z.string(),
});

export default resolver.pipe(
  resolver.zod(UpdateEnrolledPerson),
  // resolver.authorize(),
  async ({ idX, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const enrolledPerson = await db.enrolledPerson.update({
      where: { id: idX  },
      data,
    });

    return enrolledPerson;
  }
);
