

import Layout from './components/layout/Layout'
import { lazy, Suspense } from 'react'
import LoadingSke from './components/loading/LoadingSke'
const GlobalIssueModal = lazy(() => import('./components/module/GlobalIssueModal'))
const IssueCardContainer = lazy(() => import('./components/template/IssueCardContainer'))
function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSke />}>
        <GlobalIssueModal />
        <IssueCardContainer />
      </Suspense>
    </Layout>
  )
}

export default App
