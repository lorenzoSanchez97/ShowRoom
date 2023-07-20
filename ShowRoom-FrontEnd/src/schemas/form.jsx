import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginFormSchema = yup.object().shape({
    email: yup.string().email("Debe ingresar un email válido").required("Este campo es obligatorio"),
    password: yup.string().min(5, "La contraseña debe tener un mínimo de 5 caracteres").required("Este campo es obligatorio").matches(passwordRules, {message: "La contraseña debe tener el menos cinco caracteres, una letra mayúscula, una letra minúscula y un número"})
})

export const registerFormSchema = yup.object().shape({
    name: yup.string().required("Este campo es obligatorio"),
    email: yup.string().email("Debe ingresar un email válido").required("Este campo es obligatorio"),
    password: yup.string().min(5, "La contraseña debe tener un mínimo de 5 caracteres").required("Este campo es obligatorio").matches(passwordRules, {message: "La contraseña debe tener el menos cinco caracteres, una letra mayúscula, una letra minúscula y un número"}),
    confirmPassword: yup.string().min(5, "La contraseña debe tener un mínimo de 5 caracteres").required("Este campo es obligatorio").matches(passwordRules, {message: "La contraseña debe tener el menos cinco caracteres, una letra mayúscula, una letra minúscula y un número"}).oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
})

export const dataEnvioFormSchema = yup.object().shape({
    region: yup.string().required("Este campo es obligatorio"),
    city: yup.string().required("Este campo es obligatorio"),
    zip: yup.string().required("Este campo es obligatorio"),
    address: yup.string().required("Este campo es obligatorio")
})