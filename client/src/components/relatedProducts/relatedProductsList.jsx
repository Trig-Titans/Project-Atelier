
import React, { useState } from "react";
import styled from 'styled-components';
import Outfit from './outfitList.jsx'
import RelationModal from './relationModal.jsx'
import RelatedCarousel from './relatedCarousel.jsx'
import axios from 'axios';
import API_KEY from '../../../../config.js'

const Lists = styled.div`
  margin-left: 23%;
  width:53%;
`
const Title = styled.p`
  text-align: left;
`
const RelatedProducts = (props) => {
  //Koz has it started as a string
  const product_id = Number(props.mainProduct)
  const product_style = props.currentStyleId
  const [modalOpen, setModalOpen] = React.useState(false);
  const [accumulatedProductData, setAccumulatedProductData] = React.useState([]);
  const [productData, setProductData] = React.useState(null);
  const [productCardClickedOn, setProductCardClickedOn] = React.useState('')

  console.log(`-RELATED PRODUCTS-
      ID: ${product_id}, Style: ${product_style}`)

  React.useEffect(() => {

    //CALLS FOR MAIN PRODUCT
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}`, { headers: { Authorization: API_KEY } })
      .catch(err => { console.log('ERROR IN INFO CALL FOR MAIN PRODUCT: ', err) })
      .then(response => {
        let productInfoObj = response.data

        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}/styles`, {
          headers: { Authorization: API_KEY }
        })
          .catch(err => { console.log('ERROR IN STYLES CALL FOR MAIN PRODUCT: ', err) })
          .then(response => {
            let productStylesObj = response.data;

            axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${product_id}`, {
              headers: { Authorization: API_KEY }
            })
              .catch(err => { console.log('ERROR IN REVIEW CALL FOR MAIN PRODUCT: ', err) })
              .then(response => {
                let productReviewsObj = response.data

                setProductData({
                  info: productInfoObj,
                  styles: productStylesObj,
                  reviews: productReviewsObj
                })
              })
              .catch(err => (console.log('ERROR IN setProductData CALL FOR MAIN PRODUCT: ', err)))
          })
      })

    //CALLS FOR RELATED PRODUCTS
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}/related`, { headers: { Authorization: API_KEY } })
      .catch(err => { console.log('ERROR IN CALL FOR RELATED PPRODUCTS: ', err) })
      .then((response) => {
        let arrayOfRelatedProductIDs = response.data;

        Promise.all(arrayOfRelatedProductIDs.map(id => {
          return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, { headers: { Authorization: API_KEY } })
            .catch(err => { console.log('ERROR IN ACCUMULATED INFO CALL FOR RELATED PRODUCTS: ', err) })
            .then(response => {
              let productInfoObj = response.data

              return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, {
                headers: { Authorization: API_KEY }
              })
                .catch(err => { console.log('ERROR IN ACCUMULATED STYLES CALL FOR RELATED PRODUCTS: ', err) })
                .then(response => {
                  let productStylesObj = response.data;

                  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${id}`, {
                    headers: { Authorization: API_KEY }
                  })
                    .catch(err => { console.log('ERROR IN ACCUMULATED REVIEW/META CALL FOR RELATED PRODUCTS: ', err) })
                    .then(response => {
                      let productReviewsObj = response.data

                      let productData = {
                        info: productInfoObj,
                        styles: productStylesObj,
                        reviews: productReviewsObj
                      }

                      return productData
                    })
                    .catch(err => { console.log('ERROR IN ACCUMULATED DATA FOR RELATED PRODUCTS: ', err) })
                })
            })
        }))
        .catch(err => { console.log('ERROR IN Promise.all CALL FOR RELATED PRODUCTS: ', err) })
        .then(response => { setAccumulatedProductData(response) } )
      })

  }, [product_id, product_style])

  return (
    <Lists>

      <br />
      <Title>RELATED PRODUCTS</Title>
      <br />

      <RelatedCarousel
        accumulatedProductData = {accumulatedProductData}
        product_id={product_id}
        product_style={product_style}
        setModalOpen={setModalOpen}
        handleChangeProduct={props.handleChangeProduct}
        setProductCardClickedOn={setProductCardClickedOn}
      />

      <br />
      <Title>OUTFIT</Title>
      <br />

      <Outfit
        productData = {productData}
        addProduct={props.mainProduct}
        addStyle={props.currentStyleId}
        handleChangeProduct={props.handleChangeProduct}
      />

      {
      modalOpen ?
      <RelationModal
        setModalOpen={setModalOpen}
        productData = {productData}
        accumulatedProductData = {accumulatedProductData}
        productCardClickedOn = {productCardClickedOn}


        /> : <div></div>}

    </Lists>
  );
}

export default RelatedProducts;

