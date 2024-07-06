document.addEventListener('DOMContentLoaded', () => {
    Formio.builder(document.getElementById('form-builder'),{},{
        baseUrl: 'https://api.form.io',
        alwaysConfirmComponentRemoval: true,
    }),then(function(builder){
        console.log(builder.instance);
    })
})