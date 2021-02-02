const soap = require('soap');

const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

var args = {cep: '74003010'};

soap.createClientAsync(url).then((client) => {
    client.consultaCEP(args, (err, res) => {
        if(err){
            console.log(err);
        }else{
            console.log(res)
        }
    });
});