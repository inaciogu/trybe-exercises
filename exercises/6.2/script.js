function createStateOptions() {
    let states = document.getElementById('input-state');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < stateOptions.length; index += 1) {
        let Options = document.createElement('option');
        states.appendChild(Options).innerText = stateOptions[index];
        states.appendChild(Options).value = stateOptions[index];
    }
}
createStateOptions();
