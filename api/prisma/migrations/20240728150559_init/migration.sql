/*
  Warnings:

  - You are about to drop the column `review` on the `enroll_course` table. All the data in the column will be lost.
  - You are about to alter the column `courseId` on the `enroll_course` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[product_id]` on the table `cart` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,courseId]` on the table `enroll_course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,courseId]` on the table `review` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `check_course` DROP FOREIGN KEY `check_course_videoId_fkey`;

-- AlterTable
ALTER TABLE `cart` ADD COLUMN `product_id` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `enroll_course` DROP COLUMN `review`,
    MODIFY `courseId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `review` ADD COLUMN `userId` INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX `cart_product_id_key` ON `cart`(`product_id`);

-- CreateIndex
CREATE UNIQUE INDEX `enroll_course_userId_courseId_key` ON `enroll_course`(`userId`, `courseId`);

-- CreateIndex
CREATE UNIQUE INDEX `review_userId_courseId_key` ON `review`(`userId`, `courseId`);

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_userId_courseId_fkey` FOREIGN KEY (`userId`, `courseId`) REFERENCES `enroll_course`(`userId`, `courseId`) ON DELETE RESTRICT ON UPDATE CASCADE;
