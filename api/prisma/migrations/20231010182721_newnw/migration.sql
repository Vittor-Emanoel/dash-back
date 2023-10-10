/*
  Warnings:

  - You are about to drop the column `userId` on the `churchs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shepherdId]` on the table `churchs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shepherdId` to the `churchs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "churchs" DROP CONSTRAINT "churchs_userId_fkey";

-- DropIndex
DROP INDEX "churchs_userId_key";

-- AlterTable
ALTER TABLE "churchs" DROP COLUMN "userId",
ADD COLUMN     "shepherdId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "churchs_shepherdId_key" ON "churchs"("shepherdId");

-- AddForeignKey
ALTER TABLE "churchs" ADD CONSTRAINT "churchs_shepherdId_fkey" FOREIGN KEY ("shepherdId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
