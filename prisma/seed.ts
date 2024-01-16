import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
const prisma = new PrismaClient();
export async function main() {
  await prisma.admin.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      name: 'Pastor Salomão de Oliveira Gonsalves',
      email: 'admin@admin.com',
      password: await hash('admin123', 12),
      role: 'ADMIN',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
