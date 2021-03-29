import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nvTrim'
})
export class NvTrimPipe implements PipeTransform {

  transform(text: string, length = 0): string {
    const threeDots = '...';
    const newValue = text.split(' ');
    if (newValue.length > length) {
        const splittedValue = text.split(newValue[9]);
        return splittedValue[0].concat(threeDots.toString());
    }
    else {
        return text;
    }
  }

}
