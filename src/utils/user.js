export default {
    setOpenId(openid) {
        localStorage.setItem("iphone_open_id", openid);
    },
    getOpenId() {
        let openid =
            localStorage.getItem("iphone_open_id");
        if (openid) {
            let result = openid;
            return result;
        } 
    },
    //type 1 管理员  2 普通用户 
    getUser(type) {
        if (type == 1) {
            let user =
                localStorage.getItem("iphone_user_data");
            if (user) {
                let result = JSON.parse(user)
                return result;
            }
        } else {
            let user =
                localStorage.getItem("iphone_normal_user_data");
            if (user) {
                let result = JSON.parse(user)
                return result;
            }
        }
        return null;
    },
    //type 1 管理员  2 普通用户
    setUser(data, type) {
        if (type == 1) {
            localStorage.setItem("iphone_user_data", JSON.stringify(data));
        } else {
            localStorage.setItem("iphone_normal_user_data", JSON.stringify(data));
        }
    },
    removeUser(type) {
        if (type == 1) {
            let user =
                localStorage.getItem("iphone_user_data");
            if (user) {
                localStorage.removeItem("iphone_user_data");
            }
        } else {
            let user =
                localStorage.getItem("iphone_normal_user_data");
            if (user) {
                localStorage.removeItem("iphone_normal_user_data");
            }
        }

    },
    logout(type) {
        this.removeUser(type);
    },
    // getToken() {
    //     let token = localStorage.getItem("ddt_access_token");;
    //     if (token != null) {
    //         return token;
    //     }
    //     return null;
    // },
}