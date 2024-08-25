import { IonRippleEffect } from "@ionic/react";
import item1 from "../../assets/items/item1.png"
import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonItem, IonLabel } from '@ionic/react';
import {items} from "../../data/items.jsx"

export default function TrendingItems() {
  return (
    <IonGrid>
          <IonRow>
         { items.map((e) => {
          return(
            <IonCol size="4">
            <Item image={e.image}/>
          </IonCol>
          )
         })}
           
          </IonRow>
        </IonGrid>
  
  );
}

const Item =({image})=> {
  return(
    <div style={{display:"flex",flexDirection:'column',width:"100px"}}>
    <img style={{height:"120px",borderRadius:"20px",objectFit:"contain"}} src={image} alt="" /> 
    <small style={{fontWeight:"bolder",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>Blueberry Imported</small>
    <small style={{paddingTop:"8px",paddingBottom:"10px"}}>120 g</small>

    <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={{display:"flex", flexDirection:"column",gap:"1px",fontSize:"14px",fontWeight:"bolder"}}>
    <small style={{color:"#747474"}}>$299</small>
    <small style={{color:"#080808"}}>$252</small>
    </div>

    <div style={{border:"1px solid red", fontWeight:"bolder",color:"red",borderRadius:"10px", width:"50px" ,display:"flex", justifyContent:"center",alignItems:"center",fontSize:"16px"}} className="ion-activatable ripple-parent rounded-rectangle">
     Add 
     <IonRippleEffect></IonRippleEffect>
   </div>
    </div>
 </div>
  )
}