import { redirect } from 'next/navigation';

// Retired page — permanently redirected (see vercel.json).
export default function Page() {
  redirect('/services/business-consulting');
}
