import mockData from '../constants/mock.json';
import { AboutInfo } from '../types';

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getAboutInfo(locale: 'en' | 'km' = 'en'): Promise<AboutInfo> {
  await delay(800);
  // Type assertion for now, will be perfectly typed when connected to real API
  const data = (mockData as any)[locale] || (mockData as any).en;
  return data;
}
