import { AlumniPage } from "@/modules/alumni/pages/AlumniPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <AlumniPage locale={locale} />;
}
