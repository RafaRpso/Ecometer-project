   
   
 
   function troca() {

        if (slct_graph.value == 1) {
            mensal.style.display = 'block'
            semanal.style.display = 'none'
            diario.style.display = 'none'
        }

        if (slct_graph.value == 2) {
            mensal.style.display = 'none'
            semanal.style.display = 'block'
            diario.style.display = 'none'
        }

        if (slct_graph.value == 3) {
            mensal.style.display = 'none'
            semanal.style.display = 'none'
            diario.style.display = 'block'
        }
    }

    function trocaMapa() {

        intervalo_exib.style.display = 'none';
        piso_exib.style.display = 'block';
        slct_graph.style.display = 'none'
        slct_piso.style.display = 'block';
        graph.style.display = 'none'
        mapa.style.display = 'block'
        mediaLocal.innerHTML= 'Localização das Lixeiras'
        maingraph.style.width='100%'


    }

    function trocaGraph() {

        intervalo_exib.style.display = 'block';
        piso_exib.style.display = 'none';
        slct_graph.style.display = 'block'
        slct_piso.style.display = 'none';
        graph.style.display = 'block'
        mapa.style.display = 'none'
        mediaLocal.innerHTML= 'Média de lotação '

    }

    function trocaPiso() {
        if (slct_piso.value == 1) {
            piso1.style.display = 'block'
            piso2.style.display = 'none'
            piso3.style.display = 'none'
        }

        if (slct_piso.value == 2) {
            piso1.style.display = 'none'
            piso2.style.display = 'block'
            piso3.style.display = 'none'
        }

        if (slct_piso.value == 3) {
            piso1.style.display = 'none'
            piso2.style.display = 'none'
            piso3.style.display = 'block'
        }
    }



    function trocaPie() {
        if (slct_pie.value == 1) {
            graficoPizza.style.height = "25%"
            tipo_lotacao_bar.style.display = 'block'
            tipo_lotacao_pie.style.display = 'none'
        }

        if (slct_pie.value == 2) {
            graficoPizza.style.height = "45%"
            tipo_lotacao_bar.style.display = 'none'
            tipo_lotacao_pie.style.display = 'block'
        }
    }

    function amarelo() {
        alert('O local está ideal para a coleta')
        alertas.innerHTML += `<span style id="amarelo">Ideal para a coleta - tal horas</span>`
    }

    function vermelho() {
        alert('ALERTA - AS LIXEIRAS ESTÃO LOTANDO')
        alertas.innerHTML += `<span style id="vermelho">LOTANDO - tal horas</span>`
    }


    // quando selecionar o kit de lixo, demonstrar o alerta abaixo e acima 

    function selecaoKitAlerta(){ 
        if(qualKit.value==0) return alert("Selecione um kit válido ") //retorna e encerra a função

        if(qualKit.value=="1"){ // kit 1 - cheio  
            alert("AVISO. ESTE KIT ESTÁ LOTADO.")
            condicaoKit.innerHTML = "<b> O Kit 1 está LOTADO! </b>"
            aviso1.style.display='none'
            aviso2.style.display='none'
            aviso3.style.display='none'
            aviso4.style.display='block'
        }
        else if(qualKit.value=="2"){ // kit 2 - qUASE VAZIO  
           
            condicaoKit.innerHTML = "<b> O kit 2 está quase vazio! </b>"
            aviso1.style.display='none'
            aviso2.style.display='block'
            aviso3.style.display='none'
            aviso4.style.display='none'
        }
        else if(qualKit.value=="3"){ //kit3  - vazio 
            condicaoKit.innerHTML = "<b> O kit 3 está vazio </b>"
            aviso1.style.display='block'
            aviso2.style.display='none'
            aviso3.style.display='none'
            aviso4.style.display='none'
        }
        else if(qualKit.value=="4"){ //kit3  - vazio 
            condicaoKit.innerHTML = null
            aviso1.style.display='block'
            aviso2.style.display='block'
            aviso3.style.display='block'
            aviso4.style.display='block'
        }
    }

    function ocultarNavbar(){ 
        menuLateral.style.display='none'
        //arrumar footer
        footerDash.style.marginLeft='0%'
        footerDash.style.width='100%'
        //arrumar main
        main.style.marginLeft='0%'
    }
