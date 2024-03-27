
const messi = player('messi')
const btnMessi = document.getElementById('btn-messi');

btnMessi.addEventListener('click', function () {
    
    const selectPlayer = document.getElementById('selected-players');

    const li = document.createElement('li');
    li.innerText = messi;
    selectPlayer.appendChild(li);

})


const mbappe = player('mbappe');
const btnMbappe = document.getElementById('btn-mbappe');

btnMbappe.addEventListener('click', function () {
    
    const selectPlayer = document.getElementById('selected-players');

    const li = document.createElement('li');
    li.innerText = mbappe;
    selectPlayer.appendChild(li);

})


const neymar = player('neymar');
const btnNeymar = document.getElementById('btn-neymar');

btnNeymar.addEventListener('click', function () {
    const selectPlayer = document.getElementById('selected-players');

    const li = document.createElement('li');
    li.innerText = neymar;
    selectPlayer.appendChild(li);
})

const sanches = player('sanches');
const btnSanches = document.getElementById('btn-sanches');

btnSanches.addEventListener('click', function () {
    const selectPlayer = document.getElementById('selected-players');

    const li = document.createElement('li');
    li.innerText = sanches;
    selectPlayer.appendChild(li);
})

const ramos = player('ramos');
const btnRamos = document.getElementById('btn-ramos');

btnRamos.addEventListener('click', function () {
    const selectPlayer = document.getElementById('selected-players');

    const li = document.createElement('li');
    li.innerText = ramos;
    selectPlayer.appendChild(li);
})

const machado = player('machado');
const btnMachado = document.getElementById('btn-machado');

btnMachado.addEventListener('click', function () {
    const selectPlayer = document.getElementById('selected-players');

    const li = document.createElement('li');
    li.innerText = machado;
    selectPlayer.appendChild(li);
})


