export interface ModelCriteria {
  name: string;
  minYear: number;
  maxYear: number;
  minCapacity: number;
  maxCapacity: number;
}

export interface BrandInfo {
  brand: string;
  models: ModelCriteria[];
}

export const CATEGORY_DATA: Record<string, BrandInfo[]> = {
  'Sport': [
    {
      brand: 'Yamaha',
      models: [
        { name: 'R1', minYear: 1998, maxYear: 2024, minCapacity: 998, maxCapacity: 1000 },
        { name: 'R6', minYear: 1999, maxYear: 2023, minCapacity: 599, maxCapacity: 600 },
      ]
    },
    {
      brand: 'Honda',
      models: [
        { name: 'CBR1000RR-R', minYear: 2020, maxYear: 2024, minCapacity: 999, maxCapacity: 1000 },
        { name: 'CBR600RR', minYear: 2003, maxYear: 2024, minCapacity: 599, maxCapacity: 600 },
      ]
    },
    {
      brand: 'Kawasaki',
      models: [
        { name: 'Ninja ZX-10R', minYear: 2004, maxYear: 2024, minCapacity: 998, maxCapacity: 1000 },
        { name: 'Ninja 400', minYear: 2018, maxYear: 2024, minCapacity: 399, maxCapacity: 400 },
      ]
    },
    {
      brand: 'BMW',
      models: [
        { name: 'S1000RR', minYear: 2009, maxYear: 2024, minCapacity: 999, maxCapacity: 1000 },
      ]
    },
    {
      brand: 'Ducati',
      models: [
        { name: 'Panigale V4', minYear: 2018, maxYear: 2024, minCapacity: 1103, maxCapacity: 1103 },
      ]
    }
  ],
  'Naked': [
    {
      brand: 'Yamaha',
      models: [
        { name: 'MT-07', minYear: 2014, maxYear: 2024, minCapacity: 689, maxCapacity: 689 },
        { name: 'MT-09', minYear: 2013, maxYear: 2024, minCapacity: 847, maxCapacity: 890 },
      ]
    },
    {
      brand: 'Honda',
      models: [
        { name: 'CB500F', minYear: 2013, maxYear: 2024, minCapacity: 471, maxCapacity: 471 },
      ]
    },
    {
      brand: 'KTM',
      models: [
        { name: '390 Duke', minYear: 2013, maxYear: 2024, minCapacity: 373, maxCapacity: 399 },
        { name: '1290 Super Duke R', minYear: 2014, maxYear: 2024, minCapacity: 1301, maxCapacity: 1301 },
      ]
    }
  ],
  'Adventure': [
    {
      brand: 'BMW',
      models: [
        { name: 'R1250GS', minYear: 2019, maxYear: 2024, minCapacity: 1254, maxCapacity: 1254 },
        { name: 'F850GS', minYear: 2018, maxYear: 2024, minCapacity: 853, maxCapacity: 853 },
      ]
    },
    {
      brand: 'Yamaha',
      models: [
        { name: 'Tenere 700', minYear: 2019, maxYear: 2024, minCapacity: 689, maxCapacity: 689 },
      ]
    },
    {
      brand: 'Honda',
      models: [
        { name: 'Africa Twin', minYear: 2016, maxYear: 2024, minCapacity: 998, maxCapacity: 1084 },
      ]
    }
  ],
  'Cruiser': [
    {
      brand: 'Harley-Davidson',
      models: [
        { name: 'Fat Boy', minYear: 1990, maxYear: 2024, minCapacity: 1340, maxCapacity: 1868 },
        { name: 'Iron 883', minYear: 2009, maxYear: 2022, minCapacity: 883, maxCapacity: 883 },
      ]
    },
    {
      brand: 'Honda',
      models: [
        { name: 'Rebel 500', minYear: 2017, maxYear: 2024, minCapacity: 471, maxCapacity: 471 },
      ]
    }
  ]
};

export const MOTOR_TYPES = Object.keys(CATEGORY_DATA);
