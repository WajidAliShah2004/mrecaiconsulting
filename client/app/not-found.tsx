import type { Metadata } from 'next';
import Layout from '../src/layouts/Layout';
import NotFound from '../src/views/NotFound';

export const metadata: Metadata = {
  title: { absolute: '404 - Page Not Found | MRECAI' },
  description:
    "The page you're looking for doesn't exist. Return to MRECAI homepage for business consulting, insurance services, and more.",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
}
