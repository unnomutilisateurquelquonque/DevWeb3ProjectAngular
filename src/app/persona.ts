export interface Persona {
    _id?: string ,
    lv: number,
    nom: string,
    arcane: string,
    stats: {
        competance:{
            force: number,
            magique: number,
            endurance: number,
            agilite: number,
            chance: number,
        },
        faibless:{
            physique: string,
            fusil: string,
            feu: string,
            glace: string,
            electrique: string,
            vent: string,
            psychique: string,
            nucleaire: string,
            divin: string,
            maledition: string,  
        },
    },
    obtenue: boolean,
    date: string
}
