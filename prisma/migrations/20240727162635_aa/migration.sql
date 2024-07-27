/*
  Warnings:

  - A unique constraint covering the columns `[owner_id]` on the table `organizations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "organizations_owner_id_key" ON "organizations"("owner_id");
