
// import { prisma } from "@/lib/prisma";
import { prisma } from "./prisma";
import {products, users} from "./sample_data";

async function main(){
    await prisma.product.deleteMany(); // Deletes all the data in product table
    await prisma.account.deleteMany(); 
    await prisma.session.deleteMany(); 
    await prisma.verificationToken.deleteMany(); 
    await prisma.user.deleteMany(); 

    await prisma.product.createMany({data: products});
    await prisma.user.createMany({data: users});

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

