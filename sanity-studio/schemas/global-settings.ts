import {defineType} from 'sanity'

export default defineType({
  name: 'globalSettings',
  title: 'Глобальные настройки',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок страницы',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'SEO',
    },
  },
})
