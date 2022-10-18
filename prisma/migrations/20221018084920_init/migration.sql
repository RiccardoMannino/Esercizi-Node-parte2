/*
  Warnings:

  - You are about to drop the column `noots` on the `Planet` table. All the data in the column will be lost.
  - Added the required column `moons` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planet" DROP COLUMN "noots",
ADD COLUMN     "moons" INTEGER NOT NULL;
