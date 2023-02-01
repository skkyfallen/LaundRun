export const validEmail= new RegExp(
    '^[A-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'

)
export const validPassword= new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validToken= new RegExp('^[0-9\b]+$/');