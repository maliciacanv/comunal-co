import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmpresas'
})
export class FilterEmpresasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log(value, arg)
    const empresaSearch = [];
    for(const empresas of value) {
      if (empresas.nombreapellido.indexOf(arg) > -1 ) {
        empresaSearch.push(empresas);
      };
    };
return empresaSearch;
  }

}
