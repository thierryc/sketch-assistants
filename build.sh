# Types and utils need to be built before the Core Assistant, which uses Babel
# to compile not pure tsc. So we can't rely on TypeScript Project References
# alone to control monorepo build order
yarn workspace @sketch-hq/sketch-assistant-types run build
yarn workspace @sketch-hq/sketch-assistant-utils run build
yarn workspace @sketch-hq/sketch-core-assistant run build
yarn workspace @sketch-hq/sketch-tidy-assistant run build
yarn workspace @sketch-hq/sketch-naming-conventions-assistant run build
yarn workspace @sketch-hq/sketch-reuse-suggestions-assistant run build