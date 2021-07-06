import INpc from './INpc'
import Item from './Item'

class Location
{
  name: string;
  image: string;
  id: number;
  npcs: INpc[];
  items: Item[];

  constructor(name: string, image: string, npcs: INpc[], stuff: Item[])
  {
    this.npcs = npcs;
    this.items = stuff;
    this.name = name;
    this.image = image;
  }

}

export default Location;
