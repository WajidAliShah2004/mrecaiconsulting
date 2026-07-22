import WhitePaperEditor from '@/pages/admin/WhitePaperEditor';

// Static export placeholder: the .htaccess rewrites /admin/white-papers/edit/<id> to this
// page's HTML and the editor reads the real id from the URL after hydration.
export function generateStaticParams() {
  return [{ id: '_' }];
}

export default function Page() {
  return <WhitePaperEditor />;
}
