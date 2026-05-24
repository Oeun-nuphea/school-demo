import { ContactPage } from "@/modules/contact/pages/ContactPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <ContactPage locale={locale} />;
}
