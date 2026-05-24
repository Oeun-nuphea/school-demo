import { NewsPage } from "@/modules/news/pages/NewsPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <NewsPage locale={locale} />;
}
