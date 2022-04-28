import { useState } from 'react';
import Card from './Card';
function App() {
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState("");
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      'X-RapidAPI-Key': 'ef8871c94bmsh8dbd988203487ccp1b5076jsn26a43f949312'
    }
  };
  const handle = () => {

    // console.log(number);
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=${number}&tags=under_30_minutes`, options)
      .then(response => response.json())
      .then(response => setPost(response.results))
      .catch(err => console.error(err));
  }
  console.log(post);
  return (
    <div className='bg-light p-2 text-dark bg-opacity-10' 
    
    >
      <div className='mx-auto my-5'
        style={


          {

            // border: "1px solid blue",
            width: "20%",
            height: "32px"
          }
        }
      >
        <input
          style={{
            borderRadius: "30 %",
            width: "125%",
            fontSize: "25",
            fontFamily: "cursive"

          }}
          type="number"
          value={number} placeholder={"no.of recipe"}
          onChange={(e) => { setNumber(e.target.value) }}
        ></input>

        <button
          className='my-2 '
          style={{
            borderRadius: "10%",
          }}
          onClick={handle}
        >

          Search
        </button>
      </div>
      <div className='d-flex  justify-content-evenly p-2 bd-highlight'
      style={{
    height:"auto",
    flexDirection:"column"
    }}
      >
        {!post && <h1>loading...</h1>}
        {
          post?.map((recipes, index) => {
            return (
              <Card url={recipes.thumbnail_url}
                title={recipes.name}
                description={recipes.description}
                instructions={recipes.instructions}
                time={recipes.total_time_minutes}
                serve={recipes.yields}
                key={index}></Card>
            );
          })

        }


      </div>
      <div>

      </div>

    </div >
  );
}

export default App;
