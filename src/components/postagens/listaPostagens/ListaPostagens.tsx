import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Dna } from "react-loader-spinner"

import { buscar } from "../../../services/Service"
import { AuthContext } from "../../../contexts/AuthContext"

import Postagem from "../../../models/Postagem"
import CardPostagem from "../cardPostagem/CardPostagem"
import { toastAlerta } from "../../../utils/toastAlerta"


function ListaPostagens() {

    const navigate = useNavigate()

    const [postagens, setPostagens] = useState<Postagem[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', "erro")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', "erro")
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])

    return (
        <>
            {postagens.length === 0 && (
                <Dna
                    visible = {true}
                    height = '200'
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className='container mx-auto my-4 
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {postagens.map((postagem) => (
                    <CardPostagem key={postagem.id} post={postagem} />
                ))}

            </div>
        </>
    )
}

export default ListaPostagens