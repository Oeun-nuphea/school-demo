import { AboutPage } from "@/modules/about/pages/AboutPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}
