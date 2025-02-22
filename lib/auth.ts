export const login = (email: string, password: string) => {
  // In a real app, you'd validate credentials against your backend
  localStorage.setItem("isAuthenticated", "true")
  localStorage.setItem("user", JSON.stringify({ email }))
}

export const logout = () => {
  localStorage.removeItem("isAuthenticated")
  localStorage.removeItem("user")
}

export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true"
}

export const getUser = () => {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

