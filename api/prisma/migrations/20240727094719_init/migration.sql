/*
  Warnings:

  - You are about to drop the column `userId` on the `review` table. All the data in the column will be lost.
  - Added the required column `teacherId` to the `review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `review_userId_fkey`;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `userId`,
    ADD COLUMN `teacherId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher_course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
