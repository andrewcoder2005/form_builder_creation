var form
var formTemplateToSave

document.addEventListener('DOMContentLoaded', () => {
    Formio.builder(document.getElementById('form-builder'), {}, {
        baseUrl: 'https://api.form.io',
        alwaysConfirmComponentRemoval: true,
        display: 'form', // Specify the type of builder to be rendered: 'form', 'wizard', or 'pdf', ( default as form)

    }).then(function (builder) {
        console.log(builder.instance);
        form = builder;
        form.on('change', function(payload) {
            formTemplateToSave = JSON.stringify(form.schema, null, 4);
            console.log('Form template');
            console.log(formTemplateToSave); //json of tempalte
        });

    }).catch(function (error) {
        console.error('Form builder initialization failed:', error);
    });
});


 // this is the serialized form template to save
