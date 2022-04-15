import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

//================== style ======================
const Container = styled.div `
  display: flex;
  justify-content: center;
  margin: 80px;
  line-height: 30px ;
`
const Img = styled.img `
  width: 400px;
  border-radius: 20px;
  margin: 20px;
`
const H2 = styled.h2 `
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
  color: #605950;
`
const Div = styled.div `
  width: 30vw;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`
const ColorBg = styled.span`
  background-color: #eee; 
  border-radius: 30px;
  padding: 5px 10px;
  margin: 0 5px;
`
const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  line-height: 70px;
  color: #605950;
`
const Bold = styled.span`
  font-weight: bold;
  background-color: #eee; 
  border-radius: 30px;
  padding: 5px 10px;
  margin: 0 5px; 
  color: #605950;
  display:${(props =>
    props.bgColor === null ? 'none' : '')}; ;
`
const P = styled.span`
  margin-bottom: 10px;
  /* border-bottom: 1px solid red; */
`



//================== component ======================

function Detail() {
  const { idDrink } = useParams();
  const [cocktail, setCocktail] = useState([]);
  
  useEffect(() => {
    getCocktail();
  }, []);

  const getCocktail = async () => {
    const json = await (
      await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    ).json();
    // console.log(json);
    setCocktail(json.drinks);
  };
 
  return(
    <>
    {cocktail.map(cocktail => (
    <div key={cocktail.strDrink}>
    <Container>
        <div>
          <Img src={cocktail.strDrinkThumb} alt="" />
          <H2>{cocktail.strDrink}</H2>
          <ColorBg>{cocktail.strAlcoholic}</ColorBg>  
          <ColorBg>Category: {cocktail.strCategory}</ColorBg>
          <ColorBg>Glass: {cocktail.strGlass}</ColorBg>  
        </div>
           
        <Div>     
            <Title>Ingredients</Title>  
            <P><Bold>{cocktail.strIngredient1} </Bold>{cocktail.strMeasure1}</P>    
            <P><Bold>{cocktail.strIngredient2} </Bold>{cocktail.strMeasure2}</P>    
            <P><Bold bgColor={cocktail.strIngredient3}>{cocktail.strIngredient3} </Bold>{cocktail.strMeasure3}</P>    
            <P><Bold bgColor={cocktail.strIngredient4}>{cocktail.strIngredient4} </Bold>{cocktail.strMeasure4}</P>    
            <P><Bold bgColor={cocktail.strIngredient5}>{cocktail.strIngredient5} </Bold>{cocktail.strMeasure5}</P> 

            <Title>How to</Title>    
            <p>{cocktail.strInstructions}</p>    
          </Div>                 
    </Container>
    </div>   
      ))}

    </>   
  );
}
export default Detail;