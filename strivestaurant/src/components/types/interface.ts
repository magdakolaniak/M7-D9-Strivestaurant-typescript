export interface OneDish {
    id: number
    name: string
    image: string
    category: string
    label: string
    price: string
    description: string
    comments: Comment []
    }
    


export interface Reservation {
    _id : number
    name: string
    phone: string
    numberOfPersons: number
    smoking: boolean
    dateTime: string
    specialRequests: string
    createdAt: string
    updatedAt: string
}

export interface Comment {
  id: number
  comment:string
}

export type homeTitle = {
  title: string
}