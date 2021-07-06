import INpc from './INpc'
import Item from './Item'

class Npc implements INpc
{
  image: string = "";
  name: string;
  location: number;
  inv: Item[];
  dialogue: object;

  getImage(): string
  {
    return "yeet";
  }

  constructor(name: string, image: string, dialogue: object, items: Item[])
  {
    this.name = name;
    this.image = image;
    this.dialogue = dialogue;
    this.inv = items;
  }

  rcvItem(item: Item)
  {
    this.inv.push(item);
  }

  giveItem(id: number, npc: INpc)
  {
    //let item: Item = this.inv.splice(id, id-1);
    //npc.rcvItem(item);
  }

}

export default Npc;
