import React from 'react';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/react';


export default function Menu() {
  return (
    <>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding">
        <div>
          Menu
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}