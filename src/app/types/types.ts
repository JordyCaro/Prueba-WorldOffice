export type Equipo = {
    id?: number;
    nombre: string;
    estadio: string;
    sitioWeb: string | null;
    nacionalidad: string;
    fundacion: string;
    entrenador: string;
    capacidad: number;
    valor: number | null;
};

export type Paginacion = {
    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    first: boolean;
    size: number;
    number: number;
    empty: boolean;
};

export type EquiposLista = {
    content: Equipo[]; 
    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    first: boolean;
    size: number;
    number: number;
    empty: boolean;
};
  
    