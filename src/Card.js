import React from 'react'

function Card(props) {
    console.log(props);
    return (
        <div style={styles.main} >
            <img alt="pic" src={props.url} className="shadow ml-5 p-3 mb-5 rounded" style={styles.img}></img>
            <div className='ms-5 border-end-0 shadow p-3 mb-5  rounded'
                style={{
                    width: "50vw",
                    borderBottom: "none",

                }}

            >
                <div
                    className='mt-1'
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        fontFamily: "fantasy",
                        fontSize: "2em",
                    }}>
                    <div
                    style={{

                    }}
                    >{props.title}</div>
                    <div
                        style={{
                            
                        }}
                    >⏰{props.time}min</div>
                </div>
                <div
                className="my-3"
                    style={{ 
                             fontFamily:"robot"
                    
                }}

                > {props.description}</div>
                <div className='mt-3'
                    style={{
                        fontFamily: "fantasy",
                        fontSize: ".9em"
                    }}
                >
                    {
                        props?.instructions?.map((item, index) => {

                            return (
                                <p key={index}>{`${props.instructions}`&&`${index + 1}: ${item.display_text}`}</p>
                            )

                        })
                    }
                </div>
                <h4
                >{props.serve}</h4>
            </div>



        </div >

    )
}
const styles = {
    img: {
        height: "80vh",
        width: "40vw",

    },
    main: {
        display: "flex",
        flexDirection:"coloumn",
        justifyContent: "start",
        alignContent: "center",
        height: "auto",
        width: "100vw"

    }

}

export default Card;