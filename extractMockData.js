const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync('src/dictionaries/en.json', 'utf8'));
const km = JSON.parse(fs.readFileSync('src/dictionaries/km.json', 'utf8'));

const extractItemsAsArray = (enItems, kmItems) => {
  const result = { en: [], km: [] };
  if (!enItems) return result;
  for (const key of Object.keys(enItems)) {
    result.en.push({ id: key, ...enItems[key] });
    result.km.push({ id: key, ...(kmItems[key] || {}) });
  }
  return result;
};

// 1. Alumni
const alumni = extractItemsAsArray(en.alumni.items, km.alumni.items);
fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/alumni.json', JSON.stringify(alumni, null, 2));

// 2. Programs
const programs = extractItemsAsArray(en.programs.items, km.programs.items);
fs.writeFileSync('src/data/programs.json', JSON.stringify(programs, null, 2));

// 3. Scholarships
const scholarships = extractItemsAsArray(en.scholarships.items, km.scholarships.items);
fs.writeFileSync('src/data/scholarships.json', JSON.stringify(scholarships, null, 2));

// 4. Achievements
const achievements = extractItemsAsArray(en.achievements.items, km.achievements.items);
fs.writeFileSync('src/data/achievements.json', JSON.stringify(achievements, null, 2));

// 5. About (Founder / Principle info)
const aboutInfo = {
  en: {
    historyP1: en.about.historyP1,
    historyP2: en.about.historyP2,
    founderName: en.about.founderName,
    founderRole: en.about.founderRole,
    founderBio: en.about.founderBio,
    values: Object.keys(en.about.values).map(k => ({ id: k, ...en.about.values[k] }))
  },
  km: {
    historyP1: km.about.historyP1,
    historyP2: km.about.historyP2,
    founderName: km.about.founderName,
    founderRole: km.about.founderRole,
    founderBio: km.about.founderBio,
    values: Object.keys(km.about.values).map(k => ({ id: k, ...km.about.values[k] }))
  }
};
fs.writeFileSync('src/data/about.json', JSON.stringify(aboutInfo, null, 2));

// We already have events and lecturers in mockDb.json, let's extract them into separate files too.
const mockDb = JSON.parse(fs.readFileSync('src/data/mockDb.json', 'utf8'));
fs.writeFileSync('src/data/events.json', JSON.stringify(mockDb.events, null, 2));
fs.writeFileSync('src/data/lecturers.json', JSON.stringify(mockDb.lecturers, null, 2));

console.log('Extraction complete');
