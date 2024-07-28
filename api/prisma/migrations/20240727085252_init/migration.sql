-- DropForeignKey
ALTER TABLE `course_info` DROP FOREIGN KEY `course_info_courseProductName_fkey`;

-- AlterTable
ALTER TABLE `course_video` ADD COLUMN `courseProductID` INTEGER NOT NULL DEFAULT 0;
