/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Symbol_2',
                type: 'rect',
                rect: ['292', '172','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Symbol_2',
                symbolName: 'Symbol_2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1000px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Symbol_2}": [
                ["transform", "scaleX", '1.14516'],
                ["style", "left", '45px'],
                ["transform", "scaleY", '1.10671'],
                ["style", "top", '-160px']
            ],
            "${_Text7}": [
                ["style", "top", '544px'],
                ["style", "left", '506px'],
                ["style", "width", 'auto']
            ],
            "${_Text3}": [
                ["style", "font-size", '26px'],
                ["style", "opacity", '1'],
                ["style", "font-weight", 'bold'],
                ["style", "font-family", '\'Arial Black\', Gadget, sans-serif'],
                ["style", "left", '461px'],
                ["style", "width", 'auto']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 66477,
            autoPlay: true,
            timeline: [
                { id: "eid1733", tween: [ "style", "${_Symbol_2}", "left", '45px', { fromValue: '45px'}], position: 7342, duration: 0 },
                { id: "eid1732", tween: [ "style", "${_Symbol_2}", "top", '-160px', { fromValue: '-160px'}], position: 7342, duration: 0 },
                { id: "eid695", tween: [ "transform", "${_Symbol_2}", "scaleY", '1.10671', { fromValue: '1.10671'}], position: 7085, duration: 0 },
                { id: "eid694", tween: [ "transform", "${_Symbol_2}", "scaleX", '1.14516', { fromValue: '1.14516'}], position: 7085, duration: 0 }            ]
        }
    }
},
"Symbol_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-315px', '-99px', '930px', '775px', 'auto', 'auto'],
                    id: '_5',
                    transform: [[], [], [], ['0.32267', '0.32267']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/5.jpg', '0px', '0px']
                },
                {
                    rect: ['57px', '367px', '335px', 'auto', 'auto', 'auto'],
                    font: ['\'Arial Black\', Gadget, sans-serif', 15, 'rgba(255,255,255,1)', 'bold', 'none', 'normal'],
                    id: 'Text8',
                    text: 'WE Wish  You A Merry Christmas',
                    align: 'center',
                    type: 'text'
                },
                {
                    autoplay: 'autoplay',
                    type: 'audio',
                    source: ['images/we-wish-you-a-merry-christmas.mp3'],
                    id: 'we-wish-you-a-merry-christmas',
                    preload: 'auto',
                    rect: ['583px', '222px', '320px', '45px', 'auto', 'auto'],
                    display: 'none',
                    loop: 'loop',
                    tag: 'audio'
                },
                {
                    rect: ['219px', '313px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', 32, 'rgba(252,252,252,1)', 'bold', 'none', 'normal'],
                    id: 'Text4',
                    text: 'Christmas',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-81px', '163px', '300px', '131px', 'auto', 'auto'],
                    id: 'Bee-Interactive-Ltd--Egypt-17383-1466498175_1',
                    transform: [[], [], [], ['0.42665', '0.51333']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Bee-Interactive-Ltd--Egypt-17383-1466498175%20%281%29.PNG', '0px', '0px']
                },
                {
                    rect: ['31px', '19px', '286px', '285px', 'auto', 'auto'],
                    id: '_454px-Windrose_bluesvg',
                    transform: [[], [], [], ['-0.17879', '0.17875']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/454px-Windrose_blue.svg.png', '0px', '0px']
                },
                {
                    rect: ['31px', '19px', '286px', '285px', 'auto', 'auto'],
                    id: '_454px-Windrose_bluesvgCopy7',
                    transform: [[], [], [], ['-0.17879', '0.17875']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/454px-Windrose_blue.svg.png', '0px', '0px']
                },
                {
                    rect: ['31px', '19px', '285px', '285px', 'auto', 'auto'],
                    id: '_454px-Windrose_bluesvgCopy6',
                    transform: [[], [], [], ['-0.17879', '0.17875']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/454px-Windrose_blue.svg.png', '0px', '0px']
                },
                {
                    rect: ['295px', '306px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Palatino Linotype, Book Antigua, Palatino, serif', 29, 'rgba(252,252,252,1.00)', '700', 'none', ''],
                    id: 'Text',
                    opacity: 1,
                    text: 'MERRY',
                    type: 'text'
                },
                {
                    rect: ['125px', '377px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial Black, Gadget, sans-serif', 48, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                    id: 'Text2',
                    text: 'Happy New Year',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'Bee-Interactive-Ltd--Egypt-17383-1466498175_6',
                    type: 'image',
                    rect: ['13px', '176px', '81px', '41px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Bee-Interactive-Ltd--Egypt-17383-1466498175%20%286%29.PNG', '0px', '0px']
                },
                {
                    id: 'tree',
                    type: 'image',
                    rect: ['231px', '293px', '773px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tree.png', '0px', '0px']
                },
                {
                    rect: ['-72px', '-153px', '695px', '695px', 'auto', 'auto'],
                    id: 'music1',
                    transform: [[], [], [], ['0.05615', '0.05615']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/music1.png', '0px', '0px']
                },
                {
                    id: 'starts2',
                    type: 'image',
                    rect: ['203px', '181px', '349px', '220px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/starts.png', '0px', '0px']
                },
                {
                    rect: ['241px', '171px', '46px', '39px', 'auto', 'auto'],
                    id: 'logo',
                    opacity: 0.76923076923077,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px']
                },
                {
                    id: 'Symbol_1',
                    type: 'rect',
                    rect: ['201', '75', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Symbol_1',
                symbolName: 'Symbol_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_starts2}": [
                ["style", "top", '109px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '91px'],
                ["style", "opacity", '0.0099999997764826'],
                ["style", "left", '117px'],
                ["style", "width", '159px']
            ],
            "${_Bee-Interactive-Ltd--Egypt-17383-1466498175_1}": [
                ["style", "top", '163px'],
                ["transform", "scaleX", '0.42665'],
                ["transform", "scaleY", '0.51333'],
                ["style", "left", '-81px']
            ],
            "${_we-wish-you-a-merry-christmas}": [
                ["style", "top", '170px'],
                ["style", "height", '50px'],
                ["property", "volume", '1'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '355px'],
                ["style", "width", '256px']
            ],
            "${__5}": [
                ["style", "top", '-99px'],
                ["transform", "scaleY", '0.32267'],
                ["style", "height", '775px'],
                ["transform", "scaleX", '0.32267'],
                ["style", "-webkit-transform-origin", [50,51], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-315px'],
                ["style", "width", '930px']
            ],
            "${symbolSelector}": [
                ["style", "height", '536px'],
                ["style", "width", '620px']
            ],
            "${_Text4}": [
                ["style", "top", '313px'],
                ["color", "color", 'rgba(196,13,13,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '69px'],
                ["style", "font-size", '32px']
            ],
            "${_logo}": [
                ["style", "top", '235px'],
                ["transform", "rotateZ", '-48deg'],
                ["style", "height", '39px'],
                ["style", "opacity", '0'],
                ["style", "left", '241px'],
                ["style", "width", '46px']
            ],
            "${__454px-Windrose_bluesvg}": [
                ["style", "top", '112px'],
                ["style", "height", '285px'],
                ["transform", "scaleY", '0.17875'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '-0.17879'],
                ["style", "opacity", '0'],
                ["style", "left", '-82px'],
                ["style", "width", '286px']
            ],
            "${_Text8}": [
                ["style", "top", '313px'],
                ["style", "font-size", '15px'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '51px'],
                ["style", "opacity", '0'],
                ["style", "left", '7px'],
                ["style", "width", '220px']
            ],
            "${__454px-Windrose_bluesvgCopy6}": [
                ["style", "top", '68px'],
                ["style", "height", '285px'],
                ["transform", "scaleY", '0.17875'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '-0.17879'],
                ["style", "opacity", '0'],
                ["style", "left", '8px'],
                ["style", "width", '285px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(252,252,252,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '84px'],
                ["style", "font-size", '29px'],
                ["style", "top", '268px'],
                ["style", "height", '65px'],
                ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif'],
                ["style", "width", 'auto'],
                ["style", "opacity", '0']
            ],
            "${_Bee-Interactive-Ltd--Egypt-17383-1466498175_6}": [
                ["style", "height", '41px'],
                ["style", "top", '176px'],
                ["style", "left", '13px'],
                ["style", "width", '81px']
            ],
            "${__454px-Windrose_bluesvgCopy7}": [
                ["style", "top", '112px'],
                ["style", "height", '285px'],
                ["transform", "scaleY", '0.17875'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '-0.17879'],
                ["style", "opacity", '0'],
                ["style", "left", '91px'],
                ["style", "width", '286px']
            ],
            "${_Text2}": [
                ["style", "font-weight", '700'],
                ["color", "color", 'rgba(213,199,202,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '125px'],
                ["style", "width", '107px'],
                ["style", "top", '451px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'center'],
                ["subproperty", "filter.invert", '0.02'],
                ["style", "height", '67px'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_music1}": [
                ["style", "top", '-153px'],
                ["transform", "scaleY", '0.05615'],
                ["style", "height", '695px'],
                ["transform", "scaleX", '0.05615'],
                ["style", "left", '-72px'],
                ["style", "width", '695px']
            ],
            "${_tree}": [
                ["style", "top", '293px'],
                ["transform", "scaleY", '2.29'],
                ["transform", "scaleX", '2.29'],
                ["style", "height", '72px'],
                ["style", "opacity", '0'],
                ["style", "left", '231px'],
                ["style", "width", '56px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 66477,
            autoPlay: true,
            timeline: [
                { id: "eid101", tween: [ "style", "${__454px-Windrose_bluesvgCopy7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 530 },
                { id: "eid102", tween: [ "style", "${__454px-Windrose_bluesvgCopy7}", "opacity", '0', { fromValue: '1'}], position: 530, duration: 640 },
                { id: "eid103", tween: [ "style", "${__454px-Windrose_bluesvgCopy7}", "opacity", '0.73983739837398', { fromValue: '0'}], position: 1170, duration: 810 },
                { id: "eid158", tween: [ "style", "${__454px-Windrose_bluesvgCopy7}", "opacity", '0.034188034188034', { fromValue: '0.7398369908332825'}], position: 1980, duration: 255 },
                { id: "eid236", tween: [ "style", "${_starts2}", "height", '91px', { fromValue: '91px'}], position: 3080, duration: 0 },
                { id: "eid143", tween: [ "color", "${_Text2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(213,199,202,1)'}], position: 295, duration: 330 },
                { id: "eid123", tween: [ "style", "${__454px-Windrose_bluesvg}", "top", '112px', { fromValue: '112px'}], position: 1980, duration: 0 },
                { id: "eid854", tween: [ "color", "${_Text4}", "color", 'rgba(196,13,13,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(196,13,13,1.00)'}], position: 1375, duration: 0 },
                { id: "eid12", tween: [ "transform", "${__454px-Windrose_bluesvg}", "rotateZ", '254deg', { fromValue: '0deg'}], position: 0, duration: 1170 },
                { id: "eid15", tween: [ "transform", "${__454px-Windrose_bluesvg}", "rotateZ", '537deg', { fromValue: '254deg'}], position: 1170, duration: 810 },
                { id: "eid105", tween: [ "transform", "${__454px-Windrose_bluesvgCopy7}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 60 },
                { id: "eid134", tween: [ "transform", "${__454px-Windrose_bluesvgCopy7}", "rotateZ", '254deg', { fromValue: '10deg'}], position: 60, duration: 1110 },
                { id: "eid106", tween: [ "transform", "${__454px-Windrose_bluesvgCopy7}", "rotateZ", '485deg', { fromValue: '254deg'}], position: 1170, duration: 810 },
                { id: "eid132", tween: [ "style", "${__454px-Windrose_bluesvgCopy7}", "left", '91px', { fromValue: '91px'}], position: 1980, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Text}", "opacity", '0.37606837606838', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid137", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.37606837606838'}], position: 250, duration: 185 },
                { id: "eid160", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 435, duration: 0 },
                { id: "eid139", tween: [ "style", "${_Text}", "opacity", '0.0085470085470085', { fromValue: '1'}], position: 1850, duration: 325 },
                { id: "eid256", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '0.008547'}], position: 2750, duration: 720 },
                { id: "eid233", tween: [ "style", "${_starts2}", "top", '176px', { fromValue: '109px'}], position: 2462, duration: 559 },
                { id: "eid1790", tween: [ "style", "${_starts2}", "top", '187px', { fromValue: '176px'}], position: 3021, duration: 59 },
                { id: "eid872", tween: [ "style", "${_starts2}", "top", '191px', { fromValue: '187px'}], position: 3080, duration: 131 },
                { id: "eid873", tween: [ "style", "${_starts2}", "top", '187px', { fromValue: '191px'}], position: 3211, duration: 1559 },
                { id: "eid439", tween: [ "style", "${_starts2}", "top", '0px', { fromValue: '187px'}], position: 4770, duration: 500 },
                { id: "eid914", tween: [ "style", "${_tree}", "width", '42px', { fromValue: '56px'}], position: 5564, duration: 576 },
                { id: "eid238", tween: [ "style", "${_starts2}", "width", '159px', { fromValue: '159px'}], position: 3080, duration: 0 },
                { id: "eid306", tween: [ "style", "${_Text2}", "width", '107px', { fromValue: '107px'}], position: 2510, duration: 0 },
                { id: "eid752", tween: [ "style", "${_we-wish-you-a-merry-christmas}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid731", tween: [ "style", "${_we-wish-you-a-merry-christmas}", "display", 'none', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid244", tween: [ "style", "${_Text2}", "opacity", '0.008547', { fromValue: '0'}], position: 45, duration: 250 },
                { id: "eid144", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0.008547'}], position: 295, duration: 185 },
                { id: "eid249", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0'}], position: 575, duration: 0 },
                { id: "eid250", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0'}], position: 625, duration: 0 },
                { id: "eid245", tween: [ "style", "${_Text2}", "opacity", '0.025641025641026', { fromValue: '0'}], position: 750, duration: 1290 },
                { id: "eid592", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.025641025641026'}], position: 2655, duration: 0 },
                { id: "eid593", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '1'}], position: 3505, duration: 0 },
                { id: "eid396", tween: [ "style", "${_Text2}", "opacity", '0.95726495726496', { fromValue: '1'}], position: 3750, duration: 170 },
                { id: "eid451", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0.9572650194168091'}], position: 4809, duration: 330 },
                { id: "eid122", tween: [ "style", "${__454px-Windrose_bluesvg}", "left", '-82px', { fromValue: '-82px'}], position: 1980, duration: 0 },
                { id: "eid338", tween: [ "style", "${_Text4}", "left", '69px', { fromValue: '69px'}], position: 1028, duration: 0 },
                { id: "eid131", tween: [ "style", "${__454px-Windrose_bluesvgCopy7}", "top", '112px', { fromValue: '112px'}], position: 1980, duration: 0 },
                { id: "eid898", tween: [ "style", "${_Text8}", "top", '313px', { fromValue: '313px'}], position: 5999, duration: 0 },
                { id: "eid307", tween: [ "style", "${_Text}", "left", '84px', { fromValue: '84px'}], position: 1165, duration: 0 },
                { id: "eid96", tween: [ "transform", "${__454px-Windrose_bluesvgCopy6}", "rotateZ", '254deg', { fromValue: '0deg'}], position: 0, duration: 1170 },
                { id: "eid97", tween: [ "transform", "${__454px-Windrose_bluesvgCopy6}", "rotateZ", '478deg', { fromValue: '254deg'}], position: 1170, duration: 810 },
                { id: "eid129", tween: [ "style", "${__454px-Windrose_bluesvgCopy6}", "top", '68px', { fromValue: '68px'}], position: 1980, duration: 0 },
                { id: "eid979", tween: [ "transform", "${_logo}", "rotateZ", '-2deg', { fromValue: '-48deg'}], position: 6566, duration: 2454 },
                { id: "eid303", tween: [ "style", "${_Text2}", "height", '67px', { fromValue: '67px'}], position: 2510, duration: 0 },
                { id: "eid485", tween: [ "style", "${_tree}", "opacity", '0.96581196581197', { fromValue: '0'}], position: 5564, duration: 686 },
                { id: "eid289", tween: [ "style", "${_Text2}", "font-size", '16px', { fromValue: '16px'}], position: 3350, duration: 0 },
                { id: "eid528", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid529", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 205, duration: 0 },
                { id: "eid530", tween: [ "style", "${_Text8}", "opacity", '0.0028449914529915', { fromValue: '0'}], position: 530, duration: 65 },
                { id: "eid531", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0.0028449914529915'}], position: 595, duration: 265 },
                { id: "eid535", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 910, duration: 0 },
                { id: "eid534", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 1210, duration: 0 },
                { id: "eid536", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 1785, duration: 0 },
                { id: "eid537", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 1985, duration: 0 },
                { id: "eid538", tween: [ "style", "${_Text8}", "opacity", '0.00055097435897436', { fromValue: '0'}], position: 2235, duration: 135 },
                { id: "eid540", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0.00055097435897436'}], position: 2370, duration: 92 },
                { id: "eid539", tween: [ "style", "${_Text8}", "opacity", '0.012384982905983', { fromValue: '0'}], position: 2462, duration: 103 },
                { id: "eid541", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0.012384982905983'}], position: 2565, duration: 200 },
                { id: "eid542", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 2765, duration: 0 },
                { id: "eid724", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 2855, duration: 0 },
                { id: "eid725", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 3080, duration: 0 },
                { id: "eid545", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 3350, duration: 0 },
                { id: "eid546", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 3575, duration: 0 },
                { id: "eid550", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 4849, duration: 0 },
                { id: "eid551", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 5044, duration: 0 },
                { id: "eid552", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 5169, duration: 0 },
                { id: "eid553", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 5374, duration: 0 },
                { id: "eid554", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '0'}], position: 5634, duration: 0 },
                { id: "eid555", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 5724, duration: 232 },
                { id: "eid959", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid971", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 6090, duration: 476 },
                { id: "eid987", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '1'}], position: 7166, duration: 0 },
                { id: "eid988", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '1'}], position: 7663, duration: 0 },
                { id: "eid989", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '1'}], position: 7903, duration: 0 },
                { id: "eid990", tween: [ "style", "${_logo}", "opacity", '0.93906301412827', { fromValue: '1'}], position: 8003, duration: 119 },
                { id: "eid1024", tween: [ "style", "${_logo}", "opacity", '0.025641025641026', { fromValue: '1'}], position: 9574, duration: 76 },
                { id: "eid861", tween: [ "style", "${_Text8}", "height", '51px', { fromValue: '51px'}], position: 8508, duration: 0 },
                { id: "eid240", tween: [ "subproperty", "${_Text2}", "filter.invert", '0.02', { fromValue: '0.02'}], position: 2985, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 530, duration: 915 },
                { id: "eid326", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 1445, duration: 535 },
                { id: "eid969", tween: [ "style", "${_logo}", "top", '252px', { fromValue: '235px'}], position: 6090, duration: 476 },
                { id: "eid984", tween: [ "style", "${_logo}", "top", '141px', { fromValue: '252px'}], position: 9500, duration: 150 },
                { id: "eid765", tween: [ "style", "${_starts2}", "opacity", '0', { fromValue: '0.0099999997764826'}], position: 0, duration: 315 },
                { id: "eid235", tween: [ "style", "${_starts2}", "opacity", '1', { fromValue: '0'}], position: 2462, duration: 618 },
                { id: "eid445", tween: [ "style", "${_starts2}", "opacity", '0.63247863247863', { fromValue: '1'}], position: 4809, duration: 120 },
                { id: "eid446", tween: [ "style", "${_starts2}", "opacity", '0', { fromValue: '0.6324790120124817'}], position: 4929, duration: 210 },
                { id: "eid862", tween: [ "style", "${_Text8}", "width", '220px', { fromValue: '220px'}], position: 8508, duration: 0 },
                { id: "eid308", tween: [ "style", "${_Text}", "top", '268px', { fromValue: '268px'}], position: 1165, duration: 0 },
                { id: "eid304", tween: [ "style", "${_Text2}", "top", '377px', { fromValue: '451px'}], position: 2510, duration: 240 },
                { id: "eid241", tween: [ "style", "${_Text2}", "top", '365px', { fromValue: '377px'}], position: 2750, duration: 235 },
                { id: "eid273", tween: [ "style", "${_Text2}", "top", '352px', { fromValue: '365px'}], position: 2985, duration: 226 },
                { id: "eid870", tween: [ "style", "${_Text2}", "top", '285px', { fromValue: '352px'}], position: 3211, duration: 389 },
                { id: "eid232", tween: [ "style", "${_starts2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3080, duration: 0 },
                { id: "eid1949", tween: [ "style", "${_starts2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3080, duration: 0 },
                { id: "eid1950", tween: [ "style", "${_starts2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3080, duration: 0 },
                { id: "eid1951", tween: [ "style", "${_starts2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3080, duration: 0 },
                { id: "eid1952", tween: [ "style", "${_starts2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3080, duration: 0 },
                { id: "eid911", tween: [ "style", "${_tree}", "height", '55px', { fromValue: '72px'}], position: 5564, duration: 576 },
                { id: "eid133", tween: [ "style", "${__454px-Windrose_bluesvgCopy6}", "left", '8px', { fromValue: '8px'}], position: 1980, duration: 0 },
                { id: "eid8", tween: [ "style", "${__454px-Windrose_bluesvg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 530 },
                { id: "eid9", tween: [ "style", "${__454px-Windrose_bluesvg}", "opacity", '0', { fromValue: '1'}], position: 530, duration: 640 },
                { id: "eid10", tween: [ "style", "${__454px-Windrose_bluesvg}", "opacity", '0.73983739837398', { fromValue: '0'}], position: 1170, duration: 810 },
                { id: "eid157", tween: [ "style", "${__454px-Windrose_bluesvg}", "opacity", '0.034188034188034', { fromValue: '0.7398369908332825'}], position: 1980, duration: 255 },
                { id: "eid92", tween: [ "style", "${__454px-Windrose_bluesvgCopy6}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 530 },
                { id: "eid93", tween: [ "style", "${__454px-Windrose_bluesvgCopy6}", "opacity", '0', { fromValue: '1'}], position: 530, duration: 640 },
                { id: "eid94", tween: [ "style", "${__454px-Windrose_bluesvgCopy6}", "opacity", '0.73983739837398', { fromValue: '0'}], position: 1170, duration: 810 },
                { id: "eid156", tween: [ "style", "${__454px-Windrose_bluesvgCopy6}", "opacity", '0.1025641025641', { fromValue: '0.7398369908332825'}], position: 1980, duration: 255 },
                { id: "eid795", tween: [ "property", "${_we-wish-you-a-merry-christmas}", "volume", '1', { fromValue: '1'}], position: 0, duration: 9000 },
                { id: "eid874", tween: [ "style", "${_starts2}", "left", '117px', { fromValue: '117px'}], position: 3211, duration: 0 }            ]
        }
    }
},
"Symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ballCopy2',
                    type: 'image',
                    rect: ['1px', '7px', '51px', '120px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ball.png', '0px', '0px']
                },
                {
                    id: 'ballCopy4',
                    type: 'image',
                    rect: ['98px', '0px', '51px', '120px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ball.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '127px'],
                ["style", "width", '149px']
            ],
            "${_ballCopy4}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "width", '29px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '70px'],
                ["transform", "skewY", '0deg'],
                ["motion", "location", '123.004375px 60px']
            ],
            "${_ballCopy2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "width", '30px'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '25.5156px 67px'],
                ["style", "height", '70px'],
                ["transform", "scaleY", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 29975,
            autoPlay: true,
            timeline: [
                { id: "eid1237", tween: [ "transform", "${_ballCopy2}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 7129, duration: 1584 },
                { id: "eid1238", tween: [ "transform", "${_ballCopy2}", "rotateZ", '-20deg', { fromValue: '18deg'}], position: 8713, duration: 1720 },
                { id: "eid1239", tween: [ "transform", "${_ballCopy2}", "rotateZ", '15deg', { fromValue: '-20deg'}], position: 10433, duration: 1574 },
                { id: "eid1240", tween: [ "transform", "${_ballCopy2}", "rotateZ", '5deg', { fromValue: '15deg'}], position: 12008, duration: 602 },
                { id: "eid1367", tween: [ "transform", "${_ballCopy2}", "rotateZ", '15deg', { fromValue: '5deg'}], position: 12610, duration: 1503 },
                { id: "eid1373", tween: [ "transform", "${_ballCopy2}", "rotateZ", '-20deg', { fromValue: '15deg'}], position: 14253, duration: 2205 },
                { id: "eid1375", tween: [ "transform", "${_ballCopy2}", "rotateZ", '15deg', { fromValue: '-20deg'}], position: 16458, duration: 1516 },
                { id: "eid1377", tween: [ "transform", "${_ballCopy2}", "rotateZ", '-33deg', { fromValue: '15deg'}], position: 17974, duration: 1722 },
                { id: "eid1379", tween: [ "transform", "${_ballCopy2}", "rotateZ", '11deg', { fromValue: '-33deg'}], position: 19696, duration: 1905 },
                { id: "eid1381", tween: [ "transform", "${_ballCopy2}", "rotateZ", '-2deg', { fromValue: '11deg'}], position: 21601, duration: 1975 },
                { id: "eid1244", tween: [ "motion", "${_ballCopy2}", [[25.52, 67, 0, 0],[-73.61, 147.28, -3.13, 95.87]]], position: 6955, duration: 387 },
                { id: "eid1719", tween: [ "style", "${_ballCopy2}", "width", '30px', { fromValue: '30px'}], position: 7342, duration: 0 },
                { id: "eid1305", tween: [ "transform", "${_ballCopy4}", "scaleY", '1', { fromValue: '1'}], position: 7129, duration: 0 },
                { id: "eid1304", tween: [ "style", "${_ballCopy4}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1953", tween: [ "style", "${_ballCopy4}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1954", tween: [ "style", "${_ballCopy4}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1955", tween: [ "style", "${_ballCopy4}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1956", tween: [ "style", "${_ballCopy4}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1313", tween: [ "motion", "${_ballCopy4}", [[123, 60, 0, 0],[-10.32, 158.92, -45.57, 105.3]]], position: 6374, duration: 968 },
                { id: "eid1310", tween: [ "transform", "${_ballCopy4}", "scaleX", '1', { fromValue: '1'}], position: 7129, duration: 0 },
                { id: "eid1306", tween: [ "transform", "${_ballCopy4}", "rotateZ", '-18deg', { fromValue: '0deg'}], position: 7129, duration: 318 },
                { id: "eid1316", tween: [ "transform", "${_ballCopy4}", "rotateZ", '18deg', { fromValue: '-18deg'}], position: 7447, duration: 964 },
                { id: "eid1307", tween: [ "transform", "${_ballCopy4}", "rotateZ", '-20deg', { fromValue: '18deg'}], position: 8411, duration: 1393 },
                { id: "eid1308", tween: [ "transform", "${_ballCopy4}", "rotateZ", '15deg', { fromValue: '-20deg'}], position: 9804, duration: 1274 },
                { id: "eid1309", tween: [ "transform", "${_ballCopy4}", "rotateZ", '-17deg', { fromValue: '15deg'}], position: 11078, duration: 1532 },
                { id: "eid1370", tween: [ "transform", "${_ballCopy4}", "rotateZ", '15deg', { fromValue: '-17deg'}], position: 12610, duration: 1390 },
                { id: "eid1372", tween: [ "transform", "${_ballCopy4}", "rotateZ", '-20deg', { fromValue: '15deg'}], position: 14000, duration: 2458 },
                { id: "eid1374", tween: [ "transform", "${_ballCopy4}", "rotateZ", '15deg', { fromValue: '-20deg'}], position: 16458, duration: 1516 },
                { id: "eid1376", tween: [ "transform", "${_ballCopy4}", "rotateZ", '-33deg', { fromValue: '15deg'}], position: 17974, duration: 1722 },
                { id: "eid1378", tween: [ "transform", "${_ballCopy4}", "rotateZ", '11deg', { fromValue: '-33deg'}], position: 19696, duration: 1905 },
                { id: "eid1380", tween: [ "transform", "${_ballCopy4}", "rotateZ", '-2deg', { fromValue: '11deg'}], position: 21601, duration: 1975 },
                { id: "eid1144", tween: [ "transform", "${_ballCopy2}", "skewY", '0deg', { fromValue: '0deg'}], position: 6090, duration: 0 },
                { id: "eid1235", tween: [ "transform", "${_ballCopy2}", "skewY", '0deg', { fromValue: '0deg'}], position: 7129, duration: 0 },
                { id: "eid1471", tween: [ "style", "${_ballCopy2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid1469", tween: [ "style", "${_ballCopy2}", "opacity", '0', { fromValue: '0'}], position: 1805, duration: 0 },
                { id: "eid1473", tween: [ "style", "${_ballCopy2}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0 },
                { id: "eid1475", tween: [ "style", "${_ballCopy2}", "opacity", '0.11111099222022', { fromValue: '0'}], position: 6510, duration: 490 },
                { id: "eid1477", tween: [ "style", "${_ballCopy2}", "opacity", '1', { fromValue: '0.11111099222022'}], position: 7000, duration: 129 },
                { id: "eid1483", tween: [ "style", "${_ballCopy2}", "opacity", '1', { fromValue: '1'}], position: 7265, duration: 0 },
                { id: "eid1489", tween: [ "style", "${_ballCopy2}", "opacity", '1', { fromValue: '1'}], position: 21820, duration: 0 },
                { id: "eid1433", tween: [ "style", "${_ballCopy2}", "opacity", '0.70940170940171', { fromValue: '1'}], position: 21860, duration: 2545 },
                { id: "eid1435", tween: [ "style", "${_ballCopy2}", "opacity", '0.063408399239565', { fromValue: '0.7094020247459412'}], position: 24405, duration: 550 },
                { id: "eid1495", tween: [ "style", "${_ballCopy2}", "opacity", '0', { fromValue: '0.063408399239565'}], position: 24955, duration: 2895 },
                { id: "eid1497", tween: [ "style", "${_ballCopy2}", "opacity", '0.29059860594252', { fromValue: '0'}], position: 27850, duration: 650 },
                { id: "eid1437", tween: [ "style", "${_ballCopy2}", "opacity", '0', { fromValue: '0.29059898853302'}], position: 28500, duration: 500 },
                { id: "eid1499", tween: [ "style", "${_ballCopy2}", "opacity", '0.094017791951823', { fromValue: '0'}], position: 29000, duration: 690 },
                { id: "eid1501", tween: [ "style", "${_ballCopy2}", "opacity", '0', { fromValue: '0.09401799738407135'}], position: 29690, duration: 285 },
                { id: "eid1311", tween: [ "transform", "${_ballCopy4}", "skewY", '0deg', { fromValue: '0deg'}], position: 6090, duration: 0 },
                { id: "eid1312", tween: [ "transform", "${_ballCopy4}", "skewY", '0deg', { fromValue: '0deg'}], position: 7129, duration: 0 },
                { id: "eid1314", tween: [ "transform", "${_ballCopy4}", "skewX", '0deg', { fromValue: '0deg'}], position: 6090, duration: 0 },
                { id: "eid1315", tween: [ "transform", "${_ballCopy4}", "skewX", '0deg', { fromValue: '0deg'}], position: 7129, duration: 0 },
                { id: "eid1717", tween: [ "style", "${_ballCopy4}", "width", '29px', { fromValue: '29px'}], position: 7342, duration: 0 },
                { id: "eid1143", tween: [ "transform", "${_ballCopy2}", "skewX", '0deg', { fromValue: '0deg'}], position: 6090, duration: 0 },
                { id: "eid1236", tween: [ "transform", "${_ballCopy2}", "skewX", '0deg', { fromValue: '0deg'}], position: 7129, duration: 0 },
                { id: "eid1231", tween: [ "transform", "${_ballCopy2}", "scaleX", '1', { fromValue: '1'}], position: 7129, duration: 0 },
                { id: "eid1470", tween: [ "style", "${_ballCopy4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid1468", tween: [ "style", "${_ballCopy4}", "opacity", '0', { fromValue: '0'}], position: 1805, duration: 0 },
                { id: "eid1472", tween: [ "style", "${_ballCopy4}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0 },
                { id: "eid1474", tween: [ "style", "${_ballCopy4}", "opacity", '0.11111099222022', { fromValue: '0'}], position: 6510, duration: 490 },
                { id: "eid1476", tween: [ "style", "${_ballCopy4}", "opacity", '1', { fromValue: '0.11111099222022'}], position: 7000, duration: 129 },
                { id: "eid1482", tween: [ "style", "${_ballCopy4}", "opacity", '1', { fromValue: '1'}], position: 7265, duration: 0 },
                { id: "eid1488", tween: [ "style", "${_ballCopy4}", "opacity", '1', { fromValue: '1'}], position: 21820, duration: 0 },
                { id: "eid1432", tween: [ "style", "${_ballCopy4}", "opacity", '0.70940170940171', { fromValue: '1'}], position: 21860, duration: 2545 },
                { id: "eid1434", tween: [ "style", "${_ballCopy4}", "opacity", '0.063408399239565', { fromValue: '0.7094020247459412'}], position: 24405, duration: 550 },
                { id: "eid1494", tween: [ "style", "${_ballCopy4}", "opacity", '0', { fromValue: '0.063408399239565'}], position: 24955, duration: 2895 },
                { id: "eid1496", tween: [ "style", "${_ballCopy4}", "opacity", '0.29059860594252', { fromValue: '0'}], position: 27850, duration: 650 },
                { id: "eid1436", tween: [ "style", "${_ballCopy4}", "opacity", '0', { fromValue: '0.29059898853302'}], position: 28500, duration: 500 },
                { id: "eid1498", tween: [ "style", "${_ballCopy4}", "opacity", '0.094017791951823', { fromValue: '0'}], position: 29000, duration: 690 },
                { id: "eid1500", tween: [ "style", "${_ballCopy4}", "opacity", '0', { fromValue: '0.09401799738407135'}], position: 29690, duration: 285 },
                { id: "eid1718", tween: [ "style", "${_ballCopy2}", "height", '70px', { fromValue: '70px'}], position: 7342, duration: 0 },
                { id: "eid1716", tween: [ "style", "${_ballCopy4}", "height", '70px', { fromValue: '70px'}], position: 7342, duration: 0 },
                { id: "eid1233", tween: [ "style", "${_ballCopy2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1957", tween: [ "style", "${_ballCopy2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1958", tween: [ "style", "${_ballCopy2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1959", tween: [ "style", "${_ballCopy2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1960", tween: [ "style", "${_ballCopy2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 7129, duration: 0 },
                { id: "eid1232", tween: [ "transform", "${_ballCopy2}", "scaleY", '1', { fromValue: '1'}], position: 7129, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-19445769");
