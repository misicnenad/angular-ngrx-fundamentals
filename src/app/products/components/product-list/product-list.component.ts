import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product';

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    @Input() errorMessage: string;
    @Input() displayCode: boolean;
    @Input() products: Product[];
    @Input() selectedProduct: Product;
    @Output() checked = new EventEmitter<boolean>();
    @Output() initializeNewProduct = new EventEmitter<void>();
    @Output() selected = new EventEmitter<Product>();

    pageTitle = 'Products';

    checkChanged(value: boolean) {
        this.checked.emit(value);
    }

    newProduct() {
        this.initializeNewProduct.emit();
    }

    productSelected(product: Product) {
        this.selected.emit(product);
    }
}
