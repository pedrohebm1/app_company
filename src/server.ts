import { fastify } from "fastify";
import { PrismaClient } from ".prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.listen({
    port: 3333,
}).then(() => {
    console.log("Server running at http://localhost:3333")
})

app.get('/group', async() => {
    const group = await prisma.product_groups_table.findMany();

    return group
})

app.get('/storage', async() => {
    const storage = await prisma.storage_table.findMany();

    return storage
})

app.get('/products', async() => {
    const products = await prisma.products_table.findMany();

    return products
})