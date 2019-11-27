import React from 'react'
import App from 'next/app'
import Layout from '../layout/layout'

class Theme extends App{
    render(){
        const {Component,pageProps,router} = this.props


        if(router.pathname.startsWith('/component/base/')){
            return (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )
        }
        return(
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}

export default Theme;

