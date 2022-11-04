import { IPage } from "../interfaces/interfaces/route"

const pages: IPage[] = [
   {
    path: 'dashboard',
    name: 'Dashboard'
   }
]
const pageName = {
    ROOT: '/',
    LOGIN: 'login',
    DASHBOARD: 'dashboard'
}
export {pages,pageName}