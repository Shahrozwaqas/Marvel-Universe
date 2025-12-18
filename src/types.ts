export interface Hero {
  id: string;
  name: string;
  realName: string;
  aliases: string[];
  teams: string[];
  powerType: string[];
  bio: string;
  img: string;
  gallery: string[];
  strength: number;
  intelligence: number;
  speed: number;
  durability: number;
  popularity: number;
  notableMovies: string[];
}

export type SortOption = 'name' | 'strength' | 'popularity';
