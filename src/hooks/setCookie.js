import Cookie from 'js-cookie';

const SetCookie = (cookiename, usrin) => {
    Cookie.set(cookiename, usrin, {
        expires: 1, //days
        secure: true,
        sameSite: 'strict',
        path: '/login'
    });
};

export default SetCookie;
