function alterarStatus() {
    const iptSala = document.getElementById("iptSala").value;
    console.log("SALA SELECIONADA (TESTE): " + iptSala);

    const iptStatus = document.getElementById("iptStatus").value;
    console.log("STATUS (TESTE): " + iptStatus);

    var salaList = {
        "Sala de Aula 1": "statusSalaAula1",
        "Sala de Aula 2": "statusSalaAula2",
        "Sala de Aula 3": "statusSalaAula3",
        "Laboratório de Informática 1": "statusInfoLab1",
        "Laboratório de Hardware": "statusLabHW",
        "Sala dos Professores": "statusSalaProf",
        "Coordenação": "statusCoord"
    }

    var statusList = {
        "Livre": {
            iconClass: "fa-unlock",
            statusClass: "livre"
        },
        "Ocupada": {
            iconClass: "fa-lock",
            statusClass: "ocupada"
        },
        "Manutenção": {
            iconClass: "fa-wrench",
            statusClass: "manutencao"
        }
    }

    const statusAtual = document.getElementById(salaList[iptSala]);
    const icon = statusAtual.querySelector('i');

    icon.classList.remove("fa-wrench", "fa-lock", "fa-unlock");
    statusAtual.classList.remove("livre", "ocupada", "manutencao");
    icon.classList.add(statusList[iptStatus].iconClass);
    statusAtual.classList.add(statusList[iptStatus].statusClass);
}