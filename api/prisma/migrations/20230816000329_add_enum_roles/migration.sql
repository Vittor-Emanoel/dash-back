/*
  Warnings:

  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `attendances` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `churchs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'SECRETARY', 'FINANCE');

-- DropForeignKey
ALTER TABLE "attendances" DROP CONSTRAINT "attendances_eventId_fkey";

-- DropForeignKey
ALTER TABLE "attendances" DROP CONSTRAINT "attendances_memberId_fkey";

-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_church_Id_fkey";

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_church_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "attendances";

-- DropTable
DROP TABLE "churchs";

-- DropTable
DROP TABLE "events";

-- DropTable
DROP TABLE "members";
