/*
  Warnings:

  - You are about to drop the column `churchId` on the `members` table. All the data in the column will be lost.
  - You are about to drop the column `houseNumber` on the `members` table. All the data in the column will be lost.
  - You are about to drop the column `officeId` on the `members` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `members` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `members` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_churchId_fkey";

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_officeId_fkey";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "churchId",
DROP COLUMN "houseNumber",
DROP COLUMN "officeId",
DROP COLUMN "postalCode",
DROP COLUMN "street",
ADD COLUMN     "church_id" TEXT,
ADD COLUMN     "office_id" TEXT;

-- CreateTable
CREATE TABLE "member_address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "churchId" TEXT,
    "memberId" TEXT,

    CONSTRAINT "member_address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_office_id_fkey" FOREIGN KEY ("office_id") REFERENCES "offices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "churchs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_address" ADD CONSTRAINT "member_address_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "churchs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_address" ADD CONSTRAINT "member_address_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE SET NULL ON UPDATE CASCADE;
