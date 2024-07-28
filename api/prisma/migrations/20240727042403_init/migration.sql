/*
  Warnings:

  - A unique constraint covering the columns `[courseProductName]` on the table `course_info` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `course_info_courseProductName_key` ON `course_info`(`courseProductName`);

-- AddForeignKey
ALTER TABLE `course_info` ADD CONSTRAINT `course_info_courseProductName_fkey` FOREIGN KEY (`courseProductName`) REFERENCES `course_product`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
