// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const buttonTakeoff = document.getElementById("takeoff");
    const buttonLanding = document.getElementById("landing");
    const buttonAbort = document.getElementById("missionAbort");
    const statusFlight = document.getElementById("flightStatus");
    const heightShuttle = document.getElementById("spaceShuttleHeight");
    const backgroundShuttle = document.getElementById("shuttleBackground");
    const buttonUp = this.document.getElementById('up')

    buttonTakeoff.addEventListener('click', function(){
        let confirmLaunch = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (confirmLaunch){
            statusFlight.innerHTML = 'Shuttle in flight.';
            backgroundShuttle.style.backgroundColor = 'blue';
            heightShuttle.innerHTML = add10k(Number(heightShuttle.innerHTML));

        }
    })

    buttonLanding.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        statusFlight.innerHTML = 'The shuttle has landed.';
        backgroundShuttle.style.backgroundColor = 'green';
        heightShuttle.innerHTML = 0;
    })

    buttonAbort.addEventListener('click', function(){
        let confirm = window.confirm('Confirm you want to abort the mission.')
        if (confirmLaunch){
        statusFlight.innerHTML = 'The shuttle has landed.';
        backgroundShuttle.style.backgroundColor = 'green';
        heightShuttle.innerHTML = 0;
    }
    })


buttonUp.addEventListener('click', function(){
    if (statusFlight.innerHTML === 'shuttle in flight.'){
        heightShuttle.innerHTML = add10k(Number(heightShuttle.innerHTML));
    }
    shuttleImg.style.marginBottom = 10;
})
console.log(parseInt(shuttleImg.style.marginBottom));

buttonDown.addEventListener('click', function(){
    if (statusFlight.innerHTML === "Shuttle in flight." && Number(heightShuttle.innerHTML) > 0){
        heightShuttle.innerHTML = remove10k(Number(heightShuttle.innerHTML));
    }
});
buttonLeft.addEventListener('click', function())
function add10k(num){
    return num = 10000
}
})
