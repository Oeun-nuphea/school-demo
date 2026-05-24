import { AdmissionsPage } from "@/modules/admissions/pages/AdmissionsPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <AdmissionsPage locale={locale} />;
}
