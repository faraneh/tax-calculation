

export function Formatter(value : number | null ): string {

    if(typeof value === "number") { 
        return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return "0";
}