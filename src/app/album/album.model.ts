import { Image } from '../function/image.model';
export class Album {
    public id: string;
    public title: string;

    constructor(id:string,title:string) {
        this.id = id;
        this.title = title;
    }
}
