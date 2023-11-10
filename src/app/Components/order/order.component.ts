import { Component ,Input,Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
//  @Input() orders:any
 orders:any
  
 render:string ;



constructor(private route : ActivatedRoute ,private datasource:DataService){
  
  this.orders = datasource.getData().orders
  // console.log(this.orders)

  this.route.queryParams.subscribe((data:any)=>{
    this.render = data.show   
     
  })
 }
 
}
 