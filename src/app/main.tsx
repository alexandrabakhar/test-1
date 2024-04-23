import ReactDOM from 'react-dom/client'
import { BaseLayout } from './layouts/BaseLayout'
import { PROVIDERS, ProviderComposer } from './providers'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@/i18n'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <ProviderComposer providers={PROVIDERS}>
    <BaseLayout />
  </ProviderComposer>,
)
