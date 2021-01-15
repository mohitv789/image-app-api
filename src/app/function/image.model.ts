import { ImageComponent } from '../shared/breakdown.model';

export class Image {
    public id: string;
    public name: string;
    public description: string;
    public imagePath: string;
    public place: string;
    public upload_on : Date;
    public components: ImageComponent[];

    constructor(id:string,name:string,desc:string,imagePath:string,upload_on : Date,place:string,components: ImageComponent[]) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.upload_on = upload_on;
        this.place = place;
        this.components = components;
    }
}
