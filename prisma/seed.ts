// import { PrismaClient } from '@prisma/client';
// import { hash } from 'bcryptjs';
// const prisma = new PrismaClient();
// export async function main() {
//   const admin = await prisma.user.upsert({
//     where: { email: 'admin@adm.com' },
//     update: {},
//     create: {
//       name: 'Pastor Salomão de Oliveira Gonsalves',
//       email: 'admin@adm.com',
//       password: await hash('admin123', 12),
//     },
//   });
//   await prisma.user.upsert({
//     where: { email: 'financeiro@adm.com' },
//     update: {},
//     create: {
//       name: 'Giulia Galdino do Santo Gonsalves',
//       email: 'financeiro@adm.com',
//       password: await hash('financeiro123', 12),
//       role: 'FINANCE',
//     },
//   });
//   await prisma.user.upsert({
//     where: { email: 'secretaria@adm.com' },
//     update: {},
//     create: {
//       name: 'Vittor Emanoel Ramos Silva',
//       email: 'secretaria@admin.com',
//       password: await hash('secretaria123', 12),
//     },
//   });
//   await prisma.church.upsert({
//     where: { name: 'Sede' },
//     update: {},
//     create: {
//       name: 'Sede',
//       userId: admin.id,
//     },
//   });
//   await prisma.office.upsert({
//     where: { name: 'Cooperador(a)' },
//     update: {},
//     create: {
//       name: 'Cooperador(a)',
//     },
//   });
//   await prisma.office.upsert({
//     where: { name: 'Diacono' },
//     update: {},
//     create: {
//       name: 'Diacono',
//     },
//   });
//   await prisma.office.upsert({
//     where: { name: 'Diaconisa' },
//     update: {},
//     create: {
//       name: 'Diaconisa',
//     },
//   });
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
