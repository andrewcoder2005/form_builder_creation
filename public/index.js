document.addEventListener('DOMContentLoaded', () => {
    Formio.builder(document.getElementById('form-builder'), {}, {
        baseUrl: 'https://api.form.io',
        alwaysConfirmComponentRemoval: true,
        display: 'form', // Specify the type of builder to be rendered: 'form', 'wizard', or 'pdf', ( default as form)
        formConfig: {
            premiumComponents: {
                Tagpad: true, // Example of a premium component
                Signature: true, // Enable Signature component
                Sketchpad: true, // Enable Sketchpad component
                Custom: true // Enable Custom component
            }
        }
    }).then(function (builder) {
        console.log(builder.instance);
    }).catch(function (error) {
        console.error('Form builder initialization failed:', error);
    });
});
