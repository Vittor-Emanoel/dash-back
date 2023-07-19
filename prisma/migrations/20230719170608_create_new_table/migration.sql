/*
  Warnings:

  - Added the required column `church_Id` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "churchs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "shepherd" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_members" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "church_Id" TEXT NOT NULL,
    CONSTRAINT "members_church_Id_fkey" FOREIGN KEY ("church_Id") REFERENCES "churchs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_members" ("id", "name", "phone") SELECT "id", "name", "phone" FROM "members";
DROP TABLE "members";
ALTER TABLE "new_members" RENAME TO "members";
CREATE UNIQUE INDEX "members_phone_key" ON "members"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
