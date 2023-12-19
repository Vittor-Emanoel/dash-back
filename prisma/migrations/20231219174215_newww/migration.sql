/*
  Warnings:

  - You are about to drop the column `shepherdId` on the `members` table. All the data in the column will be lost.
  - You are about to drop the column `churchId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shepherdId]` on the table `churchs` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "churchs" DROP CONSTRAINT "churchs_shepherdId_fkey";

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_shepherdId_fkey";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "shepherdId",
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "churchId",
ALTER COLUMN "role" SET DEFAULT 'ADMIN';

-- CreateIndex
CREATE UNIQUE INDEX "churchs_shepherdId_key" ON "churchs"("shepherdId");
