import INpc from './INpc'
class Npc implements INpc
{
  avatar: string = "";
  name: string;
  location: number;

  getAvatar(): string
  {
    return "yeet";
  }

  constructor(name: string, image: string)
  {
    this.name = name;
    this.avatar = image;
  }

}

export default Npc;
