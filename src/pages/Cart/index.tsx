import React from 'react';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

export default function Cart() {
  return (
    <>
    {/* <IonHeader>
      <IonToolbar>
        <IonTitle>Cart</IonTitle>
      </IonToolbar>
    </IonHeader> */}
    <IonContent className="ion-padding">
      <div>
        Cart
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
