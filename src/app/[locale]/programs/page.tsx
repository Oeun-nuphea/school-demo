import { ProgramListPage } from "@/modules/programs/pages/ProgramListPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <ProgramListPage locale={locale} />;
}
