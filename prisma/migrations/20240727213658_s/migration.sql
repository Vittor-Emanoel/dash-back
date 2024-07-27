/*
  Warnings:

  - You are about to drop the column `organizationId` on the `churchs` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `churchs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "churchs" DROP CONSTRAINT "churchs_organizationId_fkey";

-- DropIndex
DROP INDEX "churchs_userId_key";

-- AlterTable
ALTER TABLE "churchs" DROP COLUMN "organizationId",
DROP COLUMN "userId",
ADD COLUMN     "organization_Id" TEXT;

-- AddForeignKey
ALTER TABLE "churchs" ADD CONSTRAINT "churchs_organization_Id_fkey" FOREIGN KEY ("organization_Id") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
