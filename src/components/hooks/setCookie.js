import Cookies from "js-cookie";

const SetCookies = (cookiename, usrin) => {
    Cookies.set(cookiename, usrin, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: '/'
    })
};

export default SetCookies;
