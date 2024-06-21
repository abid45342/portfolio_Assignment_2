
// function handleShowMoreProducts()
// {   

//     const projectContainer = document.getElementById("a");
//     const  firstRowDiv  =   document.createElement("div");
//     firstRowDiv.innerHTML=`   <div id="product-cart" class="product-cart">
//         <div id="first-row" class="first-row">

//             <div class="item">
//                 <img src="images/gyro-sandwich1-1650490757 1.png"
//                 alt="">
//                 <h3>Gyro Sandwhic <span class="star">★</span> <span class="rating">4.9</span></h3>
//                 <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                

//             </div>

//             <div class="item">
//                 <img src="images/gyro-sandwich1-1650490757 1.png"
//                 alt="">
//                 <h3>Gyro Sandwhic <span class="star">★</span> <span class="rating">4.9</span></h3>
//                 <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                

//             </div>

//             <div class="item">
//                 <img src="images/gyro-sandwich1-1650490757 1.png"
//                 alt="">
//                 <h3>Gyro Sandwhic <span class="star">★</span> <span class="rating">4.9</span></h3>
//                 <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                

//             </div>

//         </div>

//         <div class="second-row">
//             <div class="item">
//                 <img src="images/gyro-sandwich1-1650490757 1.png"
//                 alt="">
//                 <h3>Gyro Sandwhic <span class="star">★</span> <span class="rating">4.9</span></h3>
//                 <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                

//             </div>

//             <div class="item">
//                 <img src="images/gyro-sandwich1-1650490757 1.png"
//                 alt="">
//                 <h3>Gyro Sandwhic <span class="star">★</span> <span class="rating">4.9</span></h3>
//                 <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                

//             </div>

//             <div class="item">
//                 <img src="images/gyro-sandwich1-1650490757 1.png"
//                 alt="">
//                 <h3>Gyro Sandwhic <span class="star">★</span> <span class="rating">4.9</span></h3>
//                 <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                

//             </div>
//         </div>

        

//     </div>`
    

    

    
//     projectContainer.appendChild(firstRowDiv);
//     console.log(firstRowDiv);
    

    
// };




let isShowingMoreProducts = false;

function handleShowMoreProducts() {   
    const projectContainer = document.getElementById("a");
    
    // Check if the additional products are already appended
    const existingProducts = document.getElementById("additional-product-cart");

    if (isShowingMoreProducts) {
        // If products are already shown, remove them
        if (existingProducts) {
            projectContainer.removeChild(existingProducts);
        }
        isShowingMoreProducts = false;
    } else {
        // If products are not shown, create and append them
        const firstRowDiv = document.createElement("div");
        firstRowDiv.setAttribute("id", "additional-product-cart");
        firstRowDiv.innerHTML = `
            <div class="product-cart">
                <div id="first-row" class="first-row">
                    <div class="item">
                        <img src="images/gyro-sandwich1-1650490757 1.png" alt="">
                        <h3>Gyro Sandwich <span class="star">★</span> <span class="rating">4.9</span></h3>
                        <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                    </div>
                    <div class="item">
                        <img src="images/gyro-sandwich1-1650490757 1.png" alt="">
                        <h3>Gyro Sandwich <span class="star">★</span> <span class="rating">4.9</span></h3>
                        <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                    </div>
                    <div class="item">
                        <img src="images/gyro-sandwich1-1650490757 1.png" alt="">
                        <h3>Gyro Sandwich <span class="star">★</span> <span class="rating">4.9</span></h3>
                        <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                    </div>
                </div>
                <div class="second-row">
                    <div class="item">
                        <img src="images/gyro-sandwich1-1650490757 1.png" alt="">
                        <h3>Gyro Sandwich <span class="star">★</span> <span class="rating">4.9</span></h3>
                        <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                    </div>
                    <div class="item">
                        <img src="images/gyro-sandwich1-1650490757 1.png" alt="">
                        <h3>Gyro Sandwich <span class="star">★</span> <span class="rating">4.9</span></h3>
                        <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                    </div>
                    <div class="item">
                        <img src="images/gyro-sandwich1-1650490757 1.png" alt="">
                        <h3>Gyro Sandwich <span class="star">★</span> <span class="rating">4.9</span></h3>
                        <div class="add-to-cart"><button>Add To Cart</button><span>$15.00</span></div>
                    </div>
                </div>
            </div>`;
        
        projectContainer.appendChild(firstRowDiv);
        isShowingMoreProducts = true;
    }

    console.log("Toggled products visibility. Now showing: ", isShowingMoreProducts);
};

function handleContact(){
    event.preventDefault();
    console.log("click");
    const msgg=document.getElementById("msg");
    msgg.innerHTML=`<p > Subcription Successfull !</p>`


}
