import { CoreTask } from '@universal-packages/core'
import { populateTemplates } from '@universal-packages/template-populator'
import path from 'path'

export default class ExpressSessionTask extends CoreTask {
  public static readonly taskName = 'express-session-task'
  public static readonly description = 'Express session related tasks'

  public async exec(): Promise<void> {
    switch (this.directive) {
      case 'init':
        await populateTemplates(path.resolve(__dirname, 'template'), './src', { override: this.args.f })

        this.logger.log({ level: 'INFO', title: 'Express session template initialized' })
        break
      default:
        throw new Error(`Unrecognized directive ${this.directive}`)
    }
  }
}
