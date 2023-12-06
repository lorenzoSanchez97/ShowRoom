const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const { excludeFields } = require("../helpers/helpers")
const path = require("path");
const fs = require('fs');

const controller = {
    productsList: async (req, res) => {
        try {
            let products = await prisma.products.findMany({
                include: {
                    images: true,
                    categories: true,
                    colors: true,
                    sales: true
                }
            });

            products = excludeFields(products, "categoriesId")

            if (products.length < 1) {
                return res.status(404).json({
                    meta: {
                        status: 404
                    },
                    data: "There are no products in database"
                });
            }

            const productWithImgUrl = products.map(product => {
                const productImgs = product.images.map(image => ({ url: `${req.protocol}://${req.get('host')}/images/products/${image.name}` }))

                return {
                    ...product,
                    images: productImgs
                }
            })

            res.status(200).json(
                {
                    meta: {
                        status: 200,
                    },
                    data: productWithImgUrl
                }
            )

        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    }
}

module.exports = controller;