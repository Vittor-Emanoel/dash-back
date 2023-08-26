/*
  Warnings:

  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_memberId_fkey";

-- AlterTable
ALTER TABLE "members" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;

-- DropTable
DROP TABLE "address";
