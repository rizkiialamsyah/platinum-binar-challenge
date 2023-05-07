import Login from "../pages/login";

export const publicrouting = (props) => {
    return [
        { index: true, path: '/', element: <Login  {...props} title="Home" />, },
        { index: true, path: '/login', element: <Login  {...props} title="Login" />, },
        { index: true, path: '*', element: <div>Halaman Not Found</div> },
    ]
}

export const privaterouting = (props) => {
    return [
        { index: true, path: '/home', element: <div>BERHASIL LOGIN</div> },
        { index: true, path: '*', element: <div>Halaman Not Found</div> },
    ]
}