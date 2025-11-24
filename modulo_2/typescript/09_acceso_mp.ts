export class Conferencia {
    public titulo: string;
    private codigo: any;
    protected idGeneric: string = 'EVT-99182898988';

    constructor(titulo: string) {
        this.titulo = titulo;
        this.generarCodigo();
    }

    generarCodigo(): void {
        this.codigo = (new Date()).toISOString();
    }

    getCodigo(): any {
        return this.codigo;
    }

    getAtributos(): any {
        return {
            titulo: this.titulo,
            codigo: this.codigo,
            id: this.idGeneric
        };
    }
}

