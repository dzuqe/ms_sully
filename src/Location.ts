import INpc from './INpc'
import Item from './Item'

class Location
{
  name: string;
  image: string;
  id: number;
  npcs: INpc[];
  items: Item[];

}

export default Location;
