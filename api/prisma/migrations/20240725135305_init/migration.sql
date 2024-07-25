/*
  Warnings:

  - You are about to drop the column `userId` on the `course_video` table. All the data in the column will be lost.
  - You are about to drop the column `userid` on the `enroll_course` table. All the data in the column will be lost.
  - Added the required column `userId` to the `check_course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `enroll_course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_slug` to the `enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enroll_course_slug` to the `progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enroll_user_id` to the `progress` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `enrollment_courseId_key` ON `enrollment`;

-- AlterTable
ALTER TABLE `check_course` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `course_info` MODIFY `descriptionCourse` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `course_video` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `enroll_course` DROP COLUMN `userid`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `enrollment` ADD COLUMN `course_slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `progress` ADD COLUMN `enroll_course_slug` VARCHAR(191) NOT NULL,
    ADD COLUMN `enroll_user_id` INTEGER NOT NULL;
