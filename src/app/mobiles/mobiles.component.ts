import { Component } from '@angular/core';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {

  mobilelist:any;

  constructor(private service:MobileService){

  }

  ngOnInit(){
    this.service.getMobiles().subscribe((res)=>{
      this.mobilelist=res;
      console.table(res);
    })
  }

}
