/*
  Warnings:

  - Added the required column `slug` to the `check_course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `check_course` ADD COLUMN `slug` VARCHAR(191) NOT NULL;
