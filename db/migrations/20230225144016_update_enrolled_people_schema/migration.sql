-- AlterTable
ALTER TABLE "EnrolledPerson" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "phoneNumber" SET DATA TYPE TEXT,
ALTER COLUMN "rol" DROP NOT NULL;