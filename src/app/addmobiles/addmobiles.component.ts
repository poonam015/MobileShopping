import { Component } from '@angular/core';
import { MobileService } from '../services/mobile.service';
import  Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmobiles',
  templateUrl: './addmobiles.component.html',
  styleUrls: ['./addmobiles.component.css']
})
export class AddmobilesComponent {

  constructor(private service:MobileService, private router:Router){}
  result:any;
  mobileid:any;
  mobilename:any;
  mobilecompany:any;
  mobileprice:any;


  addmobile(){
    var usermobile={
      "mobileId":this.mobileid,
      "mobileName":this.mobilename,
      "mobileCompany":this.mobilecompany,
      "mobilePrice":this.mobileprice
    }
    this.service.addmobile(usermobile).subscribe((res)=>{
      if(res!=null){
        this.result=res;
        Swal.fire(
          this.result,
          'You clicked the button!',
          'success'
        )
        this.router.navigateByUrl("/mobile")
      }
    })
  }

}
