import React, { useRef, useState, useEffect } from 'react'
import './contactoHome.css'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import sendedIcon from '../../assets/sendedIcon.png';

function ContactoHome() {
    
    const [loading, setLoading] = useState(false);
    const [sended, setSended] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const contactFormRef = useRef(null);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#contactForm') {
          const contactFormElement = contactFormRef.current;
      
          if (contactFormElement) {
            contactFormElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest',
            });
          }
        }
      }, []);

    const onSubmit = async (data) => {
        if (loading === false) {            
            setLoading(true);
            try {
                const templateParams = {
                    name: data.name,
                    venture: data.venture,
                    email: data.email,
                    phone: data.phone,
                    message: data.message
                };
                await emailjs.send(
                    import.meta.env.VITE_CONTACT_KEY_1,
                    import.meta.env.VITE_CONTACT_KEY_2,
                    templateParams,
                    import.meta.env.VITE_CONTACT_KEY_3
                );
                setLoading(false);
                setSended(true)
            } catch (error) {
                setLoading(false);
                setErrorMessage(true)
            }
        }
    }
    
    return (
    <>
        {
        !sended ? <>
            <div className='contenedorContactoHome' id='contactForm'>
                <h2>CONTACTO</h2>
                <h5>Conéctate con nosotros, ¡Tu proximo paso hacia la solución!</h5>
                <form onSubmit={handleSubmit(onSubmit)} className='formContactoHome' ref={contactFormRef}>
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
                        <button type="submit" disabled={loading}>
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
                    {
                        errorMessage && <p className='errorFormMessage'>Ocurrió un error inesperado.</p> 
                    }                    
                </form>
            </div>
        </> : <>
            <div className='contenedorEnviadoContacto'>
                <h4>¡Gracias por comunicarte con nosotros!</h4>
                <h5>Te responderemos lo antes posible.</h5>
                <img src={sendedIcon} alt="Formulario de contacto enviado" />
            </div>
        </>
        }
    </>
    )
}

export default ContactoHome