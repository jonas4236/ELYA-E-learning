/*
  Warnings:

  - Added the required column `SectionId` to the `check_course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `check_course` ADD COLUMN `SectionId` INTEGER NOT NULL;
