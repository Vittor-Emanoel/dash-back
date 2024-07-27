-- AlterTable
ALTER TABLE "churchs" ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "church_address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "church_id" TEXT,

    CONSTRAINT "church_address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "church_address" ADD CONSTRAINT "church_address_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "churchs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
