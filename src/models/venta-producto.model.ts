import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreingKeys: [
      {
        fk_ventaProducto_idProducto: {
          name: "fk_venta_idProducto",
          entity: "Producto",
          entityKey: "id",
          foreingKey: "productoId"
        }
      },
      {
        fk_ventaProducto_idVenta: {
          name: "fk_venta_idVenta",
          entity: "Venta",
          entityKey: "id",
          foreingKey: "ventaId"
        }
      }
    ]
  }
})
export class VentaProducto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'string',
    required: true,
  })
  precioUnitario: number;

  @property({
    type: 'number',
  })
  ventaId?: number;

  @property({
    type: 'number',
  })
  productoId?: number;

  constructor(data?: Partial<VentaProducto>) {
    super(data);
  }
}

export interface VentaProductoRelations {
  // describe navigational properties here
}

export type VentaProductoWithRelations = VentaProducto & VentaProductoRelations;
