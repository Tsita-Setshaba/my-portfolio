// Mock data for Mamalisa Restaurant

export const restaurantInfo = {
  name: "Mamalisa Restaurant",
  tagline: "Fine Dining by Day, Live Entertainment by Night",
  location: "Polokwane, Limpopo, South Africa",
  phone: "+27 (0)15 123 4567",
  email: "info@mamalisarestaurant.co.za",
  whatsapp: "+27 71 234 5678",
  address: "123 Main Street, Polokwane, Limpopo, 0700",

  hours: {
    restaurant: "Monday - Sunday: 11:00 AM - 11:00 PM",
    bar: "Monday - Sunday: 5:00 PM - 2:00 AM",
    liquorStore: "Monday - Saturday: 10:00 AM - 8:00 PM, Sunday: 10:00 AM - 6:00 PM"
  },

  socialMedia: {
    facebook: "https://facebook.com/mamalisarestaurant",
    instagram: "https://instagram.com/mamalisarestaurant",
    twitter: "https://twitter.com/mamalisapolokwane"
  }
};

export const menuCategories = {
  starters: [
    {
      id: 1,
      name: "Calamari Griglia",
      description: "Grilled calamari with lemon butter and herb-infused olive oil",
      price: "R125",
      image: "https://images.unsplash.com/photo-1623073284788-0d846f75e329"
    },
    {
      id: 2,
      name: "Beef Carpaccio",
      description: "Thinly sliced beef with rocket, parmesan, and truffle oil",
      price: "R145",
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab"
    },
    {
      id: 3,
      name: "Oysters Rockefeller",
      description: "Fresh oysters with spinach, herbs, and parmesan cheese",
      price: "R165",
      image: "https://images.unsplash.com/photo-1663530761401-15eefb544889"
    }
  ],
  mains: [
    {
      id: 4,
      name: "Ribeye Steak",
      description: "300g aged ribeye with seasonal vegetables and truffle mash",
      price: "R285",
      dietary: ["Gluten-Free"],
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab"
    },
    {
      id: 5,
      name: "Pan-Seared Salmon",
      description: "Atlantic salmon with lemon butter sauce and asparagus",
      price: "R245",
      dietary: ["Gluten-Free"],
      image: "https://images.unsplash.com/photo-1663530761401-15eefb544889"
    },
    {
      id: 6,
      name: "Lamb Shank",
      description: "Slow-braised lamb shank with rosemary jus and root vegetables",
      price: "R265",
      image: "https://images.unsplash.com/photo-1623073284788-0d846f75e329"
    }
  ],
  desserts: [
    {
      id: 7,
      name: "Chocolate Fondant",
      description: "Warm chocolate lava cake with vanilla ice cream",
      price: "R95",
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab"
    },
    {
      id: 8,
      name: "Crème Brûlée",
      description: "Classic French custard with caramelized sugar top",
      price: "R85",
      image: "https://images.unsplash.com/photo-1623073284788-0d846f75e329"
    }
  ]
};

export const drinksMenu = {
  cocktails: [
    { id: 1, name: "Mamalisa Signature Martini", description: "Premium vodka, dry vermouth, olive twist", price: "R85" },
    { id: 2, name: "Polokwane Sunset", description: "Rum, passion fruit, lime, mint", price: "R75" },
    { id: 3, name: "Mojito", description: "White rum, lime, mint, soda", price: "R65" },
    { id: 4, name: "Old Fashioned", description: "Bourbon, bitters, orange peel", price: "R95" }
  ],
  beers: [
    { id: 5, name: "Castle Lager (Draft)", price: "R35" },
    { id: 6, name: "Black Label", price: "R30" },
    { id: 7, name: "Windhoek Lager", price: "R40" },
    { id: 8, name: "Craft Beer Selection", price: "R55-R75" }
  ],
  wines: [
    { id: 9, name: "Nederburg Cabernet Sauvignon", description: "Full-bodied red wine", price: "R180 (bottle)" },
    { id: 10, name: "KWV Chardonnay", description: "Crisp white wine", price: "R165 (bottle)" },
    { id: 11, name: "Durbanville Hills Sauvignon Blanc", description: "Fresh and fruity", price: "R155 (bottle)" }
  ],
  spirits: [
    { id: 12, name: "Johnny Walker Black Label", price: "R65 (single)" },
    { id: 13, name: "Jameson Irish Whiskey", price: "R55 (single)" },
    { id: 14, name: "Smirnoff Vodka", price: "R45 (single)" },
    { id: 15, name: "Tanqueray Gin", price: "R50 (single)" }
  ]
};

export const liquorProducts = [
  { id: 1, category: "Whiskey", name: "Glenfiddich 12 Year", price: "R895", image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb" },
  { id: 2, category: "Wine", name: "Nederburg Private Bin", price: "R180", image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea" },
  { id: 3, category: "Vodka", name: "Grey Goose", price: "R675", image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb" },
  { id: 4, category: "Gin", name: "Bombay Sapphire", price: "R485", image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea" },
  { id: 5, category: "Rum", name: "Bacardi Gold", price: "R285", image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb" },
  { id: 6, category: "Wine", name: "Durbanville Hills Collection", price: "R155", image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea" }
];

export const upcomingEvents = [
  {
    id: 1,
    date: "2025-01-15",
    time: "8:00 PM",
    performer: "The Jazz Collective",
    description: "Live jazz performance featuring local talent",
    coverCharge: "R50",
    image: "https://images.unsplash.com/photo-1656369895489-e24a2d0816e9"
  },
  {
    id: 2,
    date: "2025-01-22",
    time: "9:00 PM",
    performer: "DJ Sipho Live",
    description: "Afro-house music and entertainment",
    coverCharge: "R80",
    image: "https://images.pexels.com/photos/35556757/pexels-photo-35556757.jpeg"
  },
  {
    id: 3,
    date: "2025-01-29",
    time: "7:30 PM",
    performer: "Acoustic Nights with Sarah",
    description: "Intimate acoustic session with soulful vocals",
    coverCharge: "Free Entry",
    image: "https://images.unsplash.com/photo-1656369895489-e24a2d0816e9"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Thabo Malema",
    text: "The finest dining experience in Polokwane! The food is exceptional and the atmosphere transforms beautifully from day to night.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah van der Walt",
    text: "Mamalisa is our go-to spot for both business dinners and weekend entertainment. The live music is always fantastic!",
    rating: 5
  },
  {
    id: 3,
    name: "John Mokoena",
    text: "Great selection at the liquor store and the restaurant never disappoints. Professional service every time.",
    rating: 5
  }
];

export const galleryImages = [
  { id: 1, category: "venue", url: "https://images.unsplash.com/photo-1768051297578-1ea70392c307", alt: "Elegant restaurant interior" },
  { id: 2, category: "food", url: "https://images.unsplash.com/photo-1623073284788-0d846f75e329", alt: "Gourmet appetizer" },
  { id: 3, category: "food", url: "https://images.unsplash.com/photo-1541832676-9b763b0239ab", alt: "Main course plating" },
  { id: 4, category: "bar", url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34", alt: "Bar interior" },
  { id: 5, category: "events", url: "https://images.unsplash.com/photo-1656369895489-e24a2d0816e9", alt: "Live performance" },
  { id: 6, category: "venue", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", alt: "Dining area" },
  { id: 7, category: "food", url: "https://images.unsplash.com/photo-1663530761401-15eefb544889", alt: "Chef prepared dish" },
  { id: 8, category: "bar", url: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea", alt: "Wine collection" }
];
