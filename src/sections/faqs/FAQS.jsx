import './faqs.css'
import React from 'react'
import faqs from './data'
import FAQ from './FAQ'

const FAQS = () => {
    return (
        <section id='faqs'>
            <h2>Frequently Asked Questions</h2>
            <div className='container faqs__container'>
                {
                    faqs.map(faq => <FAQ key={faq.id} faq={faq} />)
                }
            </div>
        </section>
    )
}

export default FAQS