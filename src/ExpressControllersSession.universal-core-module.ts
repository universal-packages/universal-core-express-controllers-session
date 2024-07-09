import { CoreModule } from '@universal-packages/core'
import { initialize } from '@universal-packages/express-controllers-session'
import { ExpressSessionOptions } from '@universal-packages/express-session'

export default class ExpressControllersSessionModule extends CoreModule<ExpressSessionOptions> {
  public static readonly moduleName = 'express-controllers-session'
  public static readonly description = 'Express Controllers Session initialization module'

  public async prepare(): Promise<void> {
    initialize(this.config)
  }

  public async release(): Promise<void> {}
}
