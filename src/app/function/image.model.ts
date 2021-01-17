import { Album } from '../album/album.model';

export class Image {
    public id: string;
    public name: string;
    public description: string;
    public imagePath: string;
    public parentAlbum: Album;

    constructor(id:string,name:string,desc:string,imagePath:string,parentAlbum:Album) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.parentAlbum = parentAlbum;
    }
}
