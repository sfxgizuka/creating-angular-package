import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'fa-input input'
})
export class InputRefDirective {

  focused: boolean = false;

  @HostListener('focus')
  onFocus(){
    this.focused = true;
  }

  @HostListener('blur')
  onBlur(){
    this.focused = false;
  }

}
