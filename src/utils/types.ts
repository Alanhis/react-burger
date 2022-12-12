
export interface Iingredient {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _id: string
}

export interface IingredientCount extends Iingredient {
    counts: number
}
export interface IUser{
    email: string,
    name: string
}
export interface IWSState{_id: string,
    ingredients: Iingredient[],
  status: string,
name: string,
updatedAt: string,
createdAt: string,
number: string }
export interface IFeed {
    wsConnected:boolean,
    messages: [({
      success: boolean,
      order: IWSState[]
    } | null)] 
}
export interface IOriginalFeed extends Omit<IWSState,'ingredients'>{
    ingredients: string[]
}