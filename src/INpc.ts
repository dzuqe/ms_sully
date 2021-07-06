import Item from './Item'

interface INpc
{
  name: string;
  image: string;
  dialogue: object;
  inv: Item[];
  getImage(): string;
  rcvItem(item: Item);
  giveItem(id: number, npc: INpc);
}

export default INpc;
