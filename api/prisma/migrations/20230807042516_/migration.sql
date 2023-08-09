/*
  Warnings:

  - You are about to drop the column `church_Id` on the `members` table. All the data in the column will be lost.
  - Added the required column `church` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_members" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "church" TEXT NOT NULL,
    CONSTRAINT "members_church_fkey" FOREIGN KEY ("church") REFERENCES "churchs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_members" ("id", "name", "phone") SELECT "id", "name", "phone" FROM "members";
DROP TABLE "members";
ALTER TABLE "new_members" RENAME TO "members";
CREATE UNIQUE INDEX "members_phone_key" ON "members"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
