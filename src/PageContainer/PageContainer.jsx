import Footer from "../layout/Footer/footer"
import Header from "../layout/Header/header"


function PageContainer({children}) {
  return (
    <>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

export default PageContainer