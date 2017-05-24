// divide by 2 since we want to make icons 32x32 images
var customImageWidth = 64 / 2; // 64 =  sheetWidth / 16
var customImageHeight = 64 / 2; // 64 = sheetHeight / 16

var MarkerTypes = {
    none: {
        icon: "blank.png",
        size: new google.maps.Size(0, 0),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    },
    debug: {
        icon: "debug.png",
        size: new google.maps.Size(23, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(11.5, 32)
    },
    normal: {
        icon: "normal.png",
        size: new google.maps.Size(22, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(11, 32)
    },

    // Custom markers

    // 1st row of the spritemap
    waypoint: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( 0,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 ) // spritemap /2
    },
    jet: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    lift: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 2,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    race: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 3,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    safehouse: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 4,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    helicopter: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 5,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    speech: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 6,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    garage: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 7,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    pill: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 8,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    shop: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 9,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    policeCar: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 10,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    // 11 = shop.. again
    policeStation: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 12,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    hospital: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 13,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    // 14 = helecopter again
    question: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 15,0 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },

    // ROW 2
    moneyTuck: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( 0, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    towTruck: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 1, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    sissors: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 2, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    losSantosCustoms: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 3, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    clothes: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 4, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    tattoo: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 5, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    simeon: { // the letter A
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 6, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    lester: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 7, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    michael: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 8, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    trevor: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 9, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    heist: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 10, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    deathmatch: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 11, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    vinewoodTours: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 12, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    franklin: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 13, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    // 14 = franklin
    chinese: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 15, customImageHeight ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },

    //ROW 3
    airport: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( 0, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    bar: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 1, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    parachute: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 2, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    carWash: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 4, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    comedyClub: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 5, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    darts: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 6, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    // 7 & 8 = H
    fib: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 9, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    // 10 = H
    dollarSign: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 11, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    golf: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 12, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    ammuNation: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 13, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    exile: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 14, customImageHeight * 2 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    // 15 = H

    // ROW 4
    gunRange: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 1, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    solomon: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 2, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    stripClub: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 3, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    tennis: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 4, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    sprint: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 7, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    atvRace: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 8, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    key: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 10, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    movieTheater: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 11, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    music: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 12, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    fireStation: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 13, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    marijuana: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 14, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    animal: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 15, customImageHeight * 3 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },

    // ROW 5
    armsTraffickingGround: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( 0, customImageHeight * 4 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    // CBA doing weapons (won't be shown anyways..)
    pointOfInterest: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 13, customImageHeight * 4 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    gtaPassive: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 14, customImageHeight * 4 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    gtaUsingMenu: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 15, customImageHeight * 4 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    // ROW 6
    armour: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 2, customImageHeight * 5 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    castle: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 3, customImageHeight * 5 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    camera: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 7, customImageHeight * 5 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    cuffs: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 10, customImageHeight * 5 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    yoga: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 12, customImageHeight * 5 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    cab: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 13, customImageHeight * 5 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    therapy: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 14, customImageHeight * 5 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    epsilon: {// some fucked up F
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 15, customImageHeight * 5 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },

    //ROW 7. Not much here we need really.
    jail2: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 10, customImageHeight * 6 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    personalBike: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth *6, customImageHeight * 6 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    personalCar: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth *7, customImageHeight * 6 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    armsTraffickingAir:{
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth *11, customImageHeight * 6 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    fairground: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 15, customImageHeight * 6 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },

    // ROW 8
    propertyManagement: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( 0, customImageHeight * 7 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    alturist: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 1, customImageHeight * 7 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    dollarSign2: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 4, customImageHeight * 7 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    hooker: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 7, customImageHeight * 7 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    jail: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 9, customImageHeight * 7 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    garage: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 10, customImageHeight * 7 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    gtaMission: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 14, customImageHeight * 7 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    gtaSurvival: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 15, customImageHeight * 7 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    // Other basic icons
    dead: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 4, customImageHeight * 8 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    package: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 9, customImageHeight * 11 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    garageForSale: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 3, customImageHeight * 10 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    boat: {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 4, customImageHeight * 13 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    },
    jerryCan : {
        icon: "blips_texturesheet.png",
        size: new google.maps.Size( customImageWidth, customImageHeight ),
        origin: new google.maps.Point( customImageWidth * 8, customImageHeight * 9 ),
        anchor: new google.maps.Point( customImageWidth/2, customImageHeight ),
        scaledSize: new google.maps.Size( 1024/2,1024/2 )
    }
};
