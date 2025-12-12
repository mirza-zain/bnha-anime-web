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
  { id: 3, image: "/characters/todoroki.webp", name: "Shoto Todoroki", alias: "Shoto", birth: "11 Jan", quirk: "Half-Cold Half-Hot" }
];
