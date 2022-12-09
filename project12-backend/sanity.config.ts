import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {DesktopIcon, EarthGlobeIcon} from '@sanity/icons'

const projectId = import.meta.env.SANITY_STUDIO_API_PROJECT_ID

export default defineConfig([
  {
    name: 'production',
    title: 'Project12 Production',
    basePath: '/prod',
    projectId,
    dataset: 'production',
    icon: EarthGlobeIcon,
    plugins: [deskTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'staging',
    title: 'Project12 Стенд',
    basePath: '/stage',
    projectId,
    dataset: 'staging',
    icon: DesktopIcon,
    plugins: [deskTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
])
