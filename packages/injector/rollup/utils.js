import merge from "lodash/merge"
import pkg from "../package.json"

const GIT_VERSION = process.env.GIT_COMMIT || 'dev-build';
const PKG_VERSION = pkg.version

export const getBanner = (outputName) => {
  const banner =
    `${'/*! @preserve\n'}${' * '}${outputName} Web SDK ${PKG_VERSION} - commit: ${GIT_VERSION}\n`
    // `${'/*! @preserve\n'}${' * '}${OUTPUT_NAME} JavaScript SDK for ${formatMap[format].target} v${pkg.version} - commit: ${gitVersion}\n` +
    + ` * Copyright (C) 2018-${new Date().getFullYear()} ${pkg.author}\n`
    + ' * This file is licensed under the AGORA, INC. SDK LICENSE AGREEMENT\n'
    + ' * A copy of this license may be found at https://www.agora.io/en/sdk-license-agreement/'
    + '\n */';

  return banner;
}



export const printBuildInfo = (env) => {
  console.log("\n------------------------------------------------------------\n")
  console.log(`[rtm-sdk] building for env:${env} version:${PKG_VERSION} `);
  console.log("\n------------------------------------------------------------\n")
}

export const mergeConfig = (configA, configB) => {
  return merge(configA, configB)
}
