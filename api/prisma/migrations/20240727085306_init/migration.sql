/*
  Warnings:

  - You are about to drop the column `courseProductID` on the `course_video` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `course_info_courseProductName_key` ON `course_info`;

-- AlterTable
ALTER TABLE `course_video` DROP COLUMN `courseProductID`;
