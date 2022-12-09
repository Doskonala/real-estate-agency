import React, {useEffect, useState} from 'react'; 
import CardItemComponent from "../../components/CardItem-component/CardItem-component.js";
import {LOCALSTORE_TOTALITEMS} from "../../models/constants";

function ListComponents() {
    const itemsList = [
      {id: 1, name: "Трикімнатна квартира в центрі Галича", imgurl: "/imgs/apartments/pexels-vecislavas-popa-1571460.jpg", price: 20000},
      {id: 2, name: "Двокімнатна квартира в центрі Івано-Франківська", imgurl: "/imgs/apartments/pexels-pixabay-276724.jpg", price: 150000},
      {id: 3, name: "Однокімнатна квартира в передмісті Івано-Франківська", imgurl: "/imgs/apartments/pexels-pixabay-271624.jpg", price: 30000},
      {id: 4, name: "Двоповерховий будинок на околицях Галича", imgurl: "/imgs/mansions/pexels-curtis-adams-5008389.jpg", price: 35000},
      {id: 5, name: "Одноповерховий будинок у Ямниці", imgurl: "/imgs/mansions/pexels-curtis-adams-8583638.jpg", price: 22000},
      {id: 6, name: "Одноповерховий будинок у Крилосі", imgurl: "/imgs/mansions/pexels-ron-lach-10397920.jpg", price: 20000}
    ];

    const [itemsToSell, setItemsToSell] = useState(itemsList);
    const [totalItems, setTotalItems] = useState([]);

    const getLocalStore = () =>{
        if(totalItems&&totalItems.length>0){
            return;
        }
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        cardsLocal = cardsLocal? JSON.parse(cardsLocal): cardsLocal;
        if(cardsLocal&&Array.isArray(cardsLocal)&&cardsLocal.length>0){
            setTotalItems(...[cardsLocal]);
        }
    };

    useEffect(()=>{
        getLocalStore();
    });

    const totalHomesClick = (item) => { 
        itemsList.forEach((itemF, indexF) => { 
            if (itemF.id === item.id) { 
                itemsList[indexF].added++; 
            } 
       }); 
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS,JSON.stringify(totalItems));
        setTotalItems([...totalItems, item]); 
    };

    const removeItem =(cardItem)=>{
        let foundItemIndex;
        totalItems.forEach((item,index)=>{
            if(item.id==cardItem.id){
                foundItemIndex=index;
            }
        });
        totalItems.splice(foundItemIndex,1);
        setTotalItems([...totalItems]);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS,JSON.stringify(totalItems));
    };

    const setSortTotalItems = (cards)=>{
        setItemsToSell(cards);
    }
    
    return(
        <main> 
            <section className="container my-5"> 
                <div className="row"> 
                    <div className="col-6 col-sm-5 col-md-4 col-xl-3"> 
                        <h3>Ви обрали {totalItems.reduce((acc, item) => acc + 1, 0)} нерухомостей.</h3> 
                    </div> 
                </div> 
            </section> 

 

            <section className="container"> 
                <div className="row"> 
                    {itemsList.map(item => { 
                        return ( 
                            <CardItemComponent card={item} key={item.id} getItem={totalHomesClick} removeItem={removeItem}/> 
                        ); 
                    })} 
                </div> 
            </section> 
        </main> 
    );
};

    export default ListComponents;