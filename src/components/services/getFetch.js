const products = [
    {
        //Epiphone Models

        id: 1,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneWornvintage",
        name:"Epiphone Worm Vintage",
        price: 500,
        stock: 40
    },
    {
        id: 2,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneWornVintage_gold",
        name:"Epiphone Worm Vintage Gold",
        price: 500,
        stock: 30
    },
    {
        id: 3,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneWornVintage_purple",
        name:"Epiphone Worm Vintage Purple",
        price: 500,
        stock: 40
    },
    {
        id: 4,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneAlpine_black",
        name:"Epiphone SG Alpine Black",
        price: 450,
        stock: 40
    },
    {
        id: 5,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneAlpine_cherry",
        name:"Epiphone SG Alpine Cherry",
        price: 450,
        stock: 10
    },
    {
        id: 6,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneAlpine_white",
        name:"Epiphone SG Alpine White",
        price: 450,
        stock: 20
    },
    {
        id: 7,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneSGCherry",
        name:"Epiphone SG Alpine Cherry Top",
        price: 600,
        stock: 20
    },
    {
        id: 8,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneCasinoWorn_blue",
        name:"Epiphone Casino Worn Blue",
        price: 520,
        stock: 20
    },
    {
        id: 9,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneCasinoWorn_ebony",
        name:"Epiphone Casino Worn Ebony",
        price: 520,
        stock: 20
    },
    {
        id: 10,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneCasinoWorn_olive",
        name:"Epiphone Casino Worn Olive",
        price: 520,
        stock: 20
    },
    {
        id: 11,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneEbony",
        name:"Epiphone SG Custom Ebony",
        price: 629,
        stock: 20
    },
    {
        id: 12,
        category:epiphone,
        img: "../../assets/img/Guitars-epiphone/EpiphoneEmperor_green",
        name:"Epiphone Emperor Swing",
        price: 799,
        stock: 30
    },

    //// Gibson Models

    {
        id: 13,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_bbkingEbony",
        name:"Gibson BB King Ebony",
        price: 6999,
        stock: 30
    },
    {
        id: 14,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_bbkingEbony-1",
        name:"Gibson BB King Ebony",
        price: 6999,
        stock: 30
    },
    {
        id: 15,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_explorer",
        name:"Gibson Explorer ",
        price: 1999,
        stock: 30
    },
    {
        id: 16,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_explorer-1",
        name:"Gibson Explorer ",
        price: 1999,
        stock: 30
    },
    {
        id: 17,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_flyingv_korina",
        name:"Gibson Flying V Korina",
        price: 9999,
        stock: 10
    },
    {
        id: 18,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_flyingv_korina-1",
        name:"Gibson Flying V Korina",
        price: 9999,
        stock: 10
    },
    {
        id: 19,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_lespaul70Delux",
        name:"Gibson Les Paul 70 Delux",
        price: 2999,
        stock: 50
    },
    {
        id: 20,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_lespaul70Delux-1",
        name:"Gibson Les Paul 70 Delux",
        price: 2999,
        stock: 50
    },
    {
        id: 21,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_lespaulGold",
        name:"Gibson Les Paul 50 Gold Top",
        price: 2999,
        stock: 30
    },
    {
        id: 22,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_lespaulGold-1",
        name:"Gibson Les Paul 50 Gold Top",
        price: 2999,
        stock: 30
    },
    {
        id: 23,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_sgStandar",
        name:"Gibson SG Standard 61 Maestro ",
        price: 2399,
        stock: 20
    },
    {
        id: 24,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_sgStandar-1",
        name:"Gibson SG Standard 61 Maestro ",
        price: 2399,
        stock: 20
    },
    {
        id: 25,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_firebird",
        name:"Gibson Firebird",
        price: 1999,
        stock: 8
    },
    {
        id: 26,
        category: gibson,
        img: "../../assets/Guitars-gibson/Gibson_firebird-1",
        name:"Gibson Firebird",
        price: 1999,
        stock: 8
    },

    //Acustics Models

    {
        id: 27,
        category: acustic,
        img: "../../assets/Guitars-acustic/Epihpne_starlight_black",
        name:"Epiphone Starlight Black",
        price: 149,
        stock: 12
    },
    {
        id: 28,
        category: acustic,
        img: "../../assets/Guitars-acustic/Epihpne_starlight_blue",
        name:"Epiphone Starlight Blue",
        price: 149,
        stock: 8
    },
    {
        id: 29,
        category: acustic,
        img: "../../assets/Guitars-acustic/Epihpne_starlight_pink",
        name:"Epiphone Starlight Pink",
        price: 149,
        stock: 12
    },
    {
        id: 30,
        category: acustic,
        img: "../../assets/Guitars-acustic/Epiphone_Ebony",
        name:"Epiphone Songmaker FT-100 Black",
        price: 169,
        stock: 40
    },
    {
        id: 31,
        category: acustic,
        img: "../../assets/Guitars-acustic/Epiphone_j200Age",
        name:"Epiphone J200 Aged",
        price: 949,
        stock: 40
    },
    {
        id: 32,
        category: acustic,
        img: "../../assets/Guitars-acustic/Epiphone_Pro",
        name:"Epiphone J200 Studio Parlor",
        price: 549,
        stock: 8
    },
    {
        id: 33,
        category: acustic,
        img: "../../assets/Guitars-acustic/Epiphone_SongmakerDelux",
        name:"Epiphone Songmaker Delux",
        price: 239,
        stock: 50
    },
    {
        id: 34,
        category: acustic,
        img: "../../assets/Guitars-acustic/Gibson_acusticG200",
        name:"Gibson Acustic G200",
        price: 1999,
        stock: 8
    },
    {
        id: 35,
        category: acustic,
        img: "../../assets/Guitars-acustic/Gibson_acusticG200-1",
        name:"Gibson Acustic G200",
        price: 1999,
        stock: 8
    },
    {
        id: 36,
        category: acustic,
        img: "../../assets/Guitars-acustic/Gibson_acusticSJ200ST",
        name:"Gibson Acustic SJ200",
        price: 5299,
        stock: 8
    },
    {
        id: 48,
        category: acustic,
        img: "../../assets/Guitars-acustic/Gibson_acusticSJ200ST-1",
        name:"Gibson Acustic SJ200",
        price: 5299,
        stock: 8
    },
    {
        id: 37,
        category: gibson,
        img: "../../assets/Guitars-acustic/Gibson_acusticVintage",
        name:"Gibson Acustic Standard 12 Strings",
        price: 3299,
        stock: 10
    },
    {
        id: 38,
        category: gibson,
        img: "../../assets/Guitars-acustic/Gibson_acusticVintage-1",
        name:"Gibson Acustic Standard 12 Strings",
        price: 3299,
        stock: 10
    },
    {
        id: 39,
        category: gibson,
        img: "../../assets/Guitars-acustic/Gibson_hummingbird",
        name:"Gibson Hummingbird",
        price: 3999,
        stock: 42
    },
    {
        id: 40,
        category: gibson,
        img: "../../assets/Guitars-acustic/Gibson_hummingbird-1",
        name:"Gibson Hummingbird",
        price: 3999,
        stock: 42
    },

    // Merch

    {
        id: 41,
        category: merch,
        img: "../../assets/Merch/Epiphone_case",
        name:"Epiphone Case",
        price: 119,
        stock: 80
    },
    {
        id: 42,
        category: merch,
        img: "../../assets/Merch/Epiphone_hardcase",
        name:"Epiphone Hardcase Box",
        price: 149,
        stock: 42
    },
    {
        id: 43,
        category: merch,
        img: "../../assets/Merch/Epiphone_pick",
        name:"Epiphone Pick",
        price: 4,
        stock: 200
    },
    {
        id: 44,
        category: merch,
        img: "../../assets/Merch/Gibson_logopatch",
        name:"Gibson Logo Patch",
        price: 10,
        stock: 42
    },  
    {
        id: 45,
        category: merch,
        img: "../../assets/Merch/Gibson_pin",
        name:"Gibson Pin",
        price: 8,
        stock: 42
    },
    {
        id: 46,
        category: merch,
        img: "../../assets/Merch/Guitar_pick",
        name:"Gibson Pick",
        price: 8,
        stock: 500
    },
    {
        id: 47,
        category: merch,
        img: "../../assets/Merch/Guitar_strap",
        name:"Guitar Strap",
        price: 19,
        stock: 120
    }
]

export default products;