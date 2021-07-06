import INpc from './INpc'
class Npc implements INpc
{
  image: string = "";
  name: string;
  location: number;

  getImage(): string
  {
    return "yeet";
  }

  constructor(name: string, image: string)
  {
    this.name = name;
    this.image = image;
  }

}

export default Npc;
