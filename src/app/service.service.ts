// service.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  private itemCount: number = 0;

  addToBag(product: any): void {
    if (product.inStock) {
      this.itemCount++;
    } 
  }

 

  getItemCount(): number {
    return this.itemCount;
  }

  constructor() {}

  isInStock(product: any): boolean {
    // Check if the product is in stock
    return product.inStock;
  }
  getOutOfStockMessage(): string {
    return 'Out of Stock';
  }
}

