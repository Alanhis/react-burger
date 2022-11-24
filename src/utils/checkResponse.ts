
export function checkResponce(res: Response) {
    
    return res.ok ? res.json() : res.json().then((err: { success: boolean, message: string}) => { console.log(err); Promise.reject(err) });
}