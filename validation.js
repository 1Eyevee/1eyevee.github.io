const form = document.getElementById('form')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  let errors = []

  let usernames = ["IR", "MM", "TS", "AF", "MK"]
  let passwords = ["IR", "MM", "TS", "AF", "MK"];

  if(email_input){
    // If we have a firstname input then we are in the signup
    errors = getLoginFormErrors(email_input.value, password_input.value, usernames, passwords)
  }

  if(errors.length > 0){
    // If there are any errors
    e.preventDefault()
    check = false
    error_message.innerText  = errors.join(". ")
  }
})

function getLoginFormErrors(email, password, user, pass){
    let errors = []
  
    if(email === '' || email == null){
      errors.push('Username is required')
      email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
      errors.push('Password is required')
      password_input.parentElement.classList.add('incorrect')
    }

    else if(checkLogin(email, user) == null)
    {
        errors.push("Username not in use")
        email_input.parentElement.classList.add('incorrect')
    }

    else if(String(email).toUpperCase() != user[checkLogin(email, user)] || String(password).toUpperCase() != pass[checkLogin(email, user)])
    {
        errors.push('Username or Password is incorrect')
        email_input.parentElement.classList.add('incorrect')
        password_input.parentElement.classList.add('incorrect')
    }
  
    return errors;
  }
  
  const allInputs = [email_input, password_input].filter(input => input != null)
  
  allInputs.forEach(input => {
    input.addEventListener('input', () => {
      if(input.parentElement.classList.contains('incorrect')){
        input.parentElement.classList.remove('incorrect')
        error_message.innerText = ''
      }
    })
  })

function checkLogin(email, user)
{
    for(i = 0; i < user.length; i++)
    {
        if (user[i] == String(email).toUpperCase())
        {
            return i;
        }
    }
    return null;
}