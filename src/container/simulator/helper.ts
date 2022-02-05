export const formatObjectShowTabs = () => {
  const income = [
    {
      title: 'Bruto',
      id: 0,
    },
    {
      title: 'Líquido',
      id: 1,
    },
  ];

  const indexing = [
    {
      title: 'PRÉ',
      id: 0,
    },
    {
      title: 'PÓS',
      id: 1,
    },
    {
      title: 'FIXADO',
      id: 2,
    },
  ];

  return { income, indexing };
};
