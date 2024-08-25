import React from 'react';
import { IonApp, IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import Slider from '../Slider';
import { personCircleOutline, searchOutline } from 'ionicons/icons';

import TrendingItems from "../../components/TrendingItems/index"
import banner1 from "../../../src/assets/banners/banner1.png"
// export default function Home() {
//   return (
//     <>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Home</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className="ion-padding">
//       <div>Home</div>
//       </IonContent>
//       <IonFooter>
//         <IonToolbar>
//           <IonTitle>Footer</IonTitle>
//         </IonToolbar>
//       </IonFooter>
//     </>
//   );
// }

const Home: React.FC = () => {
  
  return(
    <IonApp>    
      <Header/>
      <IonContent>
      <div style={{}}>
    <img style={{height:"170px",width:"100%"}} src={banner1} alt="" />
  </div>
      
  <div overflow-scroll="true" className="">
  {/* <IonButton href='/details' >Home</IonButton> */}
 <TrendingItems/>
  </div>
      </IonContent>
</IonApp>
)
}

const Header=()=>{
  return(
    <div style={{backgroundColor:"#AFC7FA", paddingBottom:"10px"}}>
      {/* locaion --start*/}
      <div style={{display:"flex", alignItems:"center",justifyContent:"space-between",paddingTop:"20px",paddingLeft:"15px",paddingRight:"15px" }}>
        {/* left --start */}
        <div style={{display:"flex", alignItems:"center", justifyItems:"center",}}>
      <div style={{alignContent:"center"}}>
      {/* <IonAvatar style={{backgroundColor:"green",}} > */}
        <img style={{width:"30px", height:"30px", borderRadius:"100px", border:"3px solid black",marginTop:"18px"}} alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      {/* </IonAvatar> */}
      </div>
      <div style={{display:"flex",flexDirection:"column",paddingLeft:"10px"}}>
        <h5 style={{fontWeight:'bold',marginBottom:"-1px"}}>Delivery in <span style={{color:"#4C05D1"}}>11 Mins</span></h5>
        <small style={{fontWeight:'normal',}}>madhapur - Ayyappa Society</small>
      </div>
      </div>
        {/* left --end */}

        {/* right --start */}
        <div style={{border:"0.5px solid #CACA22", padding:"4px",borderRadius:"20px",backgroundColor:"white",display:"flex"}}>
        <IonBadge style={{}} color="warning">GET</IonBadge>
        </div>
        {/* right --end */}
      </div>
      {/* locaion --end*/}

      <div style={{width:"90%", margin:"auto", paddingTop:"10px"}}>
      <IonInput placeholder='Search for items' style={{border:"1px solid white", borderRadius:"9px",backgroundColor:"white",display:"flex",alignItems:"center",}} >
      <IonIcon style={{paddingLeft:"15px",paddingRight:"10px"}} icon={searchOutline} />
      </IonInput>
      </div>
        </div>
  )
}

export default Home;