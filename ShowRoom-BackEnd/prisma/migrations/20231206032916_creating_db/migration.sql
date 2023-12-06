-- CreateTable
CREATE TABLE `Products` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `price` DECIMAL(9, 2) NOT NULL,
    `description` TEXT NULL DEFAULT 'Sin descripción',
    `discount` SMALLINT NULL DEFAULT 0,
    `freeShipping` SMALLINT NULL DEFAULT 0,
    `stock` SMALLINT NULL DEFAULT 0,
    `categoriesId` SMALLINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Images` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `productsId` SMALLINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Colors` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductsHasColors` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `productsId` SMALLINT NOT NULL,
    `colorsId` SMALLINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductsHasSales` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `productsId` SMALLINT NOT NULL,
    `salesId` MEDIUMINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `password` TEXT NOT NULL,
    `avatar` TEXT NOT NULL DEFAULT 'defaultUser.jpg',
    `city` VARCHAR(100) NULL DEFAULT 'Sin info',
    `postalCode` VARCHAR(40) NULL DEFAULT 'Sin info',
    `address` VARCHAR(150) NULL DEFAULT 'Sin info',
    `registerDate` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastVisit` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `provincesId` SMALLINT NOT NULL,
    `userProfilesId` SMALLINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Provinces` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userProfiles` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sales` (
    `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `payMethod` VARCHAR(45) NOT NULL,
    `totalPrice` DECIMAL(8, 2) NOT NULL,
    `usersId` MEDIUMINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_categoriesId_fkey` FOREIGN KEY (`categoriesId`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsHasColors` ADD CONSTRAINT `ProductsHasColors_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsHasColors` ADD CONSTRAINT `ProductsHasColors_colorsId_fkey` FOREIGN KEY (`colorsId`) REFERENCES `Colors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsHasSales` ADD CONSTRAINT `ProductsHasSales_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsHasSales` ADD CONSTRAINT `ProductsHasSales_salesId_fkey` FOREIGN KEY (`salesId`) REFERENCES `Sales`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_provincesId_fkey` FOREIGN KEY (`provincesId`) REFERENCES `Provinces`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_userProfilesId_fkey` FOREIGN KEY (`userProfilesId`) REFERENCES `userProfiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
