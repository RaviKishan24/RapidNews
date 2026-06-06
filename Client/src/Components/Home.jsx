import React from 'react'
import News from './News'
import Wrapper from './Wrapper'
import Category from './Category'

function Home() {
    return (
        <Wrapper>
            <Category className="py-10 gap-10" />    {/*padding py send as prop  */}
            <News className="px-5 gap-2 " />
        </Wrapper>
    )
}

export default Home
