export const SERVICE_LOCATIONS = [
  {
    slug: 'jayanagar',
    name: 'Jayanagar',
    nearby: ['Jayanagar 3rd Block', 'Jayanagar 4th Block', 'KR Garden', 'Dollars Colony', 'Jayanagar East'],
    keywords: ['laundry service Jayanagar', 'wash and fold Jayanagar', 'dry cleaning Jayanagar', 'laundry pickup Jayanagar']
  },
  {
    slug: 'jp-nagar',
    name: 'JP Nagar',
    nearby: ['JP Nagar 1st Phase', 'JP Nagar 2nd Phase', 'JP Nagar 3rd Phase', 'JP Nagar 4th Phase', 'JP Nagar 5th Phase'],
    keywords: ['laundry service JP Nagar', 'wash and iron JP Nagar', 'laundry pickup JP Nagar', 'dry cleaning JP Nagar']
  },
  {
    slug: 'btm-layout',
    name: 'BTM Layout',
    nearby: ['BTM 1st Stage', 'BTM 2nd Stage', 'Kasuvenahalli', 'Srirampura'],
    keywords: ['laundry service BTM Layout', 'wash and fold BTM', 'laundry near BTM', 'laundry pickup BTM']
  },
  {
    slug: 'koramangala',
    name: 'Koramangala',
    nearby: ['1st Block', '2nd Block', '3rd Block', '4th Block', '5th Block', '6th Block', '7th Block', '8th Block', 'Jakkasandra', 'KHB Colony'],
    keywords: ['laundry service Koramangala', 'wash and fold Koramangala', 'dry cleaning Koramangala', 'laundry near Koramangala']
  },
  {
    slug: 'hsr-layout',
    name: 'HSR Layout',
    nearby: ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 6', 'Sector 7', 'SS Colony', 'Hosapalya'],
    keywords: ['laundry service HSR Layout', 'wash and iron HSR', 'laundry pickup HSR Layout', 'laundry near HSR']
  },
  {
    slug: 'kudlu',
    name: 'Kudlu',
    nearby: ['HSR Extension', 'Kudlu Gate', 'Kudlu Main Road', 'Kudlu Bus Stop', 'Gottigere'],
    keywords: ['laundry service Kudlu', 'laundry pickup Kudlu', 'wash and fold Kudlu', 'kudlu laundry service']
  },
  {
    slug: 'bommanahalli',
    name: 'Bommanahalli',
    nearby: ['Begur', 'Bommanahalli Main Road', 'Bommanahalli Circle', 'Chowdeshwari Layout', 'Devarachikkanna Layout'],
    keywords: ['laundry service Bommanahalli', 'laundry in Bommanahalli', 'laundry pickup Bommanahalli', 'bommanahalli laundry']
  },
  {
    slug: 'wilson-garden',
    name: 'Wilson Garden',
    nearby: ['Wilson Garden 1st Stage', 'Wilson Garden 2nd Stage', 'Lakkasandra', 'Saidulu Layout'],
    keywords: ['laundry service Wilson Garden', 'laundry pickup Wilson Garden', 'wash and fold Wilson Garden', 'wilson garden laundry']
  },
  {
    slug: 'shanti-nagar',
    name: 'Shanti Nagar',
    nearby: ['Shanti Nagar Main Road', 'Shanti Nagar Bus Stand', 'Shanti Nagar Theatre', 'Lakshmi Road'],
    keywords: ['laundry service Shanti Nagar', 'laundry pickup Shanti Nagar', 'wash and iron Shanti Nagar', 'shanti nagar laundry']
  },
  {
    slug: 'adugodi',
    name: 'Adugodi',
    nearby: ['Adugodi Main Road', 'Adugodi Police Station', 'Kodihalli', 'C V Raman Nagar', 'Central East Bangalore'],
    keywords: ['laundry service Adugodi', 'laundry pickup Adugodi', 'laundry near Adugodi', 'wash and fold Adugodi']
  },
  {
    slug: 'sg-palya',
    name: 'SG Palya',
    nearby: ['SG Palya Main Road', 'Devarachikkanna Layout', 'Vishnu Garden', 'Muneshwara Layout', 'Bhadrappa Layout'],
    keywords: ['laundry service SG Palya', 'laundry pickup SG Palya', 'sg palya laundry', 'wash and fold SG Palya']
  },
  {
    slug: 'tavarekere',
    name: 'Tavarekere',
    nearby: ['Tavarekere Main Road', 'Tavarekere Bus Stop', 'Devaiahnapalya', 'Shampura', 'Madiwala'],
    keywords: ['laundry service Tavarekere', 'laundry pickup Tavarekere', 'tavarekere laundry', 'wash and fold Tavarekere']
  },
  {
    slug: 'madiwala',
    name: 'Madiwala',
    nearby: ['Madiwala Main Road', 'Madiwala Bus Stand', 'Bishop Cotton School Road', 'Madiwala Police Station', 'Madiwala Checkpost'],
    keywords: ['laundry service Madiwala', 'laundry in Madiwala', 'laundry near Madiwala', 'wash and fold Madiwala']
  },
  {
    slug: 's-r-layout',
    name: 'S R Layout',
    nearby: ['S R Layout Main Road', 'Puttanna Garden', 'Gurappanapalya', 'Roopena Agrahara'],
    keywords: ['laundry service S R Layout', 'laundry pickup SR Layout', 's r layout laundry', 'laundry in SR Layout']
  },
];

export const ALL_LOCATION_NAMES = SERVICE_LOCATIONS.map(l => l.name);
export const ALL_LOCATION_SLUGS = SERVICE_LOCATIONS.map(l => l.slug);

export const REMOVED_LOCATIONS = [
  { slug: 'whitefield', name: 'Whitefield' },
  { slug: 'indiranagar', name: 'Indiranagar' },
  { slug: 'marathahalli', name: 'Marathahalli' },
  { slug: 'electronic-city', name: 'Electronic City' },
  { slug: 'bellandur', name: 'Bellandur' },
];

export const formatLocationSlug = (slug) => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const getLocationBySlug = (slug) => {
  return SERVICE_LOCATIONS.find(l => l.slug === slug);
};
