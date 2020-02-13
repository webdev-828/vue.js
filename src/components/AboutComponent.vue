<template>
<div class="container row m-0 p-0">
    <h1 class="col-12 pt-3 pb-3 m-0 p-0 h1-custom-size">Om bion</h1>
    <div class="col-12 row m-0 p-0">
        <div class="col-sm-12 col-md-6 hide-on-mobile col">
            <picture class="img-fluid hide-on-mobile">
                <img src="https://pro.boxoffice.com/wp-content/uploads/2018/04/IMG_3865-e1524058912730.jpg">
            </picture>

        </div>
        <div class="col-sm-12 col-md-6 hide-on-mobile col">
            <h3 class="mobile-p hide-on-mobile">Den stora salongen som rymmer 81 biogäster</h3>
            <p class="mobile-p hide-on-mobile">Salongen är utrustad med ljudsystemet Dolby Atmos, som innebär så kallat immersive sound, med upp till 56 ljudkanaler. Projektorn 4K Barco DP4K-32B lyser upp den 19,8 x 8,3 meter eller 168 kvadratmeter stora duken och levererar tillsammans med ljudet en fantastisk upplevelse.
            </p>
        </div>

        <div class="col-sm-12 col-md-6 hide-on-mobile col mt-3">
            <picture class="img-fluid hide-on-mobile">
                <img src="http://luxsupreme.com/wp-content/uploads/2014/06/embassy-diplomat-screens-1-636x310.jpg">
            </picture>

        </div>
        <div class="col-sm-12 col-md-6 hide-on-mobile col mt-3">
            <h3 class="mobile-p hide-on-mobile">Den mysiga lilla salongen som rymmer 56 biogäster</h3>
            <p class="mobile-p hide-on-mobile">Vår lilla salong är vår mysiga VIP-salong som har exklusiva reclinerfåtöljer i skinn och möjlighet att ta in mat och dryck från restaurangen. Dolby Atmos innebär så kallat immersive sound, med upp till 56 ljudkanaler.
            </p>
        </div>

        <div class="mobile-movie-bg col-12 col p-0">
            <picture class="img-fluid">
                <img src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
            </picture>

        </div>
    </div>
    <article class="mobile-p mt-3 ml-3 mr-3">
        <p class="mobile-p">Grand är Malmös mest anrika bio med fullständiga rättigheter, säten av mjuk sammet och inga dumma inloggningar <strong>- som på den goda tiden.</strong></p>

        <h3 class="mt-2 mb-0">Hitta hit</h3>
        <p class="mobile-p">Fina gatan 4, Malmö</p>

        <h3 class="mt-2 mb-0">Telefon</h3>
        <p class="mobile-p">040 - 56 26 00 00</p>

        <h3 class="mt-2 mb-2">Vanliga frågor</h3>
        <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link text-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Finns det sittkuddar för barn?
        </button>
                    </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Ja. Det finns sittkuddar innanför samtliga entrédörrar till salongerna.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Har ni hörslingor?
        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        Ja. Fråga personalen när du scannar din biljett så hjälper de dig.
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Vilka förfriskningar säljer ni?
        </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        Vi har milkshakes, läsk, vin och ett urval av öl.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Säljer ni snacks och mat?
        </button>
                    </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        Vi har ett urval av tjocka amerikanska pizzor som säljs i slicebitar. Vi har även en gammaldags popcornmaskin, sockervadd och godis från lilla godisfabriken här i Malmö. Vegetariska och veganska alternativ finns.
                    </div>
                </div>
            </div>
        </div>

    </article>
</div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    components: {},
    methods: {}
}
</script>

<style scoped>
.desktop-margin-info {
    margin-left: 50px;
}

picture {
    width: 100%;
}

img {
    width: 100%;

}

.embed-responsive {
    border-radius: 10px;
}

.mobile-p {
    padding-bottom: 0.2rem;
    padding-left: 0;
    margin-bottom: 0;
    letter-spacing: 0.025rem;
    text-align: start;
}

.mobile-p p {
    padding-left: 0;
    margin-left: 0;
}

.hide-on-desktop {
    display: none;
}

.hide-on-mobile {
    display: block;
}

.mobile-movie-bg {
    display: none;
}

.h1-custom-size {
    font-size: 3rem !important;
}

@media screen and (max-width: 1024px) {
    .desktop-margin-info {
        margin-left: 0;
    }

    .h1-custom-size {
        font-size: 2rem !important;
    }

    .mobile-margin-info {
        margin: 0;

    }

    .hide-on-desktop {
        display: block;
    }

    picture {
        width: 100%;
    }

    img {
        width: 100%;
    }

    .mobile-movie-bg {
        display: block;
        background-size: cover;
        min-height: 30vh;
    }

    .hide-on-mobile {
        display: none;
    }

    .mobile-p {
        padding-bottom: 0.4rem;
        margin: 0 25px;
        letter-spacing: 0.025rem;
        font-size: 0.75rem;
        text-align: start;
    }

    div>h1 {
        font-size: 1.65rem;
    }

}
</style>
