import { title } from "process";

export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule: any) => Rule.required().error('Name is required'),
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }], // Array of strings for tags
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        description: 'Upload an image of the product.',
      },
      {
        name: 'price',
        type: 'string',
        title: 'Price',
        validation: (Rule: any) => Rule.required().error('Price is required'),
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule: any) =>
          Rule.max(150).warning('Keep the description under 150 characters.'),
      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
        validation: (Rule: any) =>
          Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
      },
      {
        name: 'isFeaturedProduct',
        type: 'boolean',
        title: 'Is Featured Product',
      },
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
        validation: (Rule: any) => Rule.min(0).error('Stock level must be a positive number.'),
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: [
            { title: 'Chair', value: 'Chair' },
            { title: 'Sofa', value: 'Sofa' },
          ],
        },
        validation: (Rule: any) => Rule.required().error('Category is required'),
      },

    ],
  };



  
  // {
  //   name: 'tags',
  //   title: 'Tags',
  //   type: 'array',
  //   of: [{ type: "string" }],
  //   options: {
  //     list: [
  //       { name: "Home Featured Products", value: "home_FeaturedProducts" },
  //       { name: "Home Latest Products Chairs", value: "home_LatestProductsChairs" },
  //       { name: "Home Unique Features of Latest & Trending Products", value: "home_UniqueFeatures" },
  //       { name: "Home Trending Products", value: "home_TrendingProducts" },
  //       { name: "Home 20% Off on Latest", value: "home_c" },
  //       { name: "Home Vertical Three Carts", value: "home_VerticalThreeCarts" },
  //       { name: "Home Latest Products Sofa", value: "home_LatestProductsSofa" }
  //     ]
  //   }
  // }