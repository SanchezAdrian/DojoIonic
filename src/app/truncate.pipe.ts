import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
    realizado: string[] = [];
    transform(init: string): any {
        this.realizado = init.split('-').slice(0,3)
        let value = this.realizado.join(" ")
        return value;
    }
}
