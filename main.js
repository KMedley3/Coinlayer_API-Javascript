const get_btc = fetch(`http://api.coinlayer.com/api/live?access_key=b7024b68a64392086d4f8d410b7704b3&symbols=BTC.rate`)

const string_key = '?access_key=b7024b68a64392086d4f8d410b7704b3'

const get_bitcoin = fetch(`http://api.coinlayer.com/api/live${string_key}`)
    
    .then(res => res.json())
    .then(data => console.log(data))


let popup = document.getElementById("popup")

let coin_data = document.querySelector('.coin-container')

function getData () {
    const get_btc = fetch(`http://api.coinlayer.com/api/live${string_key}`)
        .then(res => res.json())
        .then(data => {

            let popup = document.getElementById("popup")
            let coin_data = document.querySelector('.coin-container')
            console.log(data.rates.BTC)
            coin_data.innerHTML=data.rates.BTC
            popup.classList.add('open-popup')
        })
    
}

function getData_eth () {
    const get_coin = fetch(`http://api.coinlayer.com/api/live${string_key}`)
        .then(res => res.json())
        .then(data => {

            let popup = document.getElementById("popup")
            let coin_data = document.querySelector('.coin-container')
            console.log(data.rates.ETH)
            coin_data.innerHTML=data.rates.ETH
            popup.classList.add('open-popup')
        })
    
}

function getData_ltc () {
    const get_coin = fetch(`http://api.coinlayer.com/api/live${string_key}`)
        .then(res => res.json())
        .then(data => {

            let popup = document.getElementById("popup")
            let coin_data = document.querySelector('.coin-container')
            console.log(data.rates.LTC)
            coin_data.innerHTML=data.rates.LTC
            popup.classList.add('open-popup')
        })
    
}

function getData_xrp () {
    const get_coin = fetch(`http://api.coinlayer.com/api/live${string_key}`)
        .then(res => res.json())
        .then(data => {

            let popup = document.getElementById("popup")
            let coin_data = document.querySelector('.coin-container')
            console.log(data.rates.XRP)
            coin_data.innerHTML=data.rates.XRP
            popup.classList.add('open-popup')
        })
    
}

// To close popups

function closePopup(){
    popup.classList.remove("open-popup");
}
