// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

const Restaurants = [
  {
    shop_name: "La Pino'z Pizza",
    shop_description: "Pizza, Fast Food, Beverages",
    shop_logo_url:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/lapinozLogo.jpg?raw=true",
    shop_bg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menu_page: [
      {
        menu_page_name: "Takeaway",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
      {
        menu_page_name: "Dining",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
    ],
    is_open: true,
    location: { type: "Point", coordinates: [21.1702, 72.8311] }, // Example coordinates for Surat
    opening_time: "11:00 AM",
    closing_time: "11:00 PM",
    average_cost: "700rs per 2 person",
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
    shop_name: "McDonald's",
    shop_description: "Burgers, Fast Food, Beverages",
    shop_logo_url:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/macD.png?raw=true",
    shop_bg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menu_page: [
      {
        menu_page_name: "Takeaway",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
      {
        menu_page_name: "Dining",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
    ],
    is_open: true,
    location: { type: "Point", coordinates: [21.1702, 72.8311] }, // Example coordinates for Surat
    opening_time: "10:00 AM",
    closing_time: "11:00 PM",
    average_cost: "200rs per person",
    address: {
      line1: "B-102, Rajhans Residency",
      line2: "Opposite VR Mall",
      city: "Surat",
      state: "Gujarat",
      pincode: "395009",
      country: "India",
      isPrimary: true,
    },
  },
  {
    shop_name: "STARBUCKS",
    shop_description: "Coffee, Tea, Bakery",
    shop_logo_url:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/starbucks.png?raw=true",
    shop_bg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menu_page: [
      {
        menu_page_name: "Takeaway",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
      {
        menu_page_name: "Dining",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
    ],
    is_open: true,
    location: { type: "Point", coordinates: [21.1702, 72.8311] }, // Example coordinates for Surat
    opening_time: "8:00 AM",
    closing_time: "10:00 PM",
    average_cost: "300rs per person",
    address: {
      line1: "C-203, Diamond Enclave",
      line2: "Near Athwa Gate",
      city: "Surat",
      state: "Gujarat",
      pincode: "395001",
      country: "India",
      isPrimary: true,
    },
  },
  {
    shop_name: "Burger King",
    shop_description: "Burgers, Fast Food, Beverages",
    shop_logo_url:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/burgerKing.png?raw=true",
    shop_bg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menu_page: [
      {
        menu_page_name: "Takeaway",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
      {
        menu_page_name: "Dining",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
    ],
    is_open: true,
    location: { type: "Point", coordinates: [21.1702, 72.8311] }, // Example coordinates for Surat
    opening_time: "10:30 AM",
    closing_time: "10:00 PM",
    average_cost: "250rs per person",
    address: {
      line1: "D-401, Shanti Apartment",
      line2: "Behind Iscon Mall",
      city: "Surat",
      state: "Gujarat",
      pincode: "395002",
      country: "India",
      isPrimary: true,
    },
  },
  {
    shop_name: "KFC",
    shop_description: "Chicken, Burgers, Fast Food",
    shop_logo_url:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/kfc.png?raw=true",
    shop_bg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menu_page: [
      {
        menu_page_name: "Takeaway",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
      {
        menu_page_name: "Dining",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
    ],
    is_open: true,
    location: { type: "Point", coordinates: [21.1702, 72.8311] }, // Example coordinates for Surat
    opening_time: "10:00 AM",
    closing_time: "11:00 PM",
    average_cost: "300rs per person",
    address: {
      line1: "E-301, Nandanvan Society",
      line2: "Near Adajan",
      city: "Surat",
      state: "Gujarat",
      pincode: "395003",
      country: "India",
      isPrimary: true,
    },
  },
  {
    shop_name: "Coffee Culture",
    shop_description: "Coffee, Tea, Snacks",
    shop_logo_url:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/coffieCulture.png?raw=true",
    shop_bg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menu_page: [
      {
        menu_page_name: "Takeaway",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
      {
        menu_page_name: "Dining",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
    ],
    is_open: true,
    location: { type: "Point", coordinates: [21.1702, 72.8311] }, // Example coordinates for Surat
    opening_time: "7:00 AM",
    closing_time: "11:00 PM",
    average_cost: "150rs per person",
    address: {
      line1: "F-102, Jalaram Complex",
      line2: "Opposite Railway Station",
      city: "Surat",
      state: "Gujarat",
      pincode: "395004",
      country: "India",
      isPrimary: true,
    },
  },
  {
    shop_name: "Malhar Dosa",
    shop_description: "South Indian Food, Dosas', Idlis'",
    shop_logo_url:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/malhar.png?raw=true",
    shop_bg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menu_page: [
      {
        menu_page_name: "Takeaway",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
      {
        menu_page_name: "Dining",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
    ],
    is_open: true,
    location: { type: "Point", coordinates: [21.1702, 72.8311] }, // Example coordinates for Surat
    opening_time: "8:00 AM",
    closing_time: "10:00 PM",
    average_cost: "100rs per person",
    address: {
      line1: "G-201, Aakash Residency",
      line2: "Near Vesu",
      city: "Surat",
      state: "Gujarat",
      pincode: "395006",
      country: "India",
      isPrimary: true,
    },
  },
  {
    shop_name: "Tea Post",
    shop_description: "Tea, Snacks, Beverages",
    shop_logo_url:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/teaPost.png?raw=true",
    shop_bg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menu_page: [
      {
        menu_page_name: "Takeaway",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
      {
        menu_page_name: "Dining",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
    ],
    is_open: true,
    location: { type: "Point", coordinates: [21.1702, 72.8311] }, // Example coordinates for Surat
    opening_time: "7:30 AM",
    closing_time: "11:00 PM",
    average_cost: "80rs per person",
    address: {
      line1: "H-401, Panchvati Society",
      line2: "Near Piplod",
      city: "Surat",
      state: "Gujarat",
      pincode: "395010",
      country: "India",
      isPrimary: true,
    },
  },
  {
    shop_name: "Subway",
    shop_description: "Sandwiches, Salads, Wraps",
    shop_logo_url:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodShopsLogo/subway.png?raw=true",
    shop_bg: {
      bg1: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg1.jpg?raw=true",
      bg2: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg2.jpg?raw=true",
      bg3: "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/bg3.jpg?raw=true",
    },
    menu_page: [
      {
        menu_page_name: "Takeaway",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
      {
        menu_page_name: "Dining",
        menu_page_image:
          "https://github.com/Nimit19/foodPlazaImages/blob/master/FoodImages/Lapinoz/menu1.jpg?raw=true",
      },
    ],
    is_open: true,
    location: { type: "Point", coordinates: [21.1702, 72.8311] }, // Example coordinates for Surat
    opening_time: "10:00 AM",
    closing_time: "10:00 PM",
    average_cost: "250rs per person",
    address: {
      line1: "I-203, Harmony Heights",
      line2: "Near Pal",
      city: "Surat",
      state: "Gujarat",
      pincode: "395005",
      country: "India",
      isPrimary: true,
    },
  },
];
