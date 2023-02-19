import Bar from "@/components/Bar/Bar"
import Contact from "@/components/ContactSection/Contact"
import Main from "@/components/MainSection/Main"
import Projects from "@/components/ProjectsSection/Projects"
import WhatIdo from "@/components/WhatIdoSection/WhatIdo"

const Home = () => {
  return (
    <>
      <Main/>
      <Bar/>
      <Projects/>
      <WhatIdo/>
      <Contact/>
    </>
  )
}

export default Home