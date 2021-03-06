import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import info from '../data/aboutPage/aboutInfo';
import CreateComponent from '../components/commonComps/createComponent'

const IndexPage = () => {
const date = new Date()
const year = date.getFullYear()
const calcAge = () => {
  let age;
  let month = date.getMonth()
  age = (year - 1995 - 1)
  const bday = 5;
  if (month >= bday) {
    age = age + 1
  }
  return age
}

return(
  <Layout title="About Us" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto"}}>
    <SEO title="Home" />
      <section class="firstSection">
        <section class="firstSectionWrapper">
        <div class="firstSectionTitle">
          <h3>
            A Little More About Me
          </h3>
        </div>
        <div>
          <article class="firstSectionText">
            <p>
             I am Colorado born, currently residing in Fort Collins, CO. I'm {calcAge()} years old and I have a passion for many things, including; hiking, meditation, video games, coding, cooking, dogs & cats, and helping people.
            </p>
          </article>
        </div>
        </section>
      </section>
      <section class="secondSection">
          <CreateComponent component={'div'} data={info} />
      </section>
  </Layout>
)
}
export default IndexPage