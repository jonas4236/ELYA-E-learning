/*
  Warnings:

  - Added the required column `instructor` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `instructor` VARCHAR(191) NOT NULL;
