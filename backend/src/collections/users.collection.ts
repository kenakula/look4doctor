import { CollectionConfig } from 'payload/types';

const UsersCollection: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      type: 'email',
      name: 'email',
      label: 'Почта',
      required: true,
      saveToJWT: true,
    },
    {
      type: 'text',
      name: 'name',
      label: 'Имя',
      required: true,
      saveToJWT: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'upload',
      name: 'userImage',
      label: 'Аватар',
      relationTo: 'media',
    },
    {
      name: 'role',
      type: 'select',
      access: {
        update: ({ req: { user } }) => user.role === 'admin',
      },
      required: true,
      defaultValue: 'user',
      options: [
        {
          value: 'user',
          label: 'Пользователь',
        },
        {
          value: 'admin',
          label: 'Администратор',
        },
      ],
      admin: {
        position: 'sidebar',
        isClearable: false,
      },
    },
    {
      type: 'checkbox',
      name: 'subscribed',
      label: 'Подписка на рассылку',
      defaultValue: false,
      admin: {
        condition: data => data.role !== 'admin',
        position: 'sidebar',
      },
    },
  ],
};

export default UsersCollection;
