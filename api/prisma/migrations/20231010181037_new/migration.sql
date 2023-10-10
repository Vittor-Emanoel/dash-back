/*
  Warnings:

  - You are about to drop the column `shepherd` on the `churchs` table. All the data in the column will be lost.
  - You are about to drop the `attendance` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `churchs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `churchs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'SHEPHERD';

-- DropForeignKey
ALTER TABLE "attendance" DROP CONSTRAINT "attendance_eventId_fkey";

-- DropForeignKey
ALTER TABLE "attendance" DROP CONSTRAINT "attendance_memberId_fkey";

-- AlterTable
ALTER TABLE "churchs" DROP COLUMN "shepherd",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "attendance";

-- CreateTable
CREATE TABLE "attendances" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "attendanceStatus" TEXT NOT NULL,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "churchs_userId_key" ON "churchs"("userId");

-- AddForeignKey
ALTER TABLE "churchs" ADD CONSTRAINT "churchs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
