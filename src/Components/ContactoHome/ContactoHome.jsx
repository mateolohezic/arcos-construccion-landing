import React, { useState, useEffect } from 'react'
import './contactoHome.css'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

function ContactoHome() {
    
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if (loading === false) {            
            setLoading(true);
            try {
                // const templateParams = {
                //     name: data.name,
                //     venture: data.venture,
                //     email: data.email,
                //     phone: data.phone,
                //     message: data.message
                // };
                // const response = await emailjs.send(
                //     'service_11pwzne',
                //     'template_1s1k30b',
                //     templateParams,
                //     '78Cg4v7JU8v5SrVhh'
                // );
                console.log(data);
                // console.log(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
                // if (error.response.request.status === 401) {
                //     setErrorMessageContent('Credentials are invalid.')
                // }
                // setErrorMessage(true)
                // setLoading(false);
            }
        }
    }
    
    return (
    <>
        <div className='contenedorContactoHome'>
            <h2>CONTACTO</h2>
            <h5>Conéctate con nosotros, ¡Tu proximo paso hacia la solución!</h5>
            <form onSubmit={handleSubmit(onSubmit)} className='formContactoHome'>
                <div className='filaInputContactoHome'>
                    <div className='inputContactoHome inputChicoContactoHome'>
                        <label htmlFor="nameContacto">Nombre</label>
                        <input
                            maxLength={100}
                            autoComplete='false'
                            id='nameContacto'
                            type="text"
                            className="form-control"
                            {...register("name", {
                                required: true
                            })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <p className="errorFormMessage">Campo requerido.</p>
                        )}  
                    </div>  
                    <div className='inputContactoHome inputChicoContactoHome'>
                        <label htmlFor="ventureContacto">Empresa</label>
                        <input
                            maxLength={100}
                            autoComplete='false'
                            id='ventureContacto'
                            type="text"
                            className="form-control"
                            {...register("venture", {
                                required: true
                            })}
                        />
                        {errors.venture && errors.venture.type === "required" && (
                            <p className="errorFormMessage">Campo requerido.</p>
                        )}  
                    </div>  
                </div>
                <div className='filaInputContactoHome'>
                    <div className='inputContactoHome inputChicoContactoHome'>
                        <label htmlFor="emailContacto">Correo electrónico</label>
                        <input
                            maxLength={100}
                            autoComplete='false'
                            id='emailContacto'
                            type="email"
                            className="form-control"
                            {...register("email", {
                                required: true
                            })}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <p className="errorFormMessage">Campo requerido.</p>
                        )}  
                    </div>  
                    <div className='inputContactoHome inputChicoContactoHome'>
                        <label htmlFor="phoneContacto">Teléfono</label>
                        <input
                            maxLength={100}
                            autoComplete='false'
                            id='phoneContacto'
                            type="text"
                            className="form-control"
                            {...register("phone", {
                                required: true
                            })}
                        />
                        {errors.phone && errors.phone.type === "required" && (
                            <p className="errorFormMessage">Campo requerido.</p>
                        )}  
                    </div>
                </div>
                <div className='contenedorTextarea'>
                    <div className='inputContactoHome'>
                        <label htmlFor="messageContacto">Mensaje</label>
                        <textarea
                            autoComplete='false'
                            id='messageContacto'
                            type="text"
                            placeholder='Cuéntanos un poco...'
                            className="form-control textareaContacto"
                            {...register("message", {
                                required: true
                            })}
                        />
                        {errors.message && errors.message.type === "required" && (
                            <p className="errorFormMessage">Campo requerido.</p>
                        )}  
                    </div>
                </div>
                <div className='submitBotonContactoHome'>
                    <button type="submit" disabled={ loading ? true : false }>
                        {loading ? (
                        <>
                            <span
                                className="spinner-border spinner-border-sm mr-2 text-white"
                                role="status"
                                aria-hidden="true"
                            ></span>
                        </>
                        ) : (
                        <>
                            Enviar
                        </>
                        )}
                    </button>
                </div>  
            </form>
        </div>
    </>
    )
}

export default ContactoHome