import { initialize } from '@universal-packages/express-controllers-session'

import { ExpressControllersSessionModule } from '../src'

jest.mock('@universal-packages/express-controllers-session')

coreJest.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(ExpressControllersSessionModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(core.coreModules.expressControllersSessionModule).not.toBeUndefined()
    expect(core.coreModules.expressControllersSessionModule.config).toEqual({ registryId: 'my-app' })

    expect(initialize).toHaveBeenCalledWith({ registryId: 'my-app' })
  })
})
