-- DropForeignKey
ALTER TABLE "shepherds" DROP CONSTRAINT "shepherds_churchId_fkey";

-- AlterTable
ALTER TABLE "shepherds" ALTER COLUMN "churchId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "shepherds" ADD CONSTRAINT "shepherds_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "churchs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
