-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `career` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `biography` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category_course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(191) NOT NULL,
    `category_icon` VARCHAR(191) NOT NULL,
    `category_slug` VARCHAR(191) NOT NULL DEFAULT '',

    UNIQUE INDEX `category_course_category_name_key`(`category_name`),
    UNIQUE INDEX `category_course_category_slug_key`(`category_slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryUID` VARCHAR(191) NOT NULL,
    `name_course` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `discountPrice` INTEGER NULL,
    `lession` INTEGER NOT NULL,
    `hours` DOUBLE NOT NULL,
    `stars` DOUBLE NULL,
    `num_review` INTEGER NOT NULL DEFAULT 0,
    `isFutured` VARCHAR(191) NOT NULL,
    `teacherId` INTEGER NULL,

    UNIQUE INDEX `course_product_name_course_key`(`name_course`),
    UNIQUE INDEX `course_product_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teacher_course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `profile_image` VARCHAR(191) NOT NULL,
    `background_image` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `full_name_slug` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `teacher_course_full_name_key`(`full_name`),
    UNIQUE INDEX `teacher_course_full_name_slug_key`(`full_name_slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `courseProductName` VARCHAR(191) NOT NULL,
    `descriptionCourse` VARCHAR(191) NOT NULL,
    `hasEnrolled` BOOLEAN NOT NULL,
    `hours` DOUBLE NOT NULL,
    `uploadedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag_course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tag_name` VARCHAR(191) NOT NULL,
    `course_info_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tag_name` VARCHAR(191) NOT NULL,
    `tag_slug` VARCHAR(191) NOT NULL,
    `course_info_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `requirement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `require_name` VARCHAR(191) NOT NULL,
    `course_info_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enrollment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `courseId` INTEGER NOT NULL,
    `enroll_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `enrollment_courseId_key`(`courseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `profileImg` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `postedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NULL,
    `courseId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_section` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_product_name` VARCHAR(191) NOT NULL,
    `section_name` VARCHAR(191) NOT NULL,
    `section_description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_video` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sectionId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `video_title` VARCHAR(191) NOT NULL,
    `video_url` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `check_course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `videoId` INTEGER NOT NULL,
    `isComplete` VARCHAR(191) NOT NULL DEFAULT 'FALSE',

    UNIQUE INDEX `check_course_videoId_key`(`videoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enroll_course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userid` VARCHAR(191) NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `profile_course` VARCHAR(191) NOT NULL,
    `name_course` VARCHAR(191) NOT NULL,
    `instructor` VARCHAR(191) NOT NULL,
    `status` ENUM('enrolled', 'completed') NOT NULL,
    `review` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `progress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enroll_course_id` INTEGER NOT NULL,
    `watched_progress` INTEGER NOT NULL,
    `course_length` INTEGER NOT NULL,

    UNIQUE INDEX `progress_enroll_course_id_key`(`enroll_course_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_img` VARCHAR(191) NOT NULL,
    `product_name` VARCHAR(191) NOT NULL,
    `product_slug` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `Subtotal` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wishlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `course_img` VARCHAR(191) NOT NULL,
    `course_title` VARCHAR(191) NOT NULL,
    `course_instructor` VARCHAR(191) NOT NULL,
    `course_price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `course_product` ADD CONSTRAINT `course_product_categoryUID_fkey` FOREIGN KEY (`categoryUID`) REFERENCES `category_course`(`category_slug`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_product` ADD CONSTRAINT `course_product_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher_course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tag_course` ADD CONSTRAINT `tag_course_course_info_id_fkey` FOREIGN KEY (`course_info_id`) REFERENCES `course_info`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tags` ADD CONSTRAINT `tags_course_info_id_fkey` FOREIGN KEY (`course_info_id`) REFERENCES `course_info`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requirement` ADD CONSTRAINT `requirement_course_info_id_fkey` FOREIGN KEY (`course_info_id`) REFERENCES `course_info`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course_product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_section` ADD CONSTRAINT `course_section_course_product_name_fkey` FOREIGN KEY (`course_product_name`) REFERENCES `course_product`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_video` ADD CONSTRAINT `course_video_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `course_section`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `check_course` ADD CONSTRAINT `check_course_videoId_fkey` FOREIGN KEY (`videoId`) REFERENCES `course_video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `progress` ADD CONSTRAINT `progress_enroll_course_id_fkey` FOREIGN KEY (`enroll_course_id`) REFERENCES `enroll_course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
