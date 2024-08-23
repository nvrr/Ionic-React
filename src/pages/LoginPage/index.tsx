import React, { useContext, useEffect, useState } from 'react';
import { IonBackButton, IonButton, IonContent, IonHeader, IonPage, IonTabButton, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { useHistory } from 'react-router';
import Home from '../Home/index'
import UIContext from '../../MyContext'

import './index.css'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useIonRouter()
  const history = useHistory()

  const {setShowTabs} = useContext(UIContext)

  // TabNavigation
  // useEffect(() => {
  //   setShowTabs(false);

  //   // when component is unloaded, call this code
  //   return () => {
  //     setShowTabs(true);
  //   };
  // });


  console.log("naaa:",navigate);

  const doLogin=()=> {
    setIsLogin(true)
    // history.push("/home")
    navigate.push('/home', 'forward', 'replace');

  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      
        <IonButton href='/home' onClick={() =>navigate.push('./home','forward', 'replace')} expand='full'>Login</IonButton>

      </IonContent>
    </IonPage>
  );
}