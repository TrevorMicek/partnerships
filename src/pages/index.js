import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import FeatureSection from '../components/tailwindComps/FeatureSection'
import FrontPageInfo from '../components/tailwindComps/FrontPageInfo'
const IndexPage = () => (
  <Layout title="partnerships" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
    <SEO title="Home" />
  <FeatureSection />
  <FrontPageInfo />


  </Layout>
)
export default IndexPage
