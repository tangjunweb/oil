const getters = {
    token: state => state.user.token,
    userName: state => state.user.userName,
    roles: state => state.user.roles,
    nav:state => state.user.nav,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
};
export default getters