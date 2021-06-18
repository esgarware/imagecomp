import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import TakeSnapshot from '../../../components/snapshot'

const Compare = () => {
    const router = useRouter()
    console.log(router)

    const snapshot = dynamic(
        () => import('../../../components/snapshot'),
        { loading: () => <p>...</p>, ssr: false }
    );

    return (
        <div>
                Compare pages between url1: {router.query.url1} and url2: {router.query.url2}
                <TakeSnapshot/>
        </div>
    )
}

export default Compare