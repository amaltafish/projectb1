import { Component } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  topsWomen = [
    {id:"Nike Sportswear Phoenix Fleece Women's Cropped V-Neck Top", price: 29, imageUrl:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8c44cd39-9472-4e09-bb18-ca5af9b505d4/sportswear-phoenix-fleece-cropped-v-neck-top-00q9hr.png",
    size: ['XS','S', 'M', 'L'], inStock:false},
    {id:"Nike Sportswear Phoenix Fleece Women's Cropped Sweatshirt", price: 59, imageUrl:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee5fad36-9eea-444a-8078-7e6e64233e78/sportswear-phoenix-fleece-1-2-zip-cropped-sweatshirt-JkNbtZ.png",
    size: ['XS','S', 'M', 'L', 'XL'], inStock:true},
    {id:"Jordan Flight Fleece Women's Pullover Hoodie", price: 49, imageUrl:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b693a270-6486-4d39-b0e6-2dc2014dfba8/jordan-flight-fleece-pullover-hoodie-LrTGbK.png", size: ['XS','S', 'M', 'L',
    'XL'], inStock:true},
    ]
   


   constructor(public serviceService: ServiceService) {}

  addToBag(topWomen: any): void {
    if (this.serviceService.isInStock(topWomen)) {
      // Add the item to the bag only if it is in stock
      this.serviceService.addToBag(topWomen);
    }
  }
 }
