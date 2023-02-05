export const objTreeFixtures = [
  {
    value: {
      name: 1,
      items: [
        {
          name: 2,
          items: [{ name: 3 }, { name: 4 }],
        },
        {
          name: 5,
          items: [{ name: 6 }],
        },
      ],
    },
    expectValue: `|1
|  |__2
|    |____3
|    |____4
|  |__5
|    |____6`,
  },
  {
    value: {
      name: 1,
      items: [
        {
          name: 2,
          items: [{ name: 3 }, { name: 4 }],
        },
        {
          name: 5,
          items: [{ name: 6, items: [{ name: 7 }, { name: 8 }] }],
        },
      ],
    },
    expectValue: `|1
|  |__2
|    |____3
|    |____4
|  |__5
|    |____6
|      |______7
|      |______8`,
  },
  {
    value: {
      name: 1,
    },
    expectValue: `|1`,
  },
];
