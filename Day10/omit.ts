// omit<T>
interface OUser {
    uid: string;
    name: string;
    email: string;
    password: string;
}

type UserPreview = Omit<OUser, "email" | "password">

const preview: UserPreview = {
    name: "Gokul",
    uid: "xyz"
}

// preview.password;