export class Contact{
  public id: number;
  public name?: string;
  public phone?: string;

  constructor(c: Contact = {} as Contact){
    let {id = 0, name = '', phone = ''} = c;

    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}
