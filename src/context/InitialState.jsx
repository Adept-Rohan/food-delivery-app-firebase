import { fetchInfo } from '../utils/FetchLocalStorageData'


const userInfo = fetchInfo()

export const initialState = {
    user: userInfo
}