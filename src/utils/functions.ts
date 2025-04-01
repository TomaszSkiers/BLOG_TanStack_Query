export const getToken = (): string | null => {
    return localStorage.getItem('token') || sessionStorage.getItem('token')
}

export const logout = (): void => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
  }