export function calculateBudget(cant, time){

    let total;
    let intrestCant;
    let intrestTime;

    //Cantidades
    //0 - 1000 = 25%
    //1001 - 5000 = 20%
    //5001 - 10000 = 15%
    //+10000 = 10%

    if(cant <= 1000){
        intrestCant = cant * 0.25;
    }
    else if(cant >= 1001 && cant <= 5000){
        intrestCant = cant * 0.20;
    }
    else if(cant >= 5001 && cant <= 10000){
        intrestCant = cant * 0.15;
    }
    else if (cant > 10000) {
        intrestCant = cant * 0.10;
    } else {
        
    }

    //Period of time
    //3 - months = 5%
    //6 - months = 10%
    //12 - months = 15%
    //24 months= 20%

    switch (time) {
        case '3':
            intrestTime = cant * 0.05
            break;
        case '6':
            intrestTime = cant * 0.10
            break;
        case '12':
            intrestTime = cant * 0.15
            break;
        case '24':
            intrestTime = cant * 0.20
            break;
    
        default:
            break;
    }
    total = cant + intrestCant + intrestTime;
    return total;
}