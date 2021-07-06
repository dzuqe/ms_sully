import INpc from './INpc'

class Item
{
  name: string;
  image: string;
  id: number;
  location: number;

  constructor(name: string, image: string)
  {
    this.name = name;
    this.image = image;
  }

  rcvItem(item: Item)
  {
  
  }

  giveItem(id: number, npc: INpc)
  {
  
  }

}

export default Item;
