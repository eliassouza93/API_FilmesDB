import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import style from './Procurar.module.scss'
export default function Procurar() {
    const [usuarioData, setUsuarioData] = useState([])
    const [carregando, setCarregando] = useState(false)

    const image_path = 'https://image.tmdb.org/t/p/w500'
    useEffect(() => {
        setCarregando(true)
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=aed2ce3dba886fed0e5f20d0e13feac5&language=pt-br-US&page=1")
            .then((response) => {
                setUsuarioData(response.data.results)

            }).catch((erro) => {
                console.log('Ocorreu um erro ' + erro)
                setCarregando(true)

            }).finally(() => {
                setCarregando(false)
                console.log('sucesso')

            })
    }, [])


    return (
        <div>
            <h2>Bem Vindos!</h2>
            <hr />
            {carregando ? (<h1>Carregando...</h1>) : (
                <div className={style.container}>
                    {usuarioData.map((user: any) => (

                        <Fragment key={user.id}>
                            <div className={style.titulo}> </div>
                            <div >
                                <div className={style.infos}>
                                    <div className={style.bloco}>
                                        <p> {user.title} </p>
                                        <img src={image_path + user.poster_path} alt="" />
                                    </div>
                                </div>
                            </div>

                        </Fragment>

                    ))}


                </div>


            )}
        </div>



    )
}