// use this custom pipe to get back a string for a numerical status:
import { Pipe, PipeTransform } from '@angular/core';
// pull in the enum constant for use in the pipe: 
import { SEVERITY } from '../constant/constants';

@Pipe({
    name: 'severity'
})

export class SeverityPipe implements PipeTransform{
    // create SEVERITY reference
    private howSevere = SEVERITY;
    // transform method for custom pipes:
    //     bring in the needed data for custom pipe usage:
    transform(severityNum: number) {
        return this.howSevere[severityNum];
    }
}