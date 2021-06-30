import React from 'react'
//styles
import {Wrap} from './index.styles'
export default function Person({data, loading}) {
    // console.log('data person', data)
    if(loading) {
        return <h2>loading...</h2>;
    }
    return (
        <Wrap>
            <img src={data.avatar_url} alt="avatar-default" className="avatar" />
            <p className="name">{data.login}</p>
            <a className="btn-style" href={data.html_url}>View profile</a>
        </Wrap>
    )
}
