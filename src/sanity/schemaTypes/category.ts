import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A short description of the category',
    }),
  ],
})

// Type for the Category
// export type Category = {
//   _type: 'category';
//   _id: string;
//   title: string;
//   slug: {
//     _type: 'slug';
//     current: string;
//   };
//   description?: string;
// };