import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@dior.host';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: Role.ADMIN,
      isEmailVerified: true,
    },
  });

  console.log('✅ Created admin user:', admin.email);

  // Create test user
  const testUser = await prisma.user.upsert({
    where: { email: 'user@dior.host' },
    update: {},
    create: {
      email: 'user@dior.host',
      passwordHash: await bcrypt.hash('user123', 10),
      firstName: 'Test',
      lastName: 'User',
      role: Role.USER,
      isEmailVerified: true,
    },
  });

  console.log('✅ Created test user:', testUser.email);

  console.log('✨ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

