import { Image } from "../function/image.model";

export class ParentAlbum {
  constructor(public id: string, public title: string, public images:Image[]) {}
}
