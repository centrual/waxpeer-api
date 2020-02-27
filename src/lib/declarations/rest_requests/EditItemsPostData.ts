export interface EditableItemData {
  item_id: number;
  price: number;
}

export interface EditItemsPostData {
  items: EditableItemData[];
}
