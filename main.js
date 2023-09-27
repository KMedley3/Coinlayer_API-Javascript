const get_btc = fetch(`http://api.coinlayer.com/api/live?access_key=b7024b68a64392086d4f8d410b7704b3&symbols=BTC`)

const string_key = '?access_key=b7024b68a64392086d4f8d410b7704b3'

const get_bitcoin = fetch(`http://api.coinlayer.com/api/live${string_key}`)
    
    .then(res => res.json())
    .then(data => console.log(data))


let popup = document.getElementById("popup")

let coin_data = document.querySelector('.coin-container')

function openPopup(){
    popup.classList.add('open-popup')
    let response = get_btc.json();
    console.log(response)
 }

// async function openPopup(){
    
//     popup.classList.add("open-popup");
//     coin_data.innerHTML = `The price is ${get_btc}`;

// }



function closePopup(){
    popup.classList.remove("open-popup");
}


// function openPopup(){
//     popup.classList.add("open-popup");
//     coin_data.innerHTML = 

// }





//     Access the data given to us by the fetch response (Promise)
//     const data = await result.json();
//     return data.access_token



   

//    http://api.coinlayer.com/api/live?access_key=b7024b68a64392086d4f8d410b7704b3&symbols=BTC,ETH
//    https://api.coinlayer.com/api/live?access_key=b7024b68a64392086d4f8d410b7704b3&symbols=BTC
