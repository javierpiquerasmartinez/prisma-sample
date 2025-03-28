import { PrismaClient } from '@prisma/client';
import { profile } from 'console';

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true
    }
  }
  )
  console.log(allUsers)
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