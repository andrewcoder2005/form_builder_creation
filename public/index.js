document.addEventListener('DOMContentLoaded', () => {
    Formio.builder(document.getElementById('form-builder'),{},{
        baseUrl: 'https://api.form.io'
    }),then(function(builder){
        console.log(builder.instance);
    })
})