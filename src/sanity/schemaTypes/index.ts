import { type SchemaTypeDefinition } from 'sanity'
import productsType from './productsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productsType],
}
