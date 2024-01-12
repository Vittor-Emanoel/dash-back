/*
  Warnings:

  - You are about to drop the column `userId` on the `members` table. All the data in the column will be lost.
  - Added the required column `shepherd_id` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "members" DROP COLUMN "userId",
ADD COLUMN     "shepherd_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_shepherd_id_fkey" FOREIGN KEY ("shepherd_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
