import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  type: 'document',
  title: 'Blog Post',
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
  name: 'author',
  type: 'string', 
  title: 'Author',
  validation: Rule => Rule.required()
}),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
        name: 'publishedAt',
        type: 'date', 
        title: 'Published At',
        validation: Rule => Rule.required()
      }),
      
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'A short description of the post',
      validation: Rule => Rule.max(200).warning('Excerpt should be less than 200 characters')
    }),
  ],
})

