export type Character = {
  id: number;
  image: string;
  name: string;
  alias: string;
  birth: string;
  quirk: string;
};

export const profiles: Character[] = [
  { id: 1, image: "/characters/midoriya.webp", name: "Izuku Midoriya", alias: "Deku", birth: "15 July", quirk: "One For All" },
  { id: 2, image: "/characters/bakugo.webp", name: "Katsuki Bakugo", alias: "Kacchan", birth: "20 Apr", quirk: "Explosion" },
  { id: 3, image: "/characters/todoroki.webp", name: "Shoto Todoroki", alias: "Shoto", birth: "11 Jan", quirk: "Half-Cold Half-Hot" },
  { id: 4, image: "/characters/uaraka.webp", name: "Ochaco Uraraka", alias: "Uravity", birth: "27 Dec", quirk: "Zero Gravity" },
  { id: 5, image: "/characters/lida.webp", name: "Tenya Iida", alias: "Ingenium", birth: "22 Aug", quirk: "Engine" },
  { id: 6, image: "/characters/Tsuyu.webp", name: "Tsuyu Asui", alias: "Froppy", birth: "12 Feb", quirk: "Frog" },
  { id: 7, image: "/characters/denki.webp", name: "Denki Kaminari", alias: "Chargebolt", birth: "29 June", quirk: "Electrification" },
  { id: 8, image: "/characters/krishma.webp", name: "Eijiro Kirishima", alias: "Red Riot", birth: "16 Oct", quirk: "Hardening" },
  { id: 9, image: "/characters/momo.webp", name: "Momo Yaoyorozu", alias: "Creati", birth: "23 Sep", quirk: "Creation" },
  { id: 10, image: "/characters/jiro.webp", name: "Kyoka Jiro", alias: "Earphone Jack", birth: "1 Aug", quirk: "Earphone Jack" },
  { id: 11, image: "/characters/tokoyami.webp", name: "Fumikage Tokoyami", alias: "Tsukuyomi", birth: "30 Oct", quirk: "Dark Shadow" },
  { id: 12, image: "/characters/Mina.webp", name: "Mina Ashido", alias: "Pinky", birth: "30 July", quirk: "Acid" },
  { id: 13, image: "/characters/hanta.webp", name: "Hanta Sero", alias: "Cellophane", birth: "28 July", quirk: "Tape" },
  { id: 14, image: "/characters/minata.webp", name: "Minoru Mineta", alias: "Grape Juice", birth: "9 Oct", quirk: "Pop Off" },
  { id: 15, image: "/characters/mezo.webp", name: "Mezo Shoji", alias: "Tentacole", birth: "15 Feb", quirk: "Dupli-Arms" },
  { id: 16, image: "/characters/koji.webp", name: "Koji Koda", alias: "Anima", birth: "1 Feb", quirk: "Anivoice" },
  { id: 17, image: "/characters/sato.webp", name: "Rikido Sato", alias: "Sugarman", birth: "19 Feb", quirk: "Sugar Rush" },
  { id: 18, image: "/characters/toru.webp", name: "Toru Hagakure", alias: "Invisible Girl", birth: "16 June", quirk: "Invisibility" },
  { id: 19, image: "/characters/Ojiro.webp", name: "Mashirao Ojiro", alias: "Tailman", birth: "28 May", quirk: "Tail" },
  { id: 20, image: "/characters/Yuga.webp", name: "Yuga Aoyama", alias: "Can't Stop Twinkling", birth: "30 May", quirk: "Naval Laser" }
];
