const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

let categoriesData = [
    {
        category: "Mascarillas"
    },
    {
        category: "Depilación"
    },
    {
        category: "Maquillaje"
    },
    {
        category: "Accesorios"
    }
]

let colorsData = [
    {
        color: "Negro"
    },
    {
        color: "Blanco"
    },
    {
        color: "Gris"
    },
    {
        color: "Dorado"
    },
    {
        color: "Plateado"
    },
    {
        color: "Rojo"
    },
    {
        color: "Verde"
    },
    {
        color: "Azul"
    },
    {
        color: "Amarillo"
    },
    {
        color: "Anaranjado"
    },
    {
        color: "Violeta"
    },
    {
        color: "Rosado"
    },
    {
        color: "No aplica"
    }
]

let imagesData = [
    {
        image: "mascarillas-en-gel-con-colageno-pdormir-e-hidratar.png",
        productsId: 1
    },
    {
        image: "mascarilla-aloe-vera.png",
        productsId: 2
    },
    {
        image: "mascarilla-aloe-vera-2.png",
        productsId: 2
    },
    {
        image: "mascarilla-palta.png",
        productsId: 3
    },
    {
        image: "mascarilla-palta-2.png",
        productsId: 3
    },
    {
        image: "mascarilla-berenjena.jpg",
        productsId: 4
    },
    {
        image: "mascarilla-berenjena-2.png",
        productsId: 4
    },
    {
        image: "mascarilla-coco.jpg",
        productsId: 5
    },
    {
        image: "pinza-acero-inoxidable.jpg",
        productsId: 6
    },
    {
        image: "bandas-depilacion-descartable.jpg",
        productsId: 7
    },
    {
        image: "bandas-depilacion-descartable-2.png",
        productsId: 7
    },
    {
        image: "maquina-depiladora.jpg",
        productsId: 8
    },
    {
        image: "maquina-depiladora-2.jpg",
        productsId: 8
    },
    {
        image: "maquina-depiladora-3.jpg",
        productsId: 8
    },
    {
        image: "paleta-maquillaje.jpg",
        productsId: 9
    },
    {
        image: "rimel-mascara-de-prestañas.jpg",
        productsId: 10
    },
    {
        image: "labial-plumping.png",
        productsId: 11
    },
    {
        image: "brocha.jpg",
        productsId: 12
    },
    {
        image: "pulsera-corazón.jpg",
        productsId: 13
    },
    {
        image: "pulsera-corazón-2.jpg",
        productsId: 13
    },
    {
        image: "gomitas-pelo.jpg",
        productsId: 14
    },
    {
        image: "espejo-usb.jpg",
        productsId: 15
    },
    {
        image: "espejo-usb-2.jpg",
        productsId: 15
    },
    {
        image: "espejo-usb-3.jpg",
        productsId: 15
    },
    {
        image: "espejo-usb-4.jpg",
        productsId: 15
    },
    {
        image: "humificador.jpg",
        productsId: 16
    },
    {
        image: "humificador-2.jpg",
        productsId: 16
    }
]

let productsData = [
    {
        name: "x10 Mascarillas en gel con Colageno P/dormir e Hidratar",
        price: 1375.0,
        description: "10 unidades de máscara facial para dormir, sin líquido. Contiene colágeno reafirmante con proteínas",
        discount: 5,
        freeShipping: 0,
        stock: 25,
        categoriesId: 1,
    },
    {
        name: "x5 Mascarillas de Aloe Vera Hidratante y Reparación Anti Age",
        price: 980.0,
        description: "5 unidades de mascarilla con Aloe Vera. Para aplicar en el rostro",
        discount: 0,
        freeShipping: 0,
        stock: 50,
        categoriesId: 1,
    },
    {
        name: "x8 Mascarillas de Crema con Palta y Colágeno",
        price: 3740.0,
        description: "Contiene palta y colágeno. Elimina puntos negros, hidratacion, reparacion facial. Para aplicar en el rostro. Aplicar con espatula dejar secar y retirar. ",
        discount: 10,
        freeShipping: 1,
        stock: 32,
        categoriesId: 1,
    },
    {
        name: "Mascarilla Facial En Barra Berenjena Limpieza Profunda",
        price: 2000.0,
        description: "Mascarilla en barra. Hecha a partir de extracto de berenjena, que puede limpiar eficazmente los poros de la piel, limpiar profundamente la suciedad, ajustar el equilibrio de agua y aceite, reponer la humedad y nutrir. Además, cuenta con un efecto hidratante que ayuda a reducir eficazmente los puntos negros, controlar el aceite, mejorar el brillo facial y aclarar el tono de la piel.",
        discount: 0,
        freeShipping: 1,
        stock: 200,
        categoriesId: 1,
    },
    {
        name: "Mascarilla Facial de Coco Hidratante y Relajante",
        price: 810.0,
        description: "Hechas a base de coco. Ayudan a la piel a lograr abundante humedad e hidratación. Contiene compuestos antioxidantes que favorecen el brillo y la suavidad de la piel.",
        discount: 0,
        freeShipping: 0,
        stock: 300,
        categoriesId: 1,
    },
    {
        name: "Kit De 12 Pinzas De Depilar de Acero Inoxidable",
        price: 5350.0,
        description: "Kit de pinzas para depilar con la punta plana.",
        discount: 0,
        freeShipping: 1,
        stock: 28,
        categoriesId: 2,
    },
    {
        name: "Bandas De Papel x100u Cera Depilación Descartable",
        price: 1245.0,
        description: "Pack de 100 unidades de bandas de papel descartables de cera para depilación.",
        discount: 0,
        freeShipping: 1,
        stock: 28,
        categoriesId: 2,
    },
    {
        name: "Depilador Nasal Oído Y Cejas 2 En 1 Recargable",
        price: 8075.0,
        description: "Máquina depiladora para nariz, oído y cejas. Para 220 voltios. Incluye cepillo limpiador.",
        discount: 5,
        freeShipping: 1,
        stock: 50,
        categoriesId: 2,
    },
    {
        name: "Paleta De Sombra de 18 Colores para Maquillaje de Ojos",
        price: 6380.0,
        description: "Paleta de sombras para maquillaje para ojos. Incluye 18 colores",
        discount: 10,
        freeShipping: 0,
        stock: 40,
        categoriesId: 3,
    },
    {
        name: "Rimel Mascara De Pestañas Color Negro",
        price: 1730.0,
        description: "Máscara de pestañas ideal para lograr volúmen. Color negro.",
        discount: 0,
        freeShipping: 0,
        stock: 90,
        categoriesId: 3,
    },
    {
        name: "Labial Con Colageno para Agrandar Labios Plumping",
        price: 1634.0,
        description: "Labial con colágeno para agrandar labios. Modelo plumping. Voluminizador",
        discount: 0,
        freeShipping: 0,
        stock: 90,
        categoriesId: 3,
    },
    {
        name: "Brocha De Maquillaje Para Sombras Iluminador Contorno",
        price: 1540.0,
        description: "Brocha de maquillaje para ojos, sombras, iluminador, contorno. Cabello de tipo sintético.",
        discount: 0,
        freeShipping: 0,
        stock: 90,
        categoriesId: 3,
    },
    {
        name: "Pulsera corazón de acero inoxidable",
        price: 1760.0,
        description: "Pulsera chic super delicada de acero inoxidable con dije en forma de corazón.",
        discount: 5,
        freeShipping: 0,
        stock: 42,
        categoriesId: 4,
    },
    {
        name: "x6u Gomitas Para El Pelo",
        price: 1090.0,
        description: "Pack de 6 gomitas para el pelo resistentes.",
        discount: 5,
        freeShipping: 0,
        stock: 42,
        categoriesId: 4,
    },
    {
        name: "Espejo Portatil Con Luz Led Ajustable Para Maquillaje USB",
        price: 12400.0,
        description: "Espejo portatil para maquillaje. Cuenta con iluminación led, lo que lo hace perfecto para lograr un mejor maquillaje. Se alimenta mediante cable USB.",
        discount: 15,
        freeShipping: 1,
        stock: 10,
        categoriesId: 4,
    },
    {
        name: "Mini Humificador De Aire Difusor De Aroma Para El Hogar",
        price: 30460.0,
        description: "Humificador pequeño que cuenta con: 7 luces LED, soporte para teléfono móvil, indicador de nivel de agua, capacidad de 1000ml y alimentación USB. Tiene un diámetro de 12cm y una altura de 24cm. Ideal para espacios de 11-30 metros cuadrados.",
        discount: 20,
        freeShipping: 1,
        stock: 20,
        categoriesId: 4,
    }
]

let productsHasColorsData = [
    {
        productsId: 1,
        colorsId: 13,
    },
    {
        productsId: 2,
        colorsId: 13,
    },
    {
        productsId: 3,
        colorsId: 13,
    },
    {
        productsId: 4,
        colorsId: 13,
    },
    {
        productsId: 5,
        colorsId: 13,
    },
    {
        productsId: 6,
        colorsId: 13,
    },
    {
        productsId: 7,
        colorsId: 13,
    },
    {
        productsId: 8,
        colorsId: 4,
    },
    {
        productsId: 9,
        colorsId: 13,
    },
    {
        productsId: 10,
        colorsId: 13,
    },
    {
        productsId: 11,
        colorsId: 13,
    },
    {
        productsId: 12,
        colorsId: 13,
    },
    {
        productsId: 13,
        colorsId: 4,
    },
    {
        productsId: 14,
        colorsId: 1,
    },
    {
        productsId: 14,
        colorsId: 2,
    },
    {
        productsId: 14,
        colorsId: 6,
    },
    {
        productsId: 14,
        colorsId: 12,
    },
    {
        productsId: 15,
        colorsId: 5,
    },
    {
        productsId: 16,
        colorsId: 1,
    },
    {
        productsId: 16,
        colorsId: 2,
    }
]

let provincesData = [
    {
        province: "Misiones"
    },
    {
        province: "San Luis"
    },
    {
        province: "San Juan"
    },
    {
        province: "Entre Ríos"
    },
    {
        province: "Santa Cruz"
    },
    {
        province: "Río Negro"
    },
    {
        province: "Chubut"
    },
    {
        province: "Córdoba"
    },
    {
        province: "Mendoza"
    },
    {
        province: "La Rioja"
    },
    {
        province: "Catamarca"
    },
    {
        province: "La Pampa"
    },
    {
        province: "Santiago del Estero"
    },
    {
        province: "Corrientes"
    },
    {
        province: "Santa Fe"
    },
    {
        province: "Tucumán"
    },
    {
        province: "Neuquén"
    },
    {
        province: "Salta"
    },
    {
        province: "Chaco"
    },
    {
        province: "Formosa"
    },
    {
        province: "Jujuy"
    },
    {
        province: "Ciudad Autónoma de Buenos Aires"
    },
    {
        province: "Buenos Aires"
    },
    {
        province: "Tierra del Fuego, Antártida e Islas del Atlántico Sur"
    },
    {
        province: "Sin información"
    }
]

let usersData = [
    {
        name: "Lorenzo Sanchez",
        email: "lorenzo97sz@gmail.com",
        password: "$2y$10$bUleYsoxNdRyAgnBA6FXJOL0N9Vm3eLD.7/3SZgiynzHtCQaIhokK",
        avatar: "lorenzo-profile.jpeg",
        provincesId: 25,
        userProfilesId: 1,
    },
    {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: '$2a$10$aMYLt2jnLEEQqP6kc2DOAOWAOSqv.l50TrDXVMUpIslN37rvmAw8G',
        avatar: "defaultUser.jpg",
        provincesId: 25,
        userProfilesId: 2,
    },
    {
        name: 'Jorge Rodríguez',
        email: 'jorgito@gmail.com',
        password: '$2a$10$RYPAxH7L9lp7jm9FxMyOY.T05J9Fo2tbx3U/gvv.O7fctgJWRlVgO',
        avatar: "defaultUser.jpg",
        provincesId: 25,
        userProfilesId: 2,
    },
    {
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        password: '$2a$10$uieRfLHEFIRtMjQtvFuq5.XZ3RQfZVlVKB7B8v3vXuq2HtB9hKsUu',
        avatar: "defaultUser.jpg",
        provincesId: 25,
        userProfilesId: 2,
    },
    {
        name: 'María López',
        email: 'maria.lopez@example.com',
        password: '$2a$10$ds6P4b1R2R.s6Yer2O7jq.UXDAI0dmeAdgRIZzn6fyWZ5OnlCMC7q',
        avatar: "defaultUser.jpg",
        city: "Córdoba",
        address: "Calle Falsa 456",
        postalCode: "6871",
        provincesId: 8,
        userProfilesId: 2,
    },
    {
        name: 'Luis González',
        email: 'luis.gonzalez@example.com',
        password: '$2a$10$KjZId4Nedf8X0r5f8v2Qsul.e1H6.c3S0YCV45z8sV0BEIw4sxSyq',
        avatar: "defaultUser.jpg",
        city: "La Plata",
        address: "Calle Falsa 789",
        postalCode: "1900",
        provincesId: 23,
        userProfilesId: 2,
    }
]

let userProfilesData = [
    {
        userProfile: "$2y$10$gQIUorwZWI1OHKxAwb1.uu6xu8gRdOF4trKLaRmriuyfpZrKEvaju"
    },
    {
        userProfile: "$2y$10$TYj.v4CAuTy2nhU1qStLe.Gz9BICQOx1iCTU5tM6fswC0wkSoP78S"
    }
]

async function seed() {
    try {
        await prisma.$transaction([
            prisma.categories.deleteMany(),
            prisma.$queryRaw`ALTER TABLE categories AUTO_INCREMENT = 1`,
            prisma.categories.createMany({
                data: categoriesData
            }),
            prisma.colors.deleteMany(),
            prisma.$queryRaw`ALTER TABLE colors AUTO_INCREMENT = 1`,
            prisma.colors.createMany({
                data: colorsData
            }),
            prisma.products.deleteMany(),
            prisma.$queryRaw`ALTER TABLE products AUTO_INCREMENT = 1`,
            prisma.products.createMany({
                data: productsData
            }),
            prisma.images.deleteMany(),
            prisma.$queryRaw`ALTER TABLE images AUTO_INCREMENT = 1`,
            prisma.images.createMany({
                data: imagesData
            }),
            prisma.productsHasColors.deleteMany(),
            prisma.$queryRaw`ALTER TABLE productsHasColors AUTO_INCREMENT = 1`,
            prisma.productsHasColors.createMany({
                data: productsHasColorsData
            }),
            prisma.provinces.deleteMany(),
            prisma.$queryRaw`ALTER TABLE provinces AUTO_INCREMENT = 1`,
            prisma.provinces.createMany({
                data: provincesData
            }),
            prisma.userProfiles.deleteMany(),
            prisma.$queryRaw`ALTER TABLE userProfiles AUTO_INCREMENT = 1`,
            prisma.userProfiles.createMany({
                data: userProfilesData
            }),
            prisma.users.deleteMany(),
            prisma.$queryRaw`ALTER TABLE users AUTO_INCREMENT = 1`,
            prisma.users.createMany({
                data: usersData
            }),
        ])
        console.log("***** Seeding complete! *****");
    } catch (error) {
        console.log('Seeding error: ' + error);
    } finally {
        await prisma.$disconnect()
    }
};

seed();