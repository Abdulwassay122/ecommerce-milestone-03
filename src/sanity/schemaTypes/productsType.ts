import { defineType, Rule } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.max(500),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive(),
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule: Rule) => Rule.required()
      },
    {
        name: 'category',
        title: 'Category',
        type: 'string',
        description: 'The category to which the product belongs.',
        options: {
          list: [
            { title: 'Electronics', value: 'electronics' },
            { title: 'Fitness', value: 'fitness' },
            { title: 'Accessories', value: 'accessories' },
            { title: 'Kitchen', value: 'kitchen' },
            { title: 'Gaming', value: 'gaming' },
          ],
        },
        validation: Rule => Rule.required(),
      },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().integer().min(0),
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    },
  ],
});
