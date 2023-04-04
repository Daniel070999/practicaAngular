export class Empleado {

    private nombre: string;
    private apellido: string;
    private cargo: string;
    private salario: number;

    constructor($nombre: string, $apellido: string, $cargo: string, $salario: number) {
        this.nombre = $nombre;
        this.apellido = $apellido;
        this.cargo = $cargo;
        this.salario = $salario;
    }


    /**
     * Getter $nombre
     * @return {string}
     */
    public get $nombre(): string {
        return this.nombre;
    }

    /**
     * Getter $apellido
     * @return {string}
     */
    public get $apellido(): string {
        return this.apellido;
    }

    /**
     * Getter $cargo
     * @return {string}
     */
    public get $cargo(): string {
        return this.cargo;
    }

    /**
     * Getter $salario
     * @return {number}
     */
    public get $salario(): number {
        return this.salario;
    }

    /**
     * Setter $nombre
     * @param {string} value
     */
    public set $nombre(value: string) {
        this.nombre = value;
    }

    /**
     * Setter $apellido
     * @param {string} value
     */
    public set $apellido(value: string) {
        this.apellido = value;
    }

    /**
     * Setter $cargo
     * @param {string} value
     */
    public set $cargo(value: string) {
        this.cargo = value;
    }

    /**
     * Setter $salario
     * @param {number} value
     */
    public set $salario(value: number) {
        this.salario = value;
    }
}