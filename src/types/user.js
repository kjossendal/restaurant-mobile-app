function User(data) {
    Object.assign(this, User.template, data);
}

Object.defineProperty(User, 'template', {
    get() {
        return {
            "accepts_marketing": null,
            // "created_at": null,
            // "deleted_at": null,
            "email": "",
            "first_name": "",
            "last_name": "",
            "phone": null,
            "password": "",
            "password_confirmation": "",
            // "provider": null,
            // "provider_id": null,
            // "role": "",
            // "updated_at": null
        };
    }
});

export default User
