import React from 'react'
import Layout from 'components/Layout'

// export const wrapRootElement = ({ element }) => {
//   return <Providers>{element}</Providers>
// }

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}