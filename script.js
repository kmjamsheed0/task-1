/* Validation of form and redirect to accountpage */
const loginForm = document.getElementById("login");
const loginButton = document.getElementById("log");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.Uname.value;
    const password = loginForm.Pass.value;

    if (username === "user" && password === "pass") { 
        window.location = "account.html";               /*when validation succes redirect to account page*/
        
        }
    else {
        document.getElementById('errors').innerHTML="*Sorry login failed check again*";
    }
})
/*counter function using set and clear*/
function counter()
{
      var timeleft = 10;
      var downloadTimer = setInterval(function(){         /*here (set) uses to call the function multiple times until (clear) is used*/
			if(timeleft <= 0){                                  /*When timeleft is <= 0 ie need to stop the counter so we call (clear) in this (if block) */
				clearInterval(downloadTimer);
				document.getElementById("countdown").innerHTML = "Finished";
			} 
			else {                                               /* if timeleft is not 0 then show timeleft value in html(countdown will display) */
				document.getElementById("countdown").innerHTML = "00:" + timeleft + " seconds";
			}
			timeleft -= 1;                                       /* decrementing timeleft value by 1 */
        }, 1000);                                          /*it will diplay 1000 milliseconds time period in each call (ie 1 second time show this )*/
}        
