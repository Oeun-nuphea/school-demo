import eventsData from '@/data/events.json';
import lecturersData from '@/data/lecturers.json';
import alumniData from '@/data/alumni.json';
import programsData from '@/data/programs.json';
import scholarshipsData from '@/data/scholarships.json';
import achievementsData from '@/data/achievements.json';
import aboutData from '@/data/about.json';

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getEvents(locale: 'en' | 'km' = 'en') {
  await delay(800);
  return (eventsData as any)[locale] || (eventsData as any).en;
}

export async function getLecturers(locale: 'en' | 'km' = 'en') {
  await delay(800);
  return (lecturersData as any)[locale] || (lecturersData as any).en;
}

export async function getAlumni(locale: 'en' | 'km' = 'en') {
  await delay(800);
  return (alumniData as any)[locale] || (alumniData as any).en;
}

export async function getPrograms(locale: 'en' | 'km' = 'en') {
  await delay(800);
  return (programsData as any)[locale] || (programsData as any).en;
}

export async function getScholarships(locale: 'en' | 'km' = 'en') {
  await delay(800);
  return (scholarshipsData as any)[locale] || (scholarshipsData as any).en;
}

export async function getAchievements(locale: 'en' | 'km' = 'en') {
  await delay(800);
  return (achievementsData as any)[locale] || (achievementsData as any).en;
}

export async function getAboutInfo(locale: 'en' | 'km' = 'en') {
  await delay(800);
  return (aboutData as any)[locale] || (aboutData as any).en;
}
