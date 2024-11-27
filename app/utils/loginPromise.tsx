export const LoginPromise = (username: string, password: string) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (username == "admin" && password == "admin") {
                res({ username })
            }
            rej({ message: "login failed" })
        }, 1500)
    });
}
