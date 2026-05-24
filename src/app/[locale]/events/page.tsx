import { EventsPage } from "@/modules/events/pages/EventsPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <EventsPage locale={locale} />;
}
