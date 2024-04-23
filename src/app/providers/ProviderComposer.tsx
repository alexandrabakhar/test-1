import { FC, PropsWithChildren } from 'react'

type Properties = {
  providers: FC<PropsWithChildren>[]
} & PropsWithChildren

const ComposerFragment = ({ children }: PropsWithChildren) => <>{children}</>
const providerReducer =
  (
    ParentProvider: FC<PropsWithChildren>,
    ChildProvider: FC<PropsWithChildren>,
  ) =>
  ({ children }: PropsWithChildren) => {
    return (
      <ParentProvider>
        <ChildProvider>{children}</ChildProvider>
      </ParentProvider>
    )
  }
export const ProviderComposer = ({ children, providers }: Properties) => {
  const ComposedProviders = providers.reduce(providerReducer, ComposerFragment)
  return <ComposedProviders>{children}</ComposedProviders>
}
