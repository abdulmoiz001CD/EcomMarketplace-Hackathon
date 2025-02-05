import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import { post } from './blogPost'
import { category } from './category'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,post,category],
}
