export const APIROOT = "http://localhost:3000"
export const HEADERS = {
    "Content-Type": "application/json",
    Accept: "application/json"
}
export const AUTHHEADERS = {
    ...HEADERS,
    Authorization: `Bearer ${localStorage.getItem("token")}`
}