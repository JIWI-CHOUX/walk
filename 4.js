let starbucks = [
    {
      name: '카페 라떼',
      icedOnly: false,
    },
    {
      name: '콜드 브루',
      icedOnly: true,
    },
    {
      name: '돌체 라떼',
      icedOnly: false,
    },
    {
      name: '돌체 콜드 브루',
      icedOnly: true,
    },
  ];

  const icedOnly = starbucks.filter(item => item.icedOnly === true);
  
  console.log(icedOnly);