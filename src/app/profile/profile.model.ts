export class Profile {
  public id: string;
  public name: string;
  public dob: Date;
  public avatarURL: string;
  public user_id: string;

  constructor(id:string,name:string,dob:Date,avatarURL:string,user_id: string) {
      this.id = id;
      this.name = name;
      this.dob = dob;
      this.avatarURL = avatarURL;
      this.user_id = user_id;
  }
}
