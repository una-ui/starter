import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetUna from '@una-ui/preset'
import prefixes from '@una-ui/preset/prefixes'
import extratorUna from '@una-ui/extractor-vue-script'

export default {
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetUna(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  extractors: [
    extratorUna({
      prefixes,
    }),
  ],
}
