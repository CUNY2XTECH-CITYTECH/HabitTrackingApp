import EmailPasswordWebJs from 'supertokens-web-js/recipe/emailpassword'
import SessionWebJs from 'supertokens-web-js/recipe/session'
import { SuperTokensConfig } from "supertokens-web-js/types"
import { appInfo } from './appInfo'

export const frontendConfig = (): SuperTokensConfig => {
  return {
    appInfo,
    recipeList: [
      EmailPasswordWebJs.init(),
      SessionWebJs.init(),
    ],
  }
}

