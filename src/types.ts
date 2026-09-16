export interface MenuItem {
  id: string;
  name: string;
  arabicName?: string;
  category: 'bowls' | 'sandwiches' | 'sides' | 'desserts';
  description: string;
  price: string;
  image: string;
  spiceLevel: number; // 0 to 3
  isVegetarian?: boolean;
  isVegan?: boolean;
  isHalal?: boolean;
  isSignature?: boolean;
  ingredients?: string[];
  pairing?: string;
}

export interface ClassicSpotlight {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  price: string;
  badge: string;
  image: string;
  spiceLevel: number;
  dietary: string[];
  keyIngredients: string[];
}
