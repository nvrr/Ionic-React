import React, { useContext, useEffect } from 'react';
import { IonApp, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import TabNavigation from '../../components/TabNavigation';
import UIContext from '../../MyContext'

const Slider: React.FC = ({children}) =>{
  const history = window.location.pathname;

  const { showTabs,setShowTabs } = useContext(UIContext);
  let tabStyle = showTabs ? undefined : { display: "none" };
useEffect(() => {
  history === "/" || history === "/login"  || history === "/details"  ? setShowTabs(false) : setShowTabs(true);
},[])

 
    return (
     
      <IonSplitPane contentId="main">
  <IonMenu type='overlay' contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      {/* <IonPage id="main-content">
        
        <IonContent className="ion-padding">
        {children}
        </IonContent>
      </IonPage> */}
<IonPage id="main-content">
{/* <IonHeader style={tabStyle}>
    <IonToolbar>
    <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>You</IonTitle>
          </IonToolbar>
          </IonHeader> */}
        
        <IonContent className="ion-padding">
       <TabNavigation/>
        </IonContent>
      </IonPage> 

      </IonSplitPane>
  
  )}
  
  export default Slider;