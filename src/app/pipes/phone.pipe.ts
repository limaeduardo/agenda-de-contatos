import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'phonepipe',
})

export class PhonePipe implements PipeTransform{
  public transform(phone: string): string {
    if(!phone || phone.trim() === ''){
    return '';
    }
    let formatted: string;
    formatted = phone.replace(/\D/g, "")
    formatted = formatted.replace(/^(\d{2})(\d)/g, "($1) $2")
    formatted = formatted.replace(/(\d)(\d{4})$/, "$1-$2")
    return formatted;
  }
}
