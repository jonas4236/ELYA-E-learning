/*
  Warnings:

  - You are about to alter the column `review` on the `enroll_course` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `enroll_course` MODIFY `review` DOUBLE NULL;
