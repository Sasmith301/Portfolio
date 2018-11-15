$(function() {
  $("form[name='registration']").validate({
    rules: {
    client_name:"required",
    client_gender:"required",
    client_ethnicity:"required",
    client_age:"required",
    client_height_cm:"required",
    client_weight_kg:"required",
    client_eye_color:"required",
    client_hair_color:"required",
    client_email:{
        required:true,
        email:true
    }
    },
    
messages: {
    client_name:"Please enter your first and last name.",
    client_gender:"Please choose a valid gender.",
    client_ethnicity:"Please choose your appropriate ethnicity.",
    client_age:"Please enter a valid age.",
    client_height_cm:"Please enter valid height in centimeters.",
    client_weight_kg:"Please enter valid weight in kilograms.",
    client_eye_color:"Please choose your appropriate eye color.",
    client_hair_color:"Please choose your appropriate hair color.",
    client_email:"Please enter a valid email."
    },

submitHandler: function(form) {
      form.submit();
    }
  });
});