import { Action } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
	ToggleProductCode = '[Product] Toggle Product Code',
	SetCurrentProduct = '[Product] Set Current Product',
	ClearCurrentProduct = '[Product] Clear Current Product',
	InitializeCurrentProduct = '[Product] Initialize Current Product',
	LoadProducts = '[Product] Load Products',
	LoadProductsSuccess = '[Product] Load Products Success',
	LoadProductsFail = '[Product] Load Products Fail',
	UpdateProduct = '[Product] Update Product',
	UpdateProductSuccess = '[Product] Update Product Success',
	UpdateProductFail = '[Product] Update Product Fail',
	AddProduct = '[Product] Add Product',
	AddProductSuccess = '[Product] Add Product Success',
	AddProductFail = '[Product] Add Product Fail',
	DeleteProduct = '[Product] Delete Product',
	DeleteProductSuccess = '[Product] Delete Product Success',
	DeleteProductFail = '[Product] Delete Product Fail'
}

export class ToggleProductCode implements Action {
	readonly type = ProductActionTypes.ToggleProductCode;

	constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
	readonly type = ProductActionTypes.SetCurrentProduct;

	constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
	readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
	readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class LoadProducts implements Action {
	readonly type = ProductActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
	readonly type = ProductActionTypes.LoadProductsSuccess;

	constructor(public payload: Product[]) { }
}

export class LoadProductsFail implements Action {
	readonly type = ProductActionTypes.LoadProductsFail;

	constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
	readonly type = ProductActionTypes.UpdateProduct;

	constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
	readonly type = ProductActionTypes.UpdateProductSuccess;

	constructor(public payload: Product) { }
}

export class UpdateProductFail implements Action {
	readonly type = ProductActionTypes.UpdateProductFail;

	constructor(public payload: string) { }
}

export class AddProduct implements Action {
	readonly type = ProductActionTypes.AddProduct;

	constructor(public payload: Product) { }
}

export class AddProductSuccess implements Action {
	readonly type = ProductActionTypes.AddProductSuccess;

	constructor(public payload: Product) { }
}

export class AddProductFail implements Action {
	readonly type = ProductActionTypes.AddProductFail;

	constructor(public payload: string) { }
}

export class DeleteProduct implements Action {
	readonly type = ProductActionTypes.DeleteProduct;

	constructor(public payload: number) { }
}

export class DeleteProductSuccess implements Action {
	readonly type = ProductActionTypes.DeleteProductSuccess;

	constructor(public payload: number) { }
}

export class DeleteProductFail implements Action {
	readonly type = ProductActionTypes.DeleteProductFail;

	constructor(public payload: string) { }
}

export type ProductActions = ToggleProductCode
	| SetCurrentProduct
	| ClearCurrentProduct
	| InitializeCurrentProduct
	| LoadProducts
	| LoadProductsSuccess
	| LoadProductsFail
	| UpdateProduct
	| UpdateProductSuccess
	| UpdateProductFail
	| AddProduct
	| AddProductSuccess
	| AddProductFail
	| DeleteProduct
	| DeleteProductSuccess
	| DeleteProductFail; 