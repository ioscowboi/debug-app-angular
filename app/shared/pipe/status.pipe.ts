// use this custom pipe to get back a string for a numerical status:
import { Pipe, PipeTransform } from '@angular/core';
// pull in the enum constant for use in the pipe: 
import { STATUS } from '../constant/constants';

@Pipe({
    name: 'status'
})

export class StatusPipe implements PipeTransform{
    // create STATUS reference
    private statuses = STATUS;
    // transform method for custom pipes:
    //     bring in the needed data for custom pipe usage:
    transform(statusNum: number) {
        return this.statuses[statusNum];
    }
}