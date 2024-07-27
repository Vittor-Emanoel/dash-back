/*
  Warnings:

  - Added the required column `owner_id` to the `churchs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "churchs" ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "churchs" ADD CONSTRAINT "churchs_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
