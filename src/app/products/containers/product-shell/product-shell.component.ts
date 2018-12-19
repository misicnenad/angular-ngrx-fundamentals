import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { Product } from '../../product';
import * as fromRoot from "../../../state/app.state";
import * as fromProduct from "../../state";
import * as productActions from '../../state/product.actions';

@Component({
    templateUrl: './product-shell.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductShellComponent implements OnInit {

    // Used to highlight the selected product in the list
    selectedProduct$: Observable<Product>;
    products$: Observable<Product[]>;
    errorMessage$: Observable<string>;
    displayCode$: Observable<boolean>;

    constructor(private store: Store<fromRoot.State>) { }

    ngOnInit() {
        this.store.dispatch(new productActions.LoadProducts());

        this.products$ = this.store.pipe(select(fromProduct.getProducts));
        this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
        this.selectedProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
        this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
    }

    checkChanged(value: boolean) {
        this.store.dispatch(new productActions.ToggleProductCode(value))
    }

    newProduct() {
        this.store.dispatch(new productActions.InitializeCurrentProduct())
    }

    productSelected(product: Product) {
        this.store.dispatch(new productActions.SetCurrentProduct(product));
    }

    saveProduct(product: Product) {
        if (product.id === 0) {
            this.store.dispatch(new productActions.AddProduct(product))
        } else {
            this.store.dispatch(new productActions.UpdateProduct(product));
        }
    }

    deleteProduct(productId: number) {
        this.store.dispatch(new productActions.DeleteProduct(productId))
    }

    clearCurrentProduct() {
        this.store.dispatch(new productActions.ClearCurrentProduct());
    }
}
