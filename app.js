let computer, utente, vincitore
let pc = 0
let pu = 0

function sceltaComputer(){
    let numeroCasuale = Math.floor(Math.random()*3)
    let sceltePossibili = ["sasso", "forbici", "carta"]
    computer = sceltePossibili[numeroCasuale]
    let sceltaComputer = document.querySelector("#computer")
    sceltaComputer.innerHTML = computer
}

function sceltaUtente(scelta){
    utente = scelta
    determinaVincitore()
}

function determinaVincitore(){
    sceltaComputer()

    if(computer === utente){
        vincitore = 'pareggio'
    } else if( computer === 'carta' && utente === 'sasso' ){
        vincitore = 'computer'
        pc += 1
        let spanvittcomputer = document.querySelector("#vittcomputer")
        spanvittcomputer.innerHTML = pc
    } else if( computer === 'carta' && utente === 'forbici' ){
        vincitore = 'utente'
        pu += 1
        let spanvittgiocatore = document.querySelector("#vittgiocatore")
        spanvittgiocatore.innerHTML = pu
    } else if( computer === 'sasso' && utente === 'forbici' ){
        vincitore = 'computer'
        pc += 1
        let spanvittcomputer = document.querySelector("#vittcomputer")
        spanvittcomputer.innerHTML = pc
    } else if( computer === 'sasso' && utente === 'carta' ){
        vincitore = 'utente'
        pu += 1
        let spanvittgiocatore = document.querySelector("#vittgiocatore")
        spanvittgiocatore.innerHTML = pu
    } else if( computer === 'forbici' && utente === 'carta' ){
        vincitore = 'computer'
        pc += 1
        let spanvittcomputer = document.querySelector("#vittcomputer")
        spanvittcomputer.innerHTML = pc
    } else if( computer === 'forbici' && utente === 'sasso' ){
        vincitore = 'utente'
        pu += 1
        let spanvittgiocatore = document.querySelector("#vittgiocatore")
        spanvittgiocatore.innerHTML = pu
    }

    let spanVincitore = document.querySelector("#vincitore")
    spanVincitore.innerHTML = vincitore
}

/*function punteggio(vincitore){

    
    if(vincitore === 'computer'){
       
    }else if (vincitore === 'utente'){
        
    }
}*/
