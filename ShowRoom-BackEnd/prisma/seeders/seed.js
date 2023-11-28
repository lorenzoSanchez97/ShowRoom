const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

let products = [
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
        name: "Mascarilla Facial de Coco Hidratante y Relajante ",
        price: 810.0,
        description: "Hechas a base de coco. Ayudan a la piel a lograr abundante humedad e hidratación. Contiene compuestos antioxidantes que favorecen el brillo y la suavidad de la piel.",
        discount: 0,
        freeShipping: 0,
        stock: 300,
        categoriesId: 1,
    }
]

async function seed() {
    try {
        await prisma.products.createMany({
            data: products
        })
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect()
    }
}