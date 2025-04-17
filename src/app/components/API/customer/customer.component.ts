import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerObj: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }
  customerArray: any[] = [];

  constructor(private custSrv: CustomerService){
    this.getCustomers();
  }

  getCustomers(){
    this.custSrv.loadCustomers().subscribe((res:any)=>{
      this.customerArray=res.data;
    })
  }
  
}
