const Restaurants = [
  {
    id: "s1",
    shopName: "La Pino'z Pizza",
    shopDescription: "Pizza, Fast Food, Beverages",
    shopLogoUrl:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/lapinozLogo.jpg?raw=true",
    shopBg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menuPage: [
      {
        menuPageName: "Takeaway",
        menuPageImage: "",
      },
      {
        menuPageName: "Dining",
        menuPageImage: "",
      },
    ],
    isOpen: true,
    location: "",
    openingTime: "11:00 AM",
    closingTime: "11:00 PM",
    averageCost: "700rs per 2 person",
    ratings: 4.5,
    address: {
      line1: "A-301, Swaminarayan Society",
      line2: "Near City Light Road",
      city: "Surat",
      state: "Gujarat",
      pincode: "395007",
      country: "India",
      isPrimary: true,
    },
  },
  {
    id: "s2",
    shopName: "McDonald's",
    shopDescription: "Burgers, Fast Food, Beverages",
    shopLogoUrl:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/macD.png?raw=true",
    shopBg: {
      bg1: "",
      bg2: "",
      bg3: "",
    },
    menuPage: [
      {
        menuPageName: "",
        menuPageImage: "",
      },
      {
        menuPageName: "",
        menuPageImage: "",
      },
    ],
    isOpen: true,
    location: "",
    openingTime: "10:00 AM",
    closingTime: "11:00 PM",
    averageCost: "200rs per person",
    address: {
      line1: "B-102, Rajhans Residency",
      line2: "Opposite VR Mall",
      city: "Surat",
      state: "Gujarat",
      pincode: "395009",
      country: "India",
      isPrimary: false,
    },
  },
  {
    id: "s3",
    shopName: "STARBUCKS",
    shopDescription: "Coffee, Tea, Bakery",
    shopLogoUrl:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/starbucks.png?raw=true",
    shopBg: {
      bg1: "",
      bg2: "",
      bg3: "",
    },
    menuPage: [
      {
        menuPageName: "",
        menuPageImage: "",
      },
      {
        menuPageName: "",
        menuPageImage: "",
      },
    ],
    isOpen: true,
    location: "",
    openingTime: "8:00 AM",
    closingTime: "10:00 PM",
    averageCost: "300rs per person",
    address: {
      line1: "C-203, Diamond Enclave",
      line2: "Near Athwa Gate",
      city: "Surat",
      state: "Gujarat",
      pincode: "395001",
      country: "India",
      isPrimary: false,
    },
  },
  {
    id: "s4",
    shopName: "Burger King",
    shopDescription: "Burgers, Fast Food, Beverages",
    shopLogoUrl:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/burgerKing.png?raw=true",
    shopBg: {
      bg1: "",
      bg2: "",
      bg3: "",
    },
    menuPage: [
      {
        menuPageName: "",
        menuPageImage: "",
      },
      {
        menuPageName: "",
        menuPageImage: "",
      },
    ],
    isOpen: true,
    location: "",
    openingTime: "10:30 AM",
    closingTime: "10:00 PM",
    averageCost: "250rs per person",
    address: {
      line1: "D-401, Shanti Apartment",
      line2: "Behind Iscon Mall",
      city: "Surat",
      state: "Gujarat",
      pincode: "395002",
      country: "India",
      isPrimary: false,
    },
  },
  {
    id: "s5",
    shopName: "KFC",
    shopDescription: "Chicken, Burgers, Fast Food",
    shopLogoUrl:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/kfc.png?raw=true",
    shopBg: {
      bg1: "",
      bg2: "",
      bg3: "",
    },
    menuPage: [
      {
        menuPageName: "",
        menuPageImage: "",
      },
      {
        menuPageName: "",
        menuPageImage: "",
      },
    ],
    isOpen: true,
    location: "",
    openingTime: "10:00 AM",
    closingTime: "11:00 PM",
    averageCost: "300rs per person",
    address: {
      line1: "E-301, Nandanvan Society",
      line2: "Near Adajan",
      city: "Surat",
      state: "Gujarat",
      pincode: "395003",
      country: "India",
      isPrimary: false,
    },
  },
  {
    id: "s6",
    shopName: "Coffee Culture",
    shopDescription: "Coffee, Tea, Snacks",
    shopLogoUrl:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/coffieCulture.png?raw=true",
    shopBg: {
      bg1: "",
      bg2: "",
      bg3: "",
    },
    menuPage: [
      {
        menuPageName: "",
        menuPageImage: "",
      },
      {
        menuPageName: "",
        menuPageImage: "",
      },
    ],
    isOpen: true,
    location: "",
    openingTime: "7:00 AM",
    closingTime: "11:00 PM",
    averageCost: "150rs per person",
    address: {
      line1: "F-102, Jalaram Complex",
      line2: "Opposite Railway Station",
      city: "Surat",
      state: "Gujarat",
      pincode: "395004",
      country: "India",
      isPrimary: false,
    },
  },
  {
    id: "s7",
    shopName: "Malhar Dosa",
    shopDescription: "South Indian Food, Dosas', Idlis'",
    shopLogoUrl:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/malhar.png?raw=true",
    shopBg: {
      bg1: "",
      bg2: "",
      bg3: "",
    },
    menuPage: [
      {
        menuPageName: "",
        menuPageImage: "",
      },
      {
        menuPageName: "",
        menuPageImage: "",
      },
    ],
    isOpen: true,
    location: "",
    openingTime: "8:00 AM",
    closingTime: "10:00 PM",
    averageCost: "100rs per person",
    address: {
      line1: "G-201, Aakash Residency",
      line2: "Near Vesu",
      city: "Surat",
      state: "Gujarat",
      pincode: "395006",
      country: "India",
      isPrimary: false,
    },
  },
  {
    id: "s8",
    shopName: "Tea Post",
    shopDescription: "Tea, Snacks, Beverages",
    shopLogoUrl:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/teaPost.png?raw=true",
    shopBg: {
      bg1: "",
      bg2: "",
      bg3: "",
    },
    menuPage: [
      {
        menuPageName: "",
        menuPageImage: "",
      },
      {
        menuPageName: "",
        menuPageImage: "",
      },
    ],
    isOpen: true,
    location: "",
    openingTime: "7:30 AM",
    closingTime: "11:00 PM",
    averageCost: "80rs per person",
    address: {
      line1: "H-401, Panchvati Society",
      line2: "Near Piplod",
      city: "Surat",
      state: "Gujarat",
      pincode: "395010",
      country: "India",
      isPrimary: false,
    },
  },
  {
    id: "s9",
    shopName: "Subway",
    shopDescription: "Sandwiches, Salads, Wraps",
    shopLogoUrl:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/subway.png?raw=true",
    shopBg: {
      bg1: "",
      bg2: "",
      bg3: "",
    },
    menuPage: [
      {
        menuPageName: "",
        menuPageImage: "",
      },
      {
        menuPageName: "",
        menuPageImage: "",
      },
    ],
    isOpen: true,
    location: "",
    openingTime: "10:00 AM",
    closingTime: "10:00 PM",
    averageCost: "250rs per person",
    address: {
      line1: "I-203, Harmony Heights",
      line2: "Near Pal",
      city: "Surat",
      state: "Gujarat",
      pincode: "395005",
      country: "India",
      isPrimary: false,
    },
  },
];
