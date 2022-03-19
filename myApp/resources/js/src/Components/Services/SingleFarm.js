import React, { Fragment, useEffect } from 'react'
// import { useParams, useHistory } from 'react-router-dom'
// import { useProductsContext } from '../context/products_context'
// import { single_product_url as url } from '../utils/constants'
// import { formatPrice } from '../utils/helpers'
// import {
//   Loading,
//   Error,
//   ProductImages,
//   AddToCart,
//   Stars,
//   PageHero,
// } from '../components'
// import styled from './SingleFarm.module.css'
import { Link } from 'react-router-dom'
import Slider from '../Slider/SliderImg'
import './SingleFarm.css'
const SingleFarmPage = () => {
//   const { id } = useParams()
//   const history = useHistory()
//   const {
//     single_product_loading: loading,
//     single_product_error: error,
//     single_product: product,
//     fetchSingleProduct,
//   } = useProductsContext()

//   useEffect(() => {
//     fetchSingleProduct(`${url}${id}`)
//     // eslint-disable-next-line
//   }, [id])

//   useEffect(() => {
//     if (error) {
//       setTimeout(() => {
//         history.push('/')
//       }, 3000)
//     }
//     // eslint-disable-next-line
//   }, [error])

//   if (loading) {
//     return <Loading />
//   }
//   if (error) {
//     return <Error />
//   }
//   const {
//     name,
//     price,
//     description,
//     stock,
//     stars,
//     reviews,
//     id: sku,
//     company,
//     images,
//   } = product
  return (
    <Fragment>
      {/* <PageHero title={'ahmad'} product /> */}
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          <button>back to Farms</button>
        </Link>
        <div className=' product-center'>
          {/* <ProductImages images={'images'} /> */}
          {/* <img height={500} width={450} src='./img/wlc.jpg'/> */}
 <Slider/>
          <section className='content'>
            <h2>{name}</h2>
            {/* <Stars stars={stars} reviews={reviews} /> */}
            <h5 className='price'> 100</h5>
            <p className='desc'>Mzr3ti.com is designed to help suppliers and owners of farms, owners or furnished apartments reach the right customers at the time. At the same time, making it easier for customers to find all the information in one place instead of spending hours searching on the Internet. If you own a farm, or if you own a furnished apartment and want to rent it, and you don't know how you are in the right place to list your product and start offering/rent.</p>
            <p className='info'>
              <span>Available : </span>
              {true ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU : </span>
             ahmad
            </p>
            <p className='info'>
              <span>Brand : </span>
             Company
            </p>
            <hr />
            <button>booking</button>
          </section>
        </div>
      </div>
    </Fragment>
  )
}



export default SingleFarmPage
