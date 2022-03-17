export interface ImageListType {
  imgUrl: string;
  id: string;
}

export interface AttrListType {
  label: string;
  attrId: string;
  pageSize?: number;
  imageList: ImageListType[];
}

export interface ClassifyStateType {
  attrList: AttrListType[];
}
