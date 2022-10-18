/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `diameter` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `moons` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `cognome` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "description",
DROP COLUMN "diameter",
DROP COLUMN "moons",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "cognome" VARCHAR(255) NOT NULL,
ADD COLUMN     "nome" VARCHAR(255) NOT NULL;
