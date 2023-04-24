var VIXInput = 0;
var UPROInput = 0;
var XYLDInput = 0;

var BVOLInput = 0;
var BTCInput = 0;
var EVOLInput = 0;
var ETHInput = 0;

const POOP = Math.sqrt(1/365)*Math.sqrt(2/3.142);



// stock grid

function updateGrid() {

    NUM1Input = document.getElementById('num1').value;
    NUM2Input = document.getElementById('num2').value;

    var ANS_var = NUM1Input/NUM2Input;
    
    const ANS = document.getElementById('ANS');
    ANS.innerText = ANS_var







    VIXInput = document.getElementById('VIX').value;
    XYLDInput = document.getElementById('XYLD').value;
    UPROInput = document.getElementById('UPRO').value;

    var trailing_stop_loss_XYLD_var = VIXInput*POOP*0.5;
    var stop_loss_XYLD_var = XYLDInput*(1-(trailing_stop_loss_XYLD_var/100));
    var stop_enter_XYLD_var = XYLDInput*(1+(trailing_stop_loss_XYLD_var/100));

    var trailing_stop_loss_x3_var = VIXInput*POOP*1.5;
    var stop_loss_next_var = UPROInput*(1-(trailing_stop_loss_x3_var/100));
    var stop_enter_next_var = UPROInput*(1+(trailing_stop_loss_x3_var/100));
    var stop_loss_if_enter_var = stop_enter_next_var*(1-(trailing_stop_loss_x3_var/100));

    BVOLInput = document.getElementById('BVOL').value;
    BTCInput = document.getElementById('BTC').value;
    EVOLInput = document.getElementById('EVOL').value;
    ETHInput = document.getElementById('ETH').value;

    var BTC_implied_avg_daily_var = BVOLInput*POOP;
    var BTC_stop_loss_next_var = BTCInput*(1-(BTC_implied_avg_daily_var/100));
    var BTC_stop_enter_next_var = BTCInput*(1+(BTC_implied_avg_daily_var/100));
    // var BTC_stop_loss_if_enter_var = BTC_stop_enter_next_var*(1-(BTC_implied_avg_daily_var/100));
    var ETH_implied_avg_daily_var = EVOLInput*POOP;
    var ETH_stop_loss_next_var = ETHInput*(1-(ETH_implied_avg_daily_var/100));
    var ETH_stop_enter_next_var = ETHInput*(1+(ETH_implied_avg_daily_var/100));
    // var ETH_stop_loss_if_enter_var = ETH_stop_enter_next_var*(1-(ETH_implied_avg_daily_var/100));

    // (C1) DATA ARRAY
    var stock_data = [
        ["%", "XYLD stop loss", "XYLD stop enter", "UPRO stop loss", "UPRO stop enter", "Stop loss if enter"],
        [trailing_stop_loss_XYLD_var.toFixed(4), stop_loss_XYLD_var.toFixed(4), stop_enter_XYLD_var.toFixed(4), stop_loss_next_var.toFixed(4), stop_enter_next_var.toFixed(4), stop_loss_if_enter_var.toFixed(4)]
    ];

    var coin_data = [
        ["BTC stop loss", "BTC stop enter", "%", "ETH stop loss", "ETH stop enter", "%"],
        [BTC_stop_loss_next_var.toFixed(4), BTC_stop_enter_next_var.toFixed(4), BTC_implied_avg_daily_var.toFixed(4), ETH_stop_loss_next_var.toFixed(4), ETH_stop_enter_next_var.toFixed(4), ETH_implied_avg_daily_var.toFixed(4)]
    ]

    // var data = [
    //     ["A", "B", "C"],
    //     ["D", "E", "F"],
    //     ["G", "H", "I"]
    // ];
        

    // (C1.5) DELETE OLD GRID
    
    var removeStock = document.getElementById("pricegrid");
    while (removeStock.hasChildNodes()) {
        removeStock.removeChild(removeStock.firstChild);
    }


    // (C2) SET NUMBER OF COLUMNS
    var grid = document.getElementById("pricegrid");
    grid.style.cssText = `grid-template-columns:repeat(${stock_data[0].length}, minmax(0, 1fr))`;
        
    // (C3) FIRST ROW - HEADER
    for (let i of stock_data[0]) {
        let cell = document.createElement("div");
        cell.innerHTML = i;
        cell.className = "head";
        grid.appendChild(cell);
    }
        
    // (C4) FOLLOWING ROWS - CELLS
    for (let i=1; i<stock_data.length; i++) {
        for (let j of stock_data[i]) {
        let cell = document.createElement("div");
        cell.innerHTML = j;
        cell.className = "cell";
        grid.appendChild(cell);
        }
    }

    // (C2) SET NUMBER OF COLUMNS
    var grid = document.getElementById("pricegrid");
    grid.style.cssText = `grid-template-columns:repeat(${coin_data[0].length}, minmax(0, 1fr))`;
        
    // (C3) FIRST ROW - HEADER
    for (let i of coin_data[0]) {
        let cell = document.createElement("div");
        cell.innerHTML = i;
        cell.className = "head";
        grid.appendChild(cell);
    }
        
    // (C4) FOLLOWING ROWS - CELLS
    for (let i=1; i<coin_data.length; i++) {
        for (let j of coin_data[i]) {
        let cell = document.createElement("div");
        cell.innerHTML = j;
        cell.className = "cell";
        grid.appendChild(cell);
        }
    }
}

