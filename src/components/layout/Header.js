import React from 'react';


import MainHeader from '../tailwindComps/Hero'
import SecondaryHeader from '../tailwindComps/SecondaryHeader'
const Header = (props) => {

  const firstTitle = 'partnerships'
  const secondaryTitles = ['Product', 'Pricing', 'About', 'Blog', 'Store','Contact']


  const getSecondaryTitle = (curTitle) => {
    for (let i=0;i<secondaryTitles.length;i++) {
      if (curTitle === secondaryTitles[i]) {
        return secondaryTitles[i]
      }
    }
  }
  const secondTitle = getSecondaryTitle(props.title)
  const HomeHeader = () => (
    <section class="headerPictureWrapper">

   <MainHeader />

    </section>
  )
  const SecondaryHeaderComp = () => (
    <section class="headerPictureWrapper">
   <SecondaryHeader />
   </section>
  )
  const StoreHeader = () => (
    <section class="headerPictureWrapper">
   <div class="headerBorder">
   <h1 class="headerTitle">
   {props.title}
   </h1>

   </div>
   </section>
  )
  const SwitchHeader = () => {
    switch(props.title) {
        case firstTitle:
          return <MainHeader />
        case secondTitle:
          return <SecondaryHeader title={props.title} text={props.text} />

        default:
          return <StoreHeader />
    }
  }
return (
 <SwitchHeader />
)
}
export default Header;