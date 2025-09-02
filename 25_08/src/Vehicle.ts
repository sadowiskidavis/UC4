export interface Vehicle {
    brand: string
    model: string
    year: number
    startEngine():void // em interface nao precisa colocar logica aqui dentro

}