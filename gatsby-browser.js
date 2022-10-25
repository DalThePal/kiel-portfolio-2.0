import React from 'react'
import Layout from 'components/Layout'

import gsap, { ScrollSmoother, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

// export const wrapRootElement = ({ element }) => {
//   return <Providers>{element}</Providers>
// }

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}