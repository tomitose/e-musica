const products = [
    {
        //Epiphone Models

        id: 1,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneWornvintage.png",
        name:"Epiphone Worn Heritage Cherry",
        price: 500,
        stock: 40,
        desc:"Worn Heritage Cherry Sunburst Featuring New “Worn” Finishes and Alnico Classic Pro™ Humbuckers™The new Les Paul™ Classic Worn from the Inspired by Gibson™ Collection offers fans the most popular electric guitar ever made in four new vintage styled 'worn' finishes plus powerful Alnico Classic PRO™ humbuckers. Available in Worn Ebony, Worn Heritage Cherry Sunburst, Worn Purple, and Worn Metallic Gold."
    },
    {
        id: 2,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneWornvintage_gold.png",
        name:"Epiphone Worm Heritage Gold",
        price: 500,
        stock: 30,
        desc:"Worn Heritage Cherry Sunburst Featuring New “Worn” Finishes and Alnico Classic Pro™ Humbuckers™The new Les Paul™ Classic Worn from the Inspired by Gibson™ Collection offers fans the most popular electric guitar ever made in four new vintage styled 'worn' finishes plus powerful Alnico Classic PRO™ humbuckers. Available in Worn Ebony, Worn Heritage Cherry Sunburst, Worn Purple, and Worn Metallic Gold."

    },
    {
        id: 3,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneWornvintage_purple.png",
        name:"Epiphone Worm Heritage Purple",
        price: 500,
        stock: 40,
        desc:"Worn Heritage Cherry Sunburst Featuring New “Worn” Finishes and Alnico Classic Pro™ Humbuckers™The new Les Paul™ Classic Worn from the Inspired by Gibson™ Collection offers fans the most popular electric guitar ever made in four new vintage styled 'worn' finishes plus powerful Alnico Classic PRO™ humbuckers. Available in Worn Ebony, Worn Heritage Cherry Sunburst, Worn Purple, and Worn Metallic Gold."

    },
    {
        id: 4,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneAlpine_black.png",
        name:"Epiphone SG Alpine Black",
        price: 499,
        stock: 40,
        desc:"The Guitar That Powered the First Generation of Hard Rock The Epiphone SG Standard from the new Inspired by Gibson Collection, recreates the legendary 1960s classic that powered the first generation of hard rock and heavy metal bands including The Who, Cream, AC/DC, and Black Sabbath. The guitar features the historic SG profile with “batwing” pickguard, a pair of Epiphone's Alnico Classic PRO™ humbuckers, and 18:1 ratio Epiphone Deluxe Tuners. This Epiphone Inspired by Gibson Original model also has the Kalamazoo headstock, rolled neck for a comfortable feel, GraphTech® NuBone™ nut, era-appropriate wiring, and CTS pots. Optional hardshell or EpiLite Case is available. Available in Heritage Cherry, Ebony, and Alpine White gloss finishes."

    },
    {
        id: 5,
       category:"epiphone",
       img: "/img/Guitars-epiphone/EpiphoneAlpine_cherry.png",
       name:"Epiphone SG Alpine Cherry",
        price: 499,
        stock: 10,
        desc:"The Guitar That Powered the First Generation of Hard Rock The Epiphone SG Standard from the new Inspired by Gibson Collection, recreates the legendary 1960s classic that powered the first generation of hard rock and heavy metal bands including The Who, Cream, AC/DC, and Black Sabbath. The guitar features the historic SG profile with “batwing” pickguard, a pair of Epiphone's Alnico Classic PRO™ humbuckers, and 18:1 ratio Epiphone Deluxe Tuners. This Epiphone Inspired by Gibson Original model also has the Kalamazoo headstock, rolled neck for a comfortable feel, GraphTech® NuBone™ nut, era-appropriate wiring, and CTS pots. Optional hardshell or EpiLite Case is available. Available in Heritage Cherry, Ebony, and Alpine White gloss finishes."

    },
    {
        id: 6,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneAlpine_white.png",
        name:"Epiphone SG Alpine White",
        price: 499,
        stock: 20,
        desc:"The Guitar That Powered the First Generation of Hard Rock The Epiphone SG Standard from the new Inspired by Gibson Collection, recreates the legendary 1960s classic that powered the first generation of hard rock and heavy metal bands including The Who, Cream, AC/DC, and Black Sabbath. The guitar features the historic SG profile with “batwing” pickguard, a pair of Epiphone's Alnico Classic PRO™ humbuckers, and 18:1 ratio Epiphone Deluxe Tuners. This Epiphone Inspired by Gibson Original model also has the Kalamazoo headstock, rolled neck for a comfortable feel, GraphTech® NuBone™ nut, era-appropriate wiring, and CTS pots. Optional hardshell or EpiLite Case is available. Available in Heritage Cherry, Ebony, and Alpine White gloss finishes."

    },
    {
        id: 7,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneSGCherry.png",
        name:"Epiphone SG Maestro Cherry Top",
        price: 600,
        stock: 20,
        desc:"Vintage Cherry Featuring the Maestro™ Vibrola and Powered by ProBucker™ Pickups The Epiphone SG™ Standard 60s Maestro™ Vibrola from the new Inspired by Gibson™ Collection recreates the original SG from 1961 with a newly designed 60s style Maestro Vibrola. Featuring a classic mahogany body in a Vintage Cherry finish and powered by ProBucker™ humbuckers with CTS® potentiometers. (Previously called SG Standard '61 Maestro Vibrola)"

    },
    {
        id: 8,
       category:"epiphone",
       img: "/img/Guitars-epiphone/EpiphoneCasinoWorn_blue.png",
       name:"Epiphone Casino Worn Blue",
        price: 520,
        stock: 20,
        desc:"The Classic Casino in Three New Worn Finishes Since 1961, the Casino™ has been Epiphone’s best-selling archtop and a rock ‘n’ roll standard. Over the years it has been the choice of players including blues legend Howlin' Wolf, Keith Richards of The Rolling Stones, and John Lennon, Paul McCartney and George Harrison of The Beatles. Now available in three new Worn finishes, including Worn Olive Drab, Worn Ebony, and Worn Blue Denim, these Casinos still feature the classic design elements that make the model a legend, including a thin 5-ply maple hollow body, two Dogear P-90 pickups and a mahogany neck with a 60s C profile. Optional hardshell case available separately."

    },
    {
        id: 9,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneCasinoWorn_ebony.png",
        name:"Epiphone Casino Worn Ebony",
        price: 520,
        stock: 20,
        desc:"The Classic Casino in Three New Worn Finishes Since 1961, the Casino™ has been Epiphone’s best-selling archtop and a rock ‘n’ roll standard. Over the years it has been the choice of players including blues legend Howlin' Wolf, Keith Richards of The Rolling Stones, and John Lennon, Paul McCartney and George Harrison of The Beatles. Now available in three new Worn finishes, including Worn Olive Drab, Worn Ebony, and Worn Blue Denim, these Casinos still feature the classic design elements that make the model a legend, including a thin 5-ply maple hollow body, two Dogear P-90 pickups and a mahogany neck with a 60s C profile. Optional hardshell case available separately."

    },
    {
        id: 10,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneCasinoWorn_olive.png",
        name:"Epiphone Casino Worn Olive",
        price: 520,
        stock: 20,
        desc:"The Classic Casino in Three New Worn Finishes Since 1961, the Casino™ has been Epiphone’s best-selling archtop and a rock ‘n’ roll standard. Over the years it has been the choice of players including blues legend Howlin' Wolf, Keith Richards of The Rolling Stones, and John Lennon, Paul McCartney and George Harrison of The Beatles. Now available in three new Worn finishes, including Worn Olive Drab, Worn Ebony, and Worn Blue Denim, these Casinos still feature the classic design elements that make the model a legend, including a thin 5-ply maple hollow body, two Dogear P-90 pickups and a mahogany neck with a 60s C profile. Optional hardshell case available separately."

    },
    {
        id: 11,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneEbony.png",
        name:"Epiphone SG Custom Ebony",
        price: 629,
        stock: 20,
        desc:"Inspired by the 1960s classic with Alnico Classic PRO™ humbuckers! The Epiphone SG Custom from the new Inspired by Gibson Collection recreates the legendary 1960s era SG with “LP-Custom” style binding that became a hard rock and heavy metal classic. The SG debuted in 1961 to replace the Les Paul which had been temporarily discontinued because of low sales. The SG Custom features an Ebony fingerboard, LP Custom style inlay, gold hardware, and Alnico Classic PRO™ humbuckers with CTS electronics. Available in an Ebony finish."

    },
    {
        id: 12,
        category:"epiphone",
        img: "/img/Guitars-epiphone/EpiphoneEmperor_green.png",
        name:"Epiphone Emperor Swing",
        price: 799,
        stock: 30,
        desc:"Forest Green Metallic a Versatile Hollowbody Classic The Epiphone Emperor Swingster™ is a way-cool guitar that excels in a wide range of genres, including jazz, blues, rockabilly, country, and rock. This hollowbody has a 5-ply layered maple body, mahogany neck with a comfortable and fast-playing SlimTaper™ profile, Indian laurel fretboard with block inlays, mother of pearl Epiphone and Tree of Life inlays on the large Clipped Dove Wing headstock, Grover® Rotomatic® tuning machines, and two Epiphone SwingBucker™ pickups, each with a dedicated volume and tone control. Push/pull switches are built into each volume control to provide series/parallel switching for the pickups, and along with the 3-way toggle pickup selector switch, give you a broad selection of tonal options. The LockTone™ Tune-O-Matic™ bridge is mounted on a pinned wooden base so it won't move out of place when you use the licensed Bigsby® vibrato with wire handle. Available in Forest Green Metallic with gold hardware, or Black Aged Gloss and Delta Blue Metallic finishes with nickel hardware."

    },

    // Gibson Models

    {
        id: 13,
        category: "gibson",
        img: "/img/Guitars-gibson/Gibson_bbkingEbony.png",
        name:"Gibson BB King Ebony",
        price: 6999,
        stock: 30
    },
    // {
    //     id: 14,
    //     category: "gibson",
    //     img: "/img/Guitars-gibson/Gibson_bbkingEbony-1.png",
    //     name:"Gibson BB King Ebony",
    //     price: 6999,
    //     stock: 30
    // },
    {
        id: 15,
        category: "gibson",
        img: "/img/Guitars-gibson/Gibson_explorer.png",
        name:"Gibson Explorer ",
        price: 1999,
        stock: 30
    },
    // {
    //     id: 16,
    //     category: "gibson",
    //     img: "/img/Guitars-gibson/Gibson_explorer-1.png",
    //     name:"Gibson Explorer ",
    //     price: 1999,
    //     stock: 30
    // },
    {
        id: 17,
        category: "gibson",
        img: "/img/Guitars-gibson/Gibson_flyingv_korina.png",
        name:"Gibson Flying V Korina",
        price: 9999,
        stock: 10
    },
    // {
    //     id: 18,
    //     category: "gibson",
    //     img: "/img/Guitars-gibson/Gibson_flyingv_korina-1.png",
    //     name:"Gibson Flying V Korina",
    //     price: 9999,
    //     stock: 10
    // },
    {
        id: 19,
        category: "gibson",
        img: "/img/Guitars-gibson/Gibson_lespaul70Delux.png",
        name:"Gibson Les Paul 70 Delux",
        price: 2999,
        stock: 50
    },
    // {
    //     id: 20,
    //     category: "gibson",
    //     img: "/img/Guitars-gibson/Gibson_lespaul70Delux-1.png",
    //     name:"Gibson Les Paul 70 Delux",
    //     price: 2999,
    //     stock: 50
    // },
    {
        id: 21,
        category: "gibson",
        img: "/img/Guitars-gibson/Gibson_lespaulGold.png",
        name:"Gibson Les Paul 50 Gold Top",
        price: 2999,
        stock: 30
    },
    // {
    //     id: 22,
    //     category: "gibson",
    //     img: "/img/Guitars-gibson/Gibson_lespaulGold-1.png",
    //     name:"Gibson Les Paul 50 Gold Top",
    //     price: 2999,
    //     stock: 30
    // }
    // {
    //     id: 23,
    //     category: gibson,
    //     img: "../../assets/img/Guitars-gibson/Gibson_sgStandar",
    //     name:"Gibson SG Standard 61 Maestro ",
    //     price: 2399,
    //     stock: 20
    // },
    // {
    //     id: 24,
    //     category: gibson,
    //     img: "../../assets/img/Guitars-gibson/Gibson_sgStandar-1",
    //     name:"Gibson SG Standard 61 Maestro ",
    //     price: 2399,
    //     stock: 20
    // },
    // {
    //     id: 25,
    //     category: gibson,
    //     img: "../../assets/img/Guitars-gibson/Gibson_firebird",
    //     name:"Gibson Firebird",
    //     price: 1999,
    //     stock: 8
    // },
    // {
    //     id: 26,
    //     category: gibson,
    //     img: "../../assets/img/Guitars-gibson/Gibson_firebird-1",
    //     name:"Gibson Firebird",
    //     price: 1999,
    //     stock: 8
    // },

    // //Acustics Models

    // {
    //     id: 27,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Epihpne_starlight_black",
    //     name:"Epiphone Starlight Black",
    //     price: 149,
    //     stock: 12
    // },
    // {
    //     id: 28,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Epihpne_starlight_blue",
    //     name:"Epiphone Starlight Blue",
    //     price: 149,
    //     stock: 8
    // },
    // {
    //     id: 29,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Epihpne_starlight_pink",
    //     name:"Epiphone Starlight Pink",
    //     price: 149,
    //     stock: 12
    // },
    // {
    //     id: 30,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Epiphone_Ebony",
    //     name:"Epiphone Songmaker FT-100 Black",
    //     price: 169,
    //     stock: 40
    // },
    // {
    //     id: 31,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Epiphone_j200Age",
    //     name:"Epiphone J200 Aged",
    //     price: 949,
    //     stock: 40
    // },
    // {
    //     id: 32,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Epiphone_Pro",
    //     name:"Epiphone J200 Studio Parlor",
    //     price: 549,
    //     stock: 8
    // },
    // {
    //     id: 33,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Epiphone_SongmakerDelux",
    //     name:"Epiphone Songmaker Delux",
    //     price: 239,
    //     stock: 50
    // },
    // {
    //     id: 34,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Gibson_acusticG200",
    //     name:"Gibson Acustic G200",
    //     price: 1999,
    //     stock: 8
    // },
    // {
    //     id: 35,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Gibson_acusticG200-1",
    //     name:"Gibson Acustic G200",
    //     price: 1999,
    //     stock: 8
    // },
    // {
    //     id: 36,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Gibson_acusticSJ200ST",
    //     name:"Gibson Acustic SJ200",
    //     price: 5299,
    //     stock: 8
    // },
    // {
    //     id: 48,
    //     category: acustic,
    //     img: "../../assets/img/Guitars-acustic/Gibson_acusticSJ200ST-1",
    //     name:"Gibson Acustic SJ200",
    //     price: 5299,
    //     stock: 8
    // },
    // {
    //     id: 37,
    //     category: gibson,
    //     img: "../../assets/img/Guitars-acustic/Gibson_acusticVintage",
    //     name:"Gibson Acustic Standard 12 Strings",
    //     price: 3299,
    //     stock: 10
    // },
    // {
    //     id: 38,
    //     category: gibson,
    //     img: "../../assets/img/Guitars-acustic/Gibson_acusticVintage-1",
    //     name:"Gibson Acustic Standard 12 Strings",
    //     price: 3299,
    //     stock: 10
    // },
    // {
    //     id: 39,
    //     category: gibson,
    //     img: "../../assets/img/Guitars-acustic/Gibson_hummingbird",
    //     name:"Gibson Hummingbird",
    //     price: 3999,
    //     stock: 42
    // },
    // {
    //     id: 40,
    //     category: gibson,
    //     img: "../../assets/img/Guitars-acustic/Gibson_hummingbird-1",
    //     name:"Gibson Hummingbird",
    //     price: 3999,
    //     stock: 42
    // },

    // Merch

    // {
    //     id: 41,
    //     category: "merch",
    //     img: "./img/Merch/Epiphone_case.png",
    //     name:"Epiphone Case",
    //     price: 119,
    //     stock: 80
    // },
    // {
    //     id: 42,
    //     category: "merch",
    //     img: "./img/Merch/Epiphone_hardcase.png",
    //     name:"Epiphone Hardcase Box",
    //     price: 149,
    //     stock: 42
    // },
    // {
    //     id: 43,
    //     category: "merch",
    //     img: "./img/Merch/Epiphone_pick.jpg",
    //     name:"Epiphone Pick",
    //     price: 4,
    //     stock: 200
    // },
    // {
    //     id: 44,
    //     category: "merch",
    //     img: "./img/Merch/Gibson_logopatch.png",
    //     name:"Gibson Logo Patch",
    //     price: 10,
    //     stock: 42
    // },  
    // {
    //     id: 45,
    //     category: "merch",
    //     img: "./img/Merch/Gibson_pin.png",
    //     name:"Gibson Pin",
    //     price: 8,
    //     stock: 42
    // },
    // {
    //     id: 46,
    //     category: "merch",
    //     img: "./img/Merch/Guitar_pick.png",
    //     name:"Gibson Pick",
    //     price: 8,
    //     stock: 500
    // },
    // {
    //     id: 47,
    //     category: "merch",
    //     img: "./img/Merch/Guitar_strap.png",
    //     name:"Guitar Strap",
    //     price: 19,
    //     stock: 120
    // }
]

export default products;