import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
const prisma = new PrismaClient();
export async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@adm.com' },
    update: {},
    create: {
      name: 'Pastor Salomão de Oliveira Gonsalves',
      email: 'admin@adm.com',
      password: await hash('admin123', 12),
      role: 'ADMIN',
    },
  });
  await prisma.user.upsert({
    where: { email: 'financeiro@adm.com' },
    update: {},
    create: {
      name: 'Giulia Galdino do Santo Gonsalves',
      email: 'financeiro@adm.com',
      password: await hash('financeiro123', 12),
      role: 'FINANCE',
    },
  });
  await prisma.user.upsert({
    where: { email: 'secretaria@adm.com' },
    update: {},
    create: {
      name: 'Vittor Emanoel Ramos Silva',
      email: 'secretaria@admin.com',
      password: await hash('secretaria123', 12),
      role: 'SECRETARY',
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
