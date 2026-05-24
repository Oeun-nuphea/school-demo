import { AchievementsPage } from "@/modules/achievements/pages/AchievementsPage";

export default async function Page({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  return <AchievementsPage locale={locale} />;
}
