import { BlogPage } from "@/modules/blog/pages/BlogPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <BlogPage locale={locale} />;
}
