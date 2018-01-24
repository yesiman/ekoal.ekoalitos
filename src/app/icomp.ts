import { Component,Input,Output,EventEmitter } from '@angular/core';

export interface Icomp {
    value: any;
    valueChange:any;
    model: String;
    inputValueChange(event);
}
