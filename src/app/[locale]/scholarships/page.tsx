import { ScholarshipsPage } from "@/modules/scholarships/pages/ScholarshipsPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <ScholarshipsPage locale={locale} />;
}
