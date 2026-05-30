


import Layout from '@/components/layout/Layout'


import { FormInputContainer } from './components/template/FormInputContainer'
import IssueCardContainer from './components/template/IssueCardContainer'
import GlobalIssueModal from './components/module/GlobalIssueModal'






function App() {


  return (
    <Layout>
      <GlobalIssueModal/>
      <FormInputContainer />
      
      <IssueCardContainer />


    </Layout>
  )
}

export default App
