export interface ListableSteamItemData {
  item_id: number;
  price: number;
}

export interface ListItemsFromSteamPostData {
  items: ListableSteamItemData[];
}
