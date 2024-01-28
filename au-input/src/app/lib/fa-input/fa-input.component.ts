import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements OnInit {

  @Input() icon:string;
  @Input() placeholder: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  // get classes(){
  //   const cssClasses = {
  //     'fa': true
  //   }

  //   if(this.icon){
  //     cssClasses['fa' + this.icon] = true
  //   }

  //   return cssClasses;
  // }

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
