import { data } from "./data";

export type Currency = {
    code: string,
    symbol: string,
    name: string,

}

export function getCurrencies(): Currency[] {
    return (data || []).map((item: any) => {
        return {
            code: item[0] || '',
            symbol: item[1] || '',
            name: item[2] || '',
        }
    })
}
