

export class CreateOrderDto {
    
    readonly OrderID: number;

   
    readonly LiquorType: string;

    
    readonly Quantity: number;

    readonly StockLevel: number;

    readonly OrderDate: string;

    
    readonly SupplierContact: string;

   
    readonly ReorderThreshold: number;

    
    readonly EventServed: number;
}
