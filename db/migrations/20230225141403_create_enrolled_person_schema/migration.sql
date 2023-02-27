-- CreateTable
CREATE TABLE "EnrolledPerson" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completeName" TEXT NOT NULL,
    "carnet" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "church" TEXT NOT NULL,
    "rol" TEXT NOT NULL DEFAULT 'MIEMBRO',

    CONSTRAINT "EnrolledPerson_pkey" PRIMARY KEY ("id")
);
