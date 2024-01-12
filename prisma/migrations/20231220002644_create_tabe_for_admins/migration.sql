/*
  Warnings:

  - You are about to drop the column `shepherdId` on the `churchs` table. All the data in the column will be lost.
  - Added the required column `shepherd_id` to the `churchs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "churchs_shepherdId_key";

-- AlterTable
ALTER TABLE "churchs" DROP COLUMN "shepherdId",
ADD COLUMN     "shepherd_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'SHEPHERD';

-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ADMIN',
    "atavarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- AddForeignKey
ALTER TABLE "churchs" ADD CONSTRAINT "churchs_shepherd_id_fkey" FOREIGN KEY ("shepherd_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
