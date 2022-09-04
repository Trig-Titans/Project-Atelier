import React, { useState }from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaCheck} from '@fortawesome/free-solid-svg-icons'

  const DarkBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  `
  const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  `
  const Modal = styled.div`
  width: 250px;
  height: 170px;
  background: white;
  color: teal;
  z-index: 15;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  `
const RelationModal = (props) => {

let main = props.productData.info;
let related = props.accumulatedProductData.filter(product => product.info.id === props.productCardClickedOn)[0].info;
let mainName = main.name;
let relatedName = related.name;
let mainFeatures = main.features.map(feature => `${feature.value} ${feature.feature}`);
let relatedFeatures = related.features.map(feature => `${feature.value} ${feature.feature}`);
let sameFeatures = mainFeatures.filter(feature => relatedFeatures.indexOf(feature) > -1);
let differentFeatures = mainFeatures.concat(relatedFeatures).filter(feature => sameFeatures.indexOf(feature) === -1);
let totalFeatures = sameFeatures.concat(differentFeatures);
let whereToCheck = totalFeatures.map(feature => {
  return sameFeatures.indexOf(feature) > -1?
    'both' : mainFeatures.indexOf(feature) > -1 ?
      mainName : relatedName;
});
let table = [
            <thead>
              <tr>
                <td>{mainName}</td>
                <td></td>
                <td>{relatedName}</td>
              </tr>
            </thead>
            ];

  return (
    <div>
       <DarkBackGround onClick={()=>{

        console.log('dark background clicked', mainFeatures, relatedFeatures, sameFeatures, differentFeatures, totalFeatures, whereToCheck)
        props.setModalOpen(false) }
       }
        />
    <Centered>
      <Modal>

         <table>

          {table.concat(whereToCheck.map((location, index) => {
            return location === 'both' ?
              (
                <tbody key={index} >
                  <tr>
                  <td>{'x'}</td>
                  <td>{totalFeatures[index]}</td>
                  <td>{'x'}</td>
                  </tr>
                </tbody>

              ) : location === mainName ?
                (
                  <tr key={index} >
                    <td>{'x'}</td>
                    <td>{totalFeatures[index]}</td>
                    <td></td>
                  </tr>
                )
                  :  (
                    <tr key={index} >
                      <td></td>
                      <td>{totalFeatures[index]}</td>
                      <td>{'x'}</td>
                    </tr>

                    )
          }))}
        </table>
      </Modal>
    </Centered>
    </div>
  )
};

export default RelationModal;

