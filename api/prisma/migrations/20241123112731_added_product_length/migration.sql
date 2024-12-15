/*
  Warnings:

  - Added the required column `product_length` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `product_length` VARCHAR(191) NOT NULL;
