import { Header } from "./components/Header/Header"
import { QuestionComponnt } from "./components/QuestionComponent/QuestionComponent"
import { GlobalStyle } from "./global"

export const App = () => {
  return (
    <div>
      <Header/>
      <QuestionComponnt/>
        {/* <h1>EconoFraudas</h1> */}
      <GlobalStyle/>
    </div>
  )
}
