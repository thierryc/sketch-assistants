import { Assistant } from '@sketch-hq/sketch-assistant-types'
import core from '@sketch-hq/sketch-core-assistant'

const assistant: Assistant = async (env) => {
  const coreAssistant = await core(env)
  return {
    name: '@sketch-hq/sketch-reuse-suggestions-assistant',
    rules: coreAssistant.rules,
    config: {
      rules: {
        '@sketch-hq/sketch-core-assistant/text-styles-prefer-shared': {
          active: true,
          maxIdentical: 2,
        },
        '@sketch-hq/sketch-core-assistant/layer-styles-prefer-shared': {
          active: true,
          maxIdentical: 2,
        },
        '@sketch-hq/sketch-core-assistant/groups-no-similar': {
          active: true,
          maxIdentical: 2,
        },
      },
    },
  }
}

export default assistant
