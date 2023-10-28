import { initialize } from '@universal-packages/express-controllers-session'

import { ExpressSessionModule } from '../src'

jest.mock('@universal-packages/express-controllers-session')

jestCore.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(ExpressSessionModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(core.coreModules.expressSessionModule).not.toBeUndefined()
    expect(core.coreModules.expressSessionModule.config).toEqual({ registryId: 'my-app' })

    expect(initialize).toHaveBeenCalledWith({ registryId: 'my-app' })
  })
})
