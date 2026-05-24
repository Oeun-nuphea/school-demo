import { LecturePage } from "@/modules/lecture/pages/LecturePage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <LecturePage locale={locale} />;
}
