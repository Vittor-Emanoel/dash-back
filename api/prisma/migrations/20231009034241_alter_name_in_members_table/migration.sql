/*
  Warnings:

  - You are about to drop the column `officesId` on the `members` table. All the data in the column will be lost.
  - Added the required column `officeId` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_officesId_fkey";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "officesId",
ADD COLUMN     "officeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "offices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
