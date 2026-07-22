import type { Metadata } from 'next';

// Admin pages render without the public site chrome (Navbar/Footer),
// matching the original react-router structure, and are never indexed.
export const metadata: Metadata = {
  title: { absolute: 'Admin | MRECAI' },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
