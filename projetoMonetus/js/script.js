$(document).ready(function () {
    console.log("Pagina Carregada");
   
});

$("#consultar").click(function () {
    var acao = $("input[name='acao']").val()
    
    $.ajax({
        url: `https://api.iextrading.com/1.0/stock/${acao}/batch?types=quote`,
        type: 'GET',
        dataType: 'json',
        success: function (valores) {
            console.log(valores)
            $("#acoes").html(`

            <div class="jumbotron text-center">
            <table class="table table-dark">
            
            <thead>
            
              <tr>
                <th scope="col">Codigo Ação</th>
                <th scope="col">Empresa</th>
                <th scope="col">Preço Atual</th>
                <th scope="col">Preço Máximo</th>
                <th scope="col">Preço Mínimo</th>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                
                <td>${valores.quote.symbol}</td>
                <td>${valores.quote.companyName}</td>
                <td>${valores.quote.latestPrice}</td>
                <td>${valores.quote.high}</td>
                <td>${valores.quote.low}</td>
                 
              </tr>

            </tbody>
                     
          </table>
          <span class="credit">Fonte: IEX Trading</span>  
          </div>
            `)
        },
        error: function (err) {
           alert('Desculpe, não consegui encontrar a ação digitada! Tente outra ação como aapl.');
        }
    });
});

