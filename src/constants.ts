import type { Hero } from './types';

export const HEROES: Hero[] = [
  {
    id: "moon-knight",
    name: "Moon Knight",
    realName: "Marc Spector",
    aliases: ["Moon Knight", "Mr. Knight"],
    teams: ["Heroes For Hire", "Midnight Sons"],
    powerType: ["Magic", "Combat"],
    bio: "A former mercenary resurrected by the Egyptian god Khonshu, fights crime as Moon Knight.",
    img: "/images/MoonKnight/moonknight1.webp",
    gallery: ["/images/MoonKnight/moonknight.webp", "/images/MoonKnight/moonknight2.webp"],
    strength: 97, intelligence: 85, speed: 90, durability: 95, popularity: 93,
    notableMovies: ["Moon Knight Series (2022)"],
  },

  {
    id: "spider-man",
    name: "Spider-Man",
    realName: "Peter Parker",
    aliases: ["Spidey", "Web-Slinger"],
    teams: ["Avengers"],
    powerType: ["Superhuman", "Agility"],
    bio: "Bitten by a radioactive spider, Peter Parker fights crime as Spider-Man.",
    img: "/images/SpiderMan/spiderman1.webp",
    gallery: ["/images/SpiderMan/spiderman2.webp", "/images/SpiderMan/spiderman.webp"],
    strength: 70, intelligence: 90, speed: 85, durability: 65, popularity: 95,
    notableMovies: [
      "Captain America: Civil War (2016)",
      "Spider-Man: Homecoming (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Spider-Man: Far From Home (2019)",
      "Spider-Man: No Way Home (2021)"
    ],
  },

  {
    id: "dr-strange",
    name: "Dr. Strange",
    realName: "Stephen Strange",
    aliases: ["Sorcerer Supreme"],
    teams: ["Defenders" , "Avengers" ],
    powerType: ["Magic", "Intelligence"],
    bio: "A former surgeon who becomes the Sorcerer Supreme to protect Earth from mystical threats.",
    img: "/images/DrStrange/698123.webp",
    gallery: ["/images/DrStrange/725615.webp", "/images/DrStrange/1259866.webp"],
    strength: 85, intelligence: 95, speed: 70, durability: 90, popularity: 90,
    notableMovies: [
    "Doctor Strange (2016)",
    "Thor: Ragnarok (2017)",
    "Avengers: Infinity War (2018)",
    "Avengers: Endgame (2019)",
    "Doctor Strange in the Multiverse of Madness (2022)"
    ],
  },

  {
    id: "iron-man",
    name: "Iron Man",
    realName: "Tony Stark",
    aliases: ["Shellhead"],
    teams: ["Avengers"],
    powerType: ["Tech", "Genius"],
    bio: "A Genius. Billionaire. Playboy. Philanthropist.",
    img: "/images/IronMan/ironman.webp",
    gallery: ["/images/IronMan/ironman1.webp", "/images/IronMan/ironman2.webp"],
    strength: 70, intelligence: 98, speed: 60, durability: 75, popularity: 98,
   notableMovies: [
     "Iron Man (2008)",
     "Iron Man 2 (2010)",
     "The Avengers (2012)",
     "Iron Man 3 (2013)",
     "Avengers: Age of Ultron (2015)",
     "Captain America: Civil War (2016)",
     "Spider-Man: Homecoming (2017)",
     "Avengers: Infinity War (2018)",
     "Avengers: Endgame (2019)"
    ],
  },

  {
    id: "thanos",
    name: "Thanos",
    realName: "Thanos",
    aliases: ["Mad Titan"],
    teams: ["Black Order"],
    powerType: ["Strength", "Magic", "Intelligence"],
    bio: "The Mad Titan seeks the Infinity Stones.",
    img: "/images/Thanos/thanos1.webp",
    gallery: ["/images/Thanos/thanos.webp", "/images/Thanos/thanos2.webp"],
    strength: 100, intelligence: 95, speed: 70, durability: 100, popularity: 95,
    notableMovies: [
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
  },

  {
    id: "thor",
    name: "Thor",
    realName: "Thor Odinson",
    aliases: ["God of Thunder"],
    teams: ["Avengers" , "Asgardians"],
    powerType: ["Strength", "Magic"],
    bio: "Asgardian God of Thunder.",
    img: "/images/Thor/thor.webp",
    gallery: ["/images/Thor/thor1.webp", "/images/Thor/thor2.webp"],
    strength: 95, intelligence: 75, speed: 80, durability: 95, popularity: 90,
    notableMovies: [
  "Thor (2011)",
  "The Avengers (2012)",
  "Thor: The Dark World (2013)",
  "Avengers: Age of Ultron (2015)",
  "Thor: Ragnarok (2017)",
  "Avengers: Infinity War (2018)",
  "Avengers: Endgame (2019)",
  "Thor: Love and Thunder (2022)"
    ],
  },
  {
    id: "black-widow",
    name: "Black Widow",
    realName: "Natasha Romanoff",
    aliases: ["Nat"],
    teams: ["Avengers"],
    powerType: ["Combat", "Stealth"],
    bio: "Master spy and skilled fighter, a core member of Avengers.",
    img: "/images/BlackWidow/blackwidow.webp",
    gallery: ["/images/BlackWidow/blackwidow1.webp", "/images/BlackWidow/blackwidow2.webp"],
    strength: 60, intelligence: 90, speed: 80, durability: 70, popularity: 88,
    notableMovies: [
  "The Avengers (2012)",
  "Captain America: The Winter Soldier (2014)",
  "Avengers: Age of Ultron (2015)",
  "Captain America: Civil War (2016)",
  "Avengers: Infinity War (2018)",
  "Avengers: Endgame (2019)",
  "Black Widow (2021)"
]

  },
    {
    id: "hawkeye",
    name: "Hawkeye",
    realName: "Clint Barton",
    aliases: ["Ronin"],
    teams: ["Avengers"],
    powerType: ["Archery", "Combat"],
    bio: "Expert archer and tactical fighter, supports Avengers from the shadows.",
    img: "/images/Hawkeye/hawkeye.webp",
    gallery: ["/images/Hawkeye/hawkeye1.webp", "/images/Hawkeye/hawkeye2.webp"],
    strength: 65, intelligence: 75, speed: 70, durability: 65, popularity: 80,
    notableMovies: [
  "Thor (2011)",
  "The Avengers (2012)",
  "Avengers: Age of Ultron (2015)",
  "Captain America: Civil War (2016)",
  "Avengers: Endgame (2019)",
  "Hawkeye (2021)"
]

  },
  {
    id: "khonshu",
    name: "Khonshu",
    realName: "Khonshu",
    aliases: ["Moon God"],
    teams: ["None"],
    powerType: ["Magic", "God"],
    bio: "Egyptian Moon God who empowers Moon Knight to fight evil.",
    img: "/images/Khonshu/khonshu.webp",
    gallery: ["/images/Khonshu/khonshu1.webp", "/images/Khonshu/khonshu2.webp"],
    strength: 100, intelligence: 95, speed: 80, durability: 100, popularity: 60,
    notableMovies: ["Moon Knight Series (2022)"]
  },
  {
    id: "deadpool",
    name: "Deadpool",
    realName: "Wade Wilson",
    aliases: ["Merc with a Mouth"],
    teams: ["X-Force"],
    powerType: ["Mutant", "Healing"],
    bio: "Mercenary with regenerative healing and dark humor, breaks the fourth wall.",
    img: "/images/Deadpool/deadpool.webp",
    gallery: ["/images/Deadpool/deadpool1.webp", "/images/Deadpool/deadpool2.webp"],
    strength: 80, intelligence: 85, speed: 75, durability: 90, popularity: 90,
    notableMovies: [
  "Deadpool (2016)",
  "Deadpool 2 (2018)",
  "Deadpool & Wolverine (2024)"
]

  },
  {
    id: "black-panther",
    name: "Black Panther",
    realName: "T'Challa",
    aliases: ["King of Wakanda"],
    teams: ["Avengers"],
    powerType: ["Strength", "Agility", "Combat"],
    bio: "King of Wakanda and skilled warrior, fights to protect his nation and the world.",
    img: "/images/BlackPanther/blackpanther1.webp",
    gallery: ["/images/BlackPanther/blackpanther.webp", "/images/BlackPanther/blackpanther2.webp"],
    strength: 85, intelligence: 90, speed: 80, durability: 85, popularity: 92,
    notableMovies: [
  "Captain America: Civil War (2016)",
  "Black Panther (2018)",
  "Avengers: Infinity War (2018)",
  "Avengers: Endgame (2019)",
  "Black Panther: Wakanda Forever (2022)"
]

  },
  {
    id: "falcon",
    name: "Falcon",
    realName: "Sam Wilson",
    aliases: ["Captain America"],
    teams: ["Avengers"],
    powerType: ["Flight", "Combat"],
    bio: "Skilled flyer with a mechanical wing suit, fights alongside Avengers.",
    img: "/images/Falcon/falcon.webp",
    gallery: ["/images/Falcon/falcon1.webp", "/images/Falcon/falcon2.webp"],
    strength: 70, intelligence: 75, speed: 85, durability: 70, popularity: 80,
    notableMovies: [
  "Captain America: The Winter Soldier (2014)",
  "Avengers: Age of Ultron (2015)",
  "Captain America: Civil War (2016)",
  "Avengers: Infinity War (2018)",
  "Avengers: Endgame (2019)",
  "The Falcon and the Winter Soldier (2021)"
]

  },
  {
    id: "groot",
    name: "Groot",
    realName: "Groot",
    aliases: ["Flora colossi"],
    teams: ["Guardians of the Galaxy"],
    powerType: ["Strength", "Regeneration"],
    bio: "Tree-like creature with regenerative abilities, member of Guardians of the Galaxy.",
    img: "/images/Groot/groot.webp",
    gallery: ["/images/Groot/groot1.webp", "/images/Groot/groot2.webp"],
    strength: 85, intelligence: 50, speed: 40, durability: 95, popularity: 90,
    notableMovies: [
  "Guardians of the Galaxy (2014)",
  "Guardians Vol. 2 (2017)",
  "Avengers: Infinity War (2018)",
  "Avengers: Endgame (2019)",
  "Guardians Vol. 3 (2023)"
]

  },
  {
    id: "rocket",
    name: "Rocket Raccoon",
    realName: "Rocket",
    aliases: ["None"],
    teams: ["Guardians of the Galaxy"],
    powerType: ["Tech", "Combat"],
    bio: "Clever raccoon with firearms expertise, member of Guardians of the Galaxy.",
    img: "/images/Rocket/rocket.webp",
    gallery: ["/images/Rocket/rocket1.webp", "/images/Rocket/rocket2.webp"],
    strength: 60, intelligence: 95, speed: 70, durability: 65, popularity: 85,
    notableMovies: [
  "Guardians of the Galaxy (2014)",
  "Guardians Vol. 2 (2017)",
  "Avengers: Infinity War (2018)",
  "Avengers: Endgame (2019)",
  "Guardians Vol. 3 (2023)"
]

  },
  {
    id: "star-lord",
    name: "Star-Lord",
    realName: "Peter Quill",
    aliases: ["Star-Lord"],
    teams: ["Guardians of the Galaxy"],
    powerType: ["Combat", "Tech"],
    bio: "Leader of Guardians of the Galaxy, skilled fighter and pilot.",
    img: "/images/StarLord/starlord.webp",
    gallery: ["/images/StarLord/starlord1.webp", "/images/StarLord/starlord2.webp"],
    strength: 70, intelligence: 85, speed: 75, durability: 70, popularity: 88,
    notableMovies: [
  "Guardians of the Galaxy (2014)",
  "Guardians Vol. 2 (2017)",
  "Avengers: Infinity War (2018)",
  "Avengers: Endgame (2019)",
  "Guardians Vol. 3 (2023)"
]

  },
  {
    id: "loki",
    name: "Loki",
    realName: "Loki Laufeyson",
    aliases: ["God of Mischief"],
    teams: ["Asgardians"],
    powerType: ["Magic", "Intelligence"],
    bio: "The trickster god.",
    img: "/images/Loki/loki1.webp",
    gallery: ["/images/Loki/loki.webp", "/images/Loki/loki2.webp"],
    strength: 75, intelligence: 90, speed: 75, durability: 80, popularity: 85,
  notableMovies: [
  "Thor (2011)",
  "The Avengers (2012)",
  "Thor: The Dark World (2013)",
  "Thor: Ragnarok (2017)",
  "Avengers: Infinity War (2018)",
  "Loki (2021)",
  "Loki Season 2 (2023)"
    ],
  },

  {
    id: "wolverine",
    name: "Wolverine",
    realName: "Logan",
    aliases: ["Weapon X", "James Howlett"],
    teams: ["X-Men"],
    powerType: ["Mutant", "Healing"],
    bio: "Mutant with claws and healing factor.",
    img: "/images/Wolverine/wolverine1.webp",
    gallery: ["/images/Wolverine/wolverine.webp", "/images/Wolverine/wolverine2.webp"],
    strength: 90, intelligence: 75, speed: 80, durability: 90, popularity: 88,
    notableMovies: [
      "X-Men Series",
      "Logan (2017)",
      "Deadpool & Wolverine (2024)"
    ],
  },

  {
    id: "captain-america",
    name: "Captain America",
    realName: "Steve Rogers",
    aliases: ["Cap"],
    teams: ["Avengers"],
    powerType: ["Strength", "Combat"],
    bio: "Super soldier hero.",
    img: "/images/CapAmerica/cap1.webp",
    gallery: ["/images/CapAmerica/cap.webp", "/images/CapAmerica/cap2.webp"],
    strength: 85, intelligence: 75, speed: 80, durability: 90, popularity: 95,
   notableMovies: [
  "Captain America: The First Avenger (2011)",
  "The Avengers (2012)",
  "Captain America: The Winter Soldier (2014)",
  "Avengers: Age of Ultron (2015)",
  "Captain America: Civil War (2016)",
  "Avengers: Infinity War (2018)",
  "Avengers: Endgame (2019)",
  "Captain America: Brave New World (2025)"
]
  },

  {
    id: "hulk",
    name: "Hulk",
    realName: "Bruce Banner",
    aliases: ["Green Goliath"],
    teams: ["Avengers"],
    powerType: ["Strength", "Durability"],
    bio: "Scientist turned powerhouse.",
    img: "/images/Hulk/hulk1.webp",
    gallery: ["/images/Hulk/hulk.webp", "/images/Hulk/hulk2.webp"],
    strength: 100, intelligence: 85, speed: 60, durability: 100, popularity: 90,
    notableMovies: [
  "The Incredible Hulk (2008)",
  "The Avengers (2012)",
  "Avengers: Age of Ultron (2015)",
  "Thor: Ragnarok (2017)",
  "Avengers: Infinity War (2018)",
  "Avengers: Endgame (2019)"
    ]

  },

  {
    id: "venom",
    name: "Venom",
    realName: "Eddie Brock",
    aliases: ["Venom"],
    teams: ["None"],
    powerType: ["Symbiote", "Strength", "Agility"],
    bio: "Alien symbiote bonded with Eddie Brock.",
    img: "/images/Venom/venom2.webp",
    gallery: ["/images/Venom/venom.webp", "/images/Venom/venom1.webp"],
    strength: 90, intelligence: 75, speed: 85, durability: 90, popularity: 90,
    notableMovies: [
      "Venom (2018)",
      "Venom: Let There Be Carnage (2021)",
      "Venom: The Last Dance (2024)"
    ]
  },

  {
    id: "killmonger",
    name: "Killmonger",
    realName: "Erik Stevens",
    aliases: ["N'Jadaka"],
    teams: ["None"],
    powerType: ["Combat", "Intelligence", "Tactics"],
    bio: "Ruthless strategist, enemy of Black Panther.",
    img: "/images/Killmonger/erik.webp",
    gallery: ["/images/Killmonger/erik1.webp", "/images/Killmonger/erik2.webp"],
    strength: 85, intelligence: 80, speed: 80, durability: 75, popularity: 88,
    notableMovies: ["Black Panther (2018)"]
  },

  {
    id: "ultron",
    name: "Ultron",
    realName: "Ultron",
    aliases: ["None"],
    teams: ["None"],
    powerType: ["AI", "Tech", "Strength"],
    bio: "Artificial intelligence villain.",
    img: "/images/Ultron/ultron1.webp",
    gallery: ["/images/Ultron/ultron.webp", "/images/Ultron/ultron2.webp"],
    strength: 95, intelligence: 100, speed: 80, durability: 95, popularity: 88,
    notableMovies: ["Avengers: Age of Ultron (2015)"]
  },

  {
    id: "hela",
    name: "Hela",
    realName: "Hela",
    aliases: ["Goddess of Death"],
    teams: ["None", "Asgardians"],
    powerType: ["Magic", "Combat", "Strength"],
    bio: "Asgardian goddess of death.",
    img: "/images/Hela/hela.webp",
    gallery: ["/images/Hela/hela1.webp", "/images/Hela/hela2.webp"],
    strength: 95, intelligence: 85, speed: 80, durability: 95, popularity: 85,
    notableMovies: ["Thor: Ragnarok (2017)"]
  },

  {
    id: "magneto",
    name: "Magneto",
    realName: "Erik Lehnsherr",
    aliases: ["Master of Magnetism"],
    teams: ["Brotherhood of Mutants", "X-Men Enemy"],
    powerType: ["Mutant", "Magnetism", "Combat"],
    bio: "Master of magnetism.",
    img: "/images/Magneto/magneto.webp",
    gallery: ["/images/Magneto/magneto1.webp", "/images/Magneto/magneto2.webp"],
    strength: 85, intelligence: 90, speed: 75, durability: 80, popularity: 90,
    notableMovies: ["X-Men Series"]
  }
];
