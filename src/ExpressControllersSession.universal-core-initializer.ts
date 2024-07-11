import { CoreInitializer } from '@universal-packages/core'

export default class ExpressControllersSessionInitializer extends CoreInitializer {
  public static readonly initializerName = 'express-controllers-session'
  public static readonly description: string = 'Express Controllers Session initializer'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
