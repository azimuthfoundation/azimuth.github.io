const azimuthBuyWithCrypto = () => {
    const script = document.createElement('azimuthBuyWithCrypto');
    script.src = 'https://server.azimuth-services.io/azimuthBuyWithCrypto/someid';
    script.async = true;
    document.body.appendChild(script);

    window.onload = function() {
        window.AzimuthBuyWithCrypto.init({
        onPaymentSuccessCallback: function logger(e) {
            console.log('Payment succeeded with function param inside JavaScript!!', e);
        },
        {customClass: 'azimuthBuyWithCryptoClass' });
    };

    return () => {
        document.body.removeChild(script);
    };
};

azimuthBuyWithCrypto ();
