import { Logger } from '@universal-packages/logger'

import { ExpressSessionModule } from '../src'

describe('ExpressSessionModule', (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })
    const module = new ExpressSessionModule({} as any, logger)

    await module.prepare()
    await module.release()
  })
})
