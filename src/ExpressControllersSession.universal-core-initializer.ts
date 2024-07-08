import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class ExpressControllersSessionInitializer extends CoreInitializer {
  public static readonly initializerName = 'express-controllers-session'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
