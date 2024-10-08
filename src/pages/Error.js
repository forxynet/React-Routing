import React from 'react'
import MainNavigations from '../components/MainNavigations'

export default function ErrorPage() {
  return (
    <>
          <MainNavigations />
          <main>
              <h1>An error occurred!</h1>
              <p>Could not find this page!</p>
          </main>
    </>
  )
}
