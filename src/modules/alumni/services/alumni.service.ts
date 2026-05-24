import mockData from '../constants/mock.json';
import { Alumni } from '../types';

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getAlumni(locale: 'en' | 'km' = 'en'): Promise<Alumni[]> {
  await delay(800);
  // Type assertion for now, will be perfectly typed when connected to real API
  const data = (mockData as any)[locale] || (mockData as any).en;
  return data;
}
