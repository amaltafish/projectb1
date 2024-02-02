import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  topsMen = [
    {id:"Jordan Brooklyn Fleece Men's Printed Pullover Hoodie", price: 59, imageUrl:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/18dbefa1-58ca-4a76-8367-7af652f15760/jordan-brooklyn-fleece-printed-pullover-hoodie-K3SZDv.png",
   size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: false},
   {id:"Jordan Brooklyn FleeceMen's Printed Pullover Hoodie", price: 59, imageUrl:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/df8c7503-d023-4fff-9031-f9c53db1cc2f/jordan-brooklyn-fleece-printed-pullover-hoodie-K3SZDv.png",
   size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true},
   {id:"Paris Saint-Germain Men's Fleece Pullover Hoodie", price: 29, imageUrl:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7ffbb1b8-f0d9-480f-b4f6-98007cde693e/paris-saint-germain-fleece-pullover-hoodie-hqzmXC.png",
   size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true},
   ]
   
   

   constructor(public serviceService: ServiceService) {}

  addToBag(topMen: any): void {
    if (this.serviceService.isInStock(topMen)) {
      // Add the item to the bag only if it is in stock
      this.serviceService.addToBag(topMen);
    }
  }
}

 

