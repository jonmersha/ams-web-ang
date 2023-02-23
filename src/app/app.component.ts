import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
onValueChange($event: any) {
throw new Error('Method not implemented.');
}
  title = 'ams';
  
  constructor(private fb:FormBuilder){
   
  }
  

}
