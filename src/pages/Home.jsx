import React from 'react'
import { Hero, ItemsCarouse, Search, Vissions } from '../components'

function Home() {
  return (<>
  <div className="mt-[2px]">
  <Hero/>
<Search/>
<ItemsCarouse/>
<Vissions/>
  </div>
</>  )
}

export default Home