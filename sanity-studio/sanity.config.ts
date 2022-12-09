import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {DesktopIcon, EarthGlobeIcon} from '@sanity/icons'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

const projectId = import.meta.env.SANITY_STUDIO_API_PROJECT_ID

export default defineConfig([
  {
    name: 'production',
    title: 'Production',
    basePath: '/prod',
    projectId,
    dataset: 'production',
    icon: EarthGlobeIcon,
    plugins: [deskTool(), visionTool(), unsplashImageAsset()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'Stage',
    basePath: '/stage',
    projectId,
    dataset: 'stage',
    icon: DesktopIcon,
    plugins: [deskTool(), visionTool(), unsplashImageAsset()],

    schema: {
      types: schemaTypes,
    },
  },
])
