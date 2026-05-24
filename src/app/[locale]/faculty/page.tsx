import { FacultyPage } from "@/modules/faculty/pages/FacultyPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <FacultyPage locale={locale} />;
}
