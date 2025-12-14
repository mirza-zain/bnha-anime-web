export type CharacterRole = 'hero' | 'villain';

export type Character = {
  id: number;
  role: CharacterRole;
  image: string;
  name: string;
  alias: string;
  birth: string;
  quirk: string;
};

export const heroes: Character[] = [
  { id: 1, role: 'hero', image: "/characters/midoriya.webp", name: "Izuku Midoriya", alias: "Deku", birth: "15 July", quirk: "One For All" },
  { id: 2, role: 'hero', image: "/characters/bakugo.webp", name: "Katsuki Bakugo", alias: "Kacchan", birth: "20 Apr", quirk: "Explosion" },
  { id: 3, role: 'hero', image: "/characters/todoroki.webp", name: "Shoto Todoroki", alias: "Shoto", birth: "11 Jan", quirk: "Half-Cold Half-Hot" },
  { id: 4, role: 'hero', image: "/characters/uaraka.webp", name: "Ochaco Uraraka", alias: "Uravity", birth: "27 Dec", quirk: "Zero Gravity" },
  { id: 5, role: 'hero', image: "/characters/lida.webp", name: "Tenya Iida", alias: "Ingenium", birth: "22 Aug", quirk: "Engine" },
  { id: 6, role: 'hero', image: "/characters/Tsuyu.webp", name: "Tsuyu Asui", alias: "Froppy", birth: "12 Feb", quirk: "Frog" },
  { id: 7, role: 'hero', image: "/characters/denki.webp", name: "Denki Kaminari", alias: "Chargebolt", birth: "29 June", quirk: "Electrification" },
  { id: 8, role: 'hero', image: "/characters/krishma.webp", name: "Eijiro Kirishima", alias: "Red Riot", birth: "16 Oct", quirk: "Hardening" },
  { id: 9, role: 'hero', image: "/characters/momo.webp", name: "Momo Yaoyorozu", alias: "Creati", birth: "23 Sep", quirk: "Creation" },
  { id: 10, role: 'hero', image: "/characters/jiro.webp", name: "Kyoka Jiro", alias: "Earphone Jack", birth: "1 Aug", quirk: "Earphone Jack" },
  { id: 11, role: 'hero', image: "/characters/tokoyami.webp", name: "Fumikage Tokoyami", alias: "Tsukuyomi", birth: "30 Oct", quirk: "Dark Shadow" },
  { id: 12, role: 'hero', image: "/characters/Mina.webp", name: "Mina Ashido", alias: "Pinky", birth: "30 July", quirk: "Acid" },
  { id: 13, role: 'hero', image: "/characters/hanta.webp", name: "Hanta Sero", alias: "Cellophane", birth: "28 July", quirk: "Tape" },
  { id: 14, role: 'hero', image: "/characters/minata.webp", name: "Minoru Mineta", alias: "Grape Juice", birth: "9 Oct", quirk: "Pop Off" },
  { id: 15, role: 'hero', image: "/characters/mezo.webp", name: "Mezo Shoji", alias: "Tentacole", birth: "15 Feb", quirk: "Dupli-Arms" },
  { id: 16, role: 'hero', image: "/characters/koji.webp", name: "Koji Koda", alias: "Anima", birth: "1 Feb", quirk: "Anivoice" },
  { id: 17, role: 'hero', image: "/characters/sato.webp", name: "Rikido Sato", alias: "Sugarman", birth: "19 Feb", quirk: "Sugar Rush" },
  { id: 18, role: 'hero', image: "/characters/toru.webp", name: "Toru Hagakure", alias: "Invisible Girl", birth: "16 June", quirk: "Invisibility" },
  { id: 19, role: 'hero', image: "/characters/Ojiro.webp", name: "Mashirao Ojiro", alias: "Tailman", birth: "28 May", quirk: "Tail" },
  { id: 20, role: 'hero', image: "/characters/Yuga.webp", name: "Yuga Aoyama", alias: "Can't Stop Twinkling", birth: "30 May", quirk: "Naval Laser" }
];

export const villains: Character[] = [
  { id: 101, role: 'villain', image: "/Villans/Dabi.webp", name: "Dabi", alias: "Blueflame", birth: "18 Jan", quirk: "Cremation" },
  { id: 102, role: 'villain', image: "/Villans/Himiko.webp", name: "Himiko Toga", alias: "Toga", birth: "7 Aug", quirk: "Transform" },
  { id: 103, role: 'villain', image: "/Villans/Kurogiri.webp", name: "Kurogiri", alias: "Gatekeeper", birth: "Unknown", quirk: "Warp Gate" },
  { id: 104, role: 'villain', image: "/Villans/one%20for%20all.webp", name: "All For One", alias: "Symbol of Terror", birth: "Unknown", quirk: "All For One" },
  { id: 105, role: 'villain', image: "/Villans/shigaraki.webp", name: "Tomura Shigaraki", alias: "Shigaraki", birth: "4 Apr", quirk: "Decay" },
  { id: 106, role: 'villain', image: "/Villans/Spinner.webp", name: "Spinner", alias: "Shuichi Iguchi", birth: "Unknown", quirk: "Gecko" },
  { id: 107, role: 'villain', image: "/Villans/Twice.webp", name: "Jin Bubaigawara", alias: "Twice", birth: "10 May", quirk: "Double" }
];

// Legacy export maintained for compatibility where a default hero list is expected.
export const profiles = heroes;
