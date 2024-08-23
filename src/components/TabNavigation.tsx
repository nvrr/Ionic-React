import { IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { ellipse, square, triangle } from 'ionicons/icons';
import { Redirect, Route } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import LoginPage from "../pages/LoginPage";
import Slider from "../pages/Slider";

import UIContext from '../MyContext'
import { useContext, useEffect } from "react";
import Details from "../pages/Details";

export default function TabNavigation() {
    const history = window.location.pathname;

    const { showTabs,setShowTabs } = useContext(UIContext);
    let tabStyle = showTabs ? undefined : { display: "none" };
useEffect(() => {
  history === '/' || history === "/login" || history === "/details" ? setShowTabs(false) : setShowTabs(true);
},[])


    console.log("ggg:", showTabs);
  return (
    <IonPage>
  
      <IonContent>
     <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet id="main-content">
      
        <Route exact path="/home" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/details" component={Details} />
        
        <Redirect exact from="/" to='/login' />
          
      </IonRouterOutlet>
      <IonTabBar slot="bottom" style={tabStyle}>
        <IonTabButton tab="home" href="/home">
          <IonIcon aria-hidden="true" icon={triangle} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="menu" href="/menu">
          <IonIcon aria-hidden="true" icon={ellipse} />
          <IonLabel>Menu</IonLabel>
        </IonTabButton>
        <IonTabButton tab="cart" href="/cart">
          <IonIcon aria-hidden="true" icon={square} />
          <IonLabel>Cart</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
  </IonContent>
    </IonPage>
  );
}