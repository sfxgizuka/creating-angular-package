import { Component, OnInit, Input, ContentChild, ViewChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements AfterContentInit {

  @Input() icon:string;
  @Input() placeholder: string = ""

  // @ContentChild('input', {read:"", static:false}) input: HTMLInputElement;
  @ContentChild(InputRefDirective, {read:"", static:false}) input: InputRefDirective;

  constructor() { }


  ngAfterContentInit(){
      console.log('input', this.input);
      if(!this.input){
          return 'component au-input needs input element'
      }
  }

  @HostBinding('class.input-focus')
  get focused(): boolean {
      return this.input ? this.input.focused : false;
    }

  get classes() {
    const cssClasses = {
      'fa': true
    };

    if (this.icon) {
      // Assuming this.icon is a string like 'fa-envelope'
      const iconClass = this.icon.split(' ').join('-'); // Replace spaces with hyphens
      cssClasses[iconClass] = true;
    }

    return cssClasses;
  }

}
