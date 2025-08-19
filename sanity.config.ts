import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

const documentInternationalizationConfig = {
	supportedLanguages: [
		{id: 'en', title: 'English', isDefault: true},
		{id: 'nl', title: 'Dutch'},
    {id: 'fr', title: 'French'},
    {id: 'de', title: 'German'}
	],
	schemaTypes: ['externalPublication', 'post'],
  allowCreateMetaDoc: true,
  weakReferences: true
}

const internationalizationConfig = {
    languages: [
      {id: 'en', title: 'English'},
      {id: 'nl', title: 'Dutch'},
      {id: 'fr', title: 'French'},
      {id: 'de', title: 'German'}
    ],
    defaultLanguages: ['en'],
    fieldTypes: ['captionType'],
  }

export default defineConfig({
  name: 'default',
  title: 'Wattlab',
  projectId: 'fq3bkk1h',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(), 
    documentInternationalization(documentInternationalizationConfig),
    internationalizedArray(internationalizationConfig)
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => prev.filter((template) => !['externalPublication', 'post'].includes(template.id)),
  }, 
})
