import {Entity, model, property} from '@loopback/repository';

@model()
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
