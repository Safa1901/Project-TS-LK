export type IUser = {
    id: number,
    name: string,
    phone: string
}

export interface ImportMeta {
    readonly env: Record<string, string>;
}

export interface IGenericResponse {
    status: string;
    message: string;
}