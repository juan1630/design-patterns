import axios from 'axios';

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeFetchAdapter implements HttpAdapter{
    
    async get<T>( url: string ): Promise<T>{
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log("fetch method")
        return data;
    }
}

export class PokemonApiAdapter {
    
    private readonly axios = axios;
    
    async get<T>(url: string) : Promise<T>{
        const { data } = await this.axios.get<T>(url);
        console.log("axios method")
        return data;
    }

    async post(url: string, data: any){

    }

    async put(url: string, data: any){
    }

    async patch(url: string, data: any){
    }

    async delete(url: string, data: any){

    }
}

