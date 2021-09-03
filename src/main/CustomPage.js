import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonBackButton,
  IonIcon,
  IonSearchbar,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { chevronBack, pin, wifi, wine, warning, walk } from "ionicons/icons";

const CustomPage = (props) => {
  const mainContent = props.children;
  const {
    name,
    sideMenu = false,
    sideMenuPosition = "end",
    backButton = false,
    backButtonIcon = chevronBack,
    backButtonText = " ",
    backButtonPath,
    actionButton = false,
    actionButtonPosition,
    actionButtonIcon,
    actionButtonIconSize,
    actionButtonClickEvent,
    contentClass,
    searchbar = false,
    searchbarEvent,
    showLargeHeader = true,
  } = props;

  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>{name}</IonTitle>

          {backButton && (
            <IonButtons slot="start">
              <IonBackButton
                icon={backButtonIcon}
                text={backButtonText}
                defaultHref={backButtonPath}
              />
            </IonButtons>
          )}

          {actionButton && actionButtonIcon && (
            <IonButtons slot={actionButtonPosition}>
              <IonIcon
                style={{ fontSize: actionButtonIconSize }}
                icon={actionButtonIcon}
                onClick={actionButtonClickEvent}
              ></IonIcon>
            </IonButtons>
          )}

          {sideMenu && (
            <IonButtons slot={sideMenuPosition}>
              <IonMenuButton />
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>

      <IonContent className={contentClass} fullscreen>
        {showLargeHeader && (
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle slot="start" size="large">
                {name}
              </IonTitle>
              {searchbar && (
                <IonSearchbar
                  style={{ marginTop: "-0.2rem", width: "50%", float: "right" }}
                  onKeyUp={(e) => searchbarEvent(e)}
                  onChange={(e) => searchbarEvent(e)}
                />
              )}
            </IonToolbar>
          </IonHeader>
        )}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags, within an
            ion-cardContent element.
          </IonCardContent>
        </IonCard>
        {mainContent}
      </IonContent>
    </>
  );
};

export default CustomPage;
