import React from 'react'

function Home() {
  return (
    <>
    <div style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    }}>
        <div>

            <div style={{
                backgroundColor: "#90CAF9",
                 width: "80vw",
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center"
            }}>
                <h2>BEM VINDES AO BLOG PESSOAL</h2>
                <p>Compartilhe sua versão do mundo!</p>
            </div>

            <div style={{
                backgroundColor: "#FFFFFF",
                 width: "80vw",
                 marginTop: "6rem",
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center"
            }}>
                <img 
                    src="src/assets/img/microsites.gif"
                    alt="Imagem da Página Home" 
                    width="400px"
                />
            </div>
        </div>
    </div>
</>
  )
}

export default Home
