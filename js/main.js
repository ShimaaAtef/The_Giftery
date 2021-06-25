$(document).ready(function() {
    homeSilder()
    features_Cate()
        // prodFilter()
});
// home slider
function homeSilder() {
    $("#hero-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                // nav: true
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
                loop: true
            }
        }
    });
}

// features in the category section
function features_Cate() {
    $('#owl-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
                loop: true
            }
        }
    })
}
// products filter

function prod_Filter(array) {
    $('#products .products_list #all').addClass('active')
    $(".product_item").click(function() {
        // assign the filters vars
        let select_cate = $(this).attr('id');
        // in case of selecting all
        if (select_cate == 'all') {
            // remove before navigation
            $('#products .products_list span').removeClass('active')
            $('#products .item').slideUp('hide-ele');
            setTimeout(function() {
                // display again
                $('#products #' + select_cate).addClass('active')
                $('#products .item').slideDown('hide-ele')
            }, 400);
        }
        // to display the top selling
        if (select_cate == "even") {
            array.forEach((object) => {
                if (object.id % 2 == 0) {
                    $('#products .products_list span').removeClass('active')
                    $('#products #' + select_cate).addClass('active')
                    $('#products .item').fadeOut('hide-ele')
                    setTimeout(function() {
                        $('#products  #' + object.id).slideDown('hide-ele')
                    }, 600)
                }
            })
        }
        // to display the latest
        if (select_cate == "odd") {
            array.forEach((object) => {
                if (object.id % 2 != 0) {
                    $('#products .products_list span').removeClass('active')
                    $('#products #' + select_cate).addClass('active')
                    $('#products .item').fadeOut('hide-ele')
                    setTimeout(function() {
                        $('#products  #' + object.id).slideDown('hide-ele')
                    }, 600)
                }
            })
        }

    })
};


//navbar color change
$(window).scroll(function() {
    let top_scroll = $(this).scrollTop()
    if (top_scroll > 400) {
        $('#navbar').addClass('nav-main')
    } else {
        $('#navbar').removeClass('nav-main')
    }
})


// get api data 
$(window).ready(getProductData())
const productArr = []
async function getProductData() {
    let fetchProd = await fetch(`https://fakestoreapi.com/products`)
    let convertData = await fetchProd.json()
    convertData.forEach((object) => {
            productArr.push(object)
        })
        // invoke the function to display the products
    viewProducts(productArr)

}

function viewProducts(data) {
    const arr = data.splice(2, 9)
    let box = ``
    for (let i = 0; i < arr.length; ++i) {
        box += `<div class="col-lg-4 col-md-6 col-sm-6 item" id="${arr[i].id}">
<div class="product_card pb-2 mt-4">
    <!-- <div class="label d-flex justify-content-around">
        <span class="btn btn-success">new</span>
        <span class="btn btn-danger">-10%</span>
    </div> -->
    <div class="imgs">
    <img src="${arr[i].image}" class="mt-2" alt="">
    </div>
    <div class="content container">
        <h5 class="d-flex mt-4 justify-content-between">
            <span>${arr[i].price}$</span>
            <del class="text-danger">${Math.floor(arr[i].price + 25)}$</del>
        </h5>
        <p class="my-3">${arr[i].title}</p>
        <div class="d-flex action_btns justify-content-center mt-3 mb-3">
            <a href="" class="btn btn-warning">
                <i class="fab fa-gratipay"></i></a>
            <button class="btn btn-main ml-1">
                  <span class="py-1">Add to Cart</span> 
                </button>
            <a href="" class="btn btn-success ml-1 px-3"><i class="fas fa-info"></i></a>
        </div>
    </div>
</div>
</div>
`
    }
    document.getElementById('products_view').innerHTML = box
        // invoke the filter func
    prod_Filter(arr)

}