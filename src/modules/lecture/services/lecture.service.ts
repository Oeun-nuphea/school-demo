import mockData from '../constants/mock.json';
import { Lecturer } from '../types';

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getLecturers(locale: 'en' | 'km' = 'en'): Promise<Lecturer[]> {
  await delay(800);
  // Type assertion for now, will be perfectly typed when connected to real API
  const data = (mockData as any)[locale] || (mockData as any).en;
  return data;
}
