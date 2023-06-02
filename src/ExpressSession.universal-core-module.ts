import { CoreModule } from '@universal-packages/core'
import { initialize } from '@universal-packages/express-controllers-session'
import { ExpressSessionOptions } from '@universal-packages/express-session'

export default class ExpressSessionModule extends CoreModule<ExpressSessionOptions> {
  public static readonly moduleName = 'express-session-module'
  public static readonly description = 'Express session initialization module'

  public async prepare(): Promise<void> {
    initialize(this.config)
  }

  public async release(): Promise<void> {}
}
