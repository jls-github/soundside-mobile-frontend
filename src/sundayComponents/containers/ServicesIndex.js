import React, {useState, useEffect} from 'react'
import Service from '../components/Service.js'
import Connect from '../components/Connect.js'
import NavigationAction from '../../images/Navigation_Action.png'

const ServicesIndex = (props) => {
    // const [showInstallPrompt, setShowInstallPrompt] = useState(false)
    const [deferredPrompt, setDeferredPrompt] = useState(null)

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
          // Prevent the mini-infobar from appearing on mobile
          e.preventDefault();
          // Stash the event so it can be triggered later.
          setDeferredPrompt(e)
          // Update UI notify the user they can install the PWA
        //   setShowInstallPrompt(true)
          // Optionally, send analytics event that PWA install promo was shown.
          console.log(`'beforeinstallprompt' event was fired.`);
        });
      }, []);
    
      const handleClickInstall = async () => {
        // setShowInstallPrompt(false)
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice;
        // Optionally, send analytics event with outcome of user choice
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
      }

      const showPrompt = ('standalone' in window.navigator && window.navigator.standalone !== true)
    

    return(
        <div className="services-index">
            <div className="services-list">
                <Service />
                <Connect />
                {showPrompt && <div>
                    <p>Want to install this app on your phone?</p>
                    <p>iOS: Click on the {NavigationAction}, scroll down and select "Add To Home Screen"</p>
                    <p>Android: Click <bold onClick={handleClickInstall}>here</bold></p>
                </div>}
            </div>
        </div>
    )
}

export default ServicesIndex