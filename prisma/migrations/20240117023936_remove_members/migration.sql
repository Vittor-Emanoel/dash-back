/*
  Warnings:

  - You are about to drop the column `shepherdId` on the `members` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_shepherdId_fkey";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "shepherdId";
