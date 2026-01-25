
import { prisma } from "@/lib/prisma";
import {products} from "./sample_data";

async function main(){
    await prisma.product.deleteMany(); // Deletes all the data in table
    await prisma.product.createMany({data: products});
    console.log("Data seeded successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

