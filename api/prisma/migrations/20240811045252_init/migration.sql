/*
  Warnings:

  - Added the required column `courseImage` to the `course_product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course_product` ADD COLUMN `courseImage` VARCHAR(191) NOT NULL;
