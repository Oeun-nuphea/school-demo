import mockData from '../constants/mock.json';
import { Event } from '../types';

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getEvents(locale: 'en' | 'km' = 'en'): Promise<Event[]> {
  await delay(800);
  // Type assertion for now, will be perfectly typed when connected to real API
  const data = (mockData as any)[locale] || (mockData as any).en;
  return data;
}
