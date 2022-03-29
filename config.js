var config = {
    style: 'mapbox://styles/coxco96/cl1cf57hb000p14oayl1wweo1',
    accessToken: 'pk.eyJ1IjoiY294Y285NiIsImEiOiJja3BrY2k0ZHgwa3Y0MnZwYTl3NWs4emJ5In0.ItwJEcRmF0LwO1DkHFgpZw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: "Five Accredited Kentucky Colleges Openly and Legally Discriminate On the Grounds of Sexuality, Marital and Parental Status",
    subtitle: "The Surge of Title IX Exemptions Granted in the Last 10 Years",
    byline: 'By Court Cox',
    footer: 'Source: source citations, etc.',
    chapters: [
 
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: '',
            // image: 'images/target.svg',
            description: 'The Religious Exemption Accountability Project (REAP) filed a class action lawsuit in March 2021 against the Department of Education for its “complicity in the abuses and unsafe conditions thousands of LGBTQ+ students endure at hundreds of taxpayer-funded, religious colleges and universities.',
            location: {
                center: [-85.464, 38.597],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "kyexemptschools",
                    opacity: 1
               
                }
            ],
            onChapterExit: [
                {
                    layer: "kyexemptschools",
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: '',
            //image: './path/to/image/source.png',
            description: "Address: 145 Burt Rd, Lexington, KY 40503<br>Website: <a href=https://www.glutenfreemiracles.com>www.glutenfreemiracles.com</a><br>This is Lexington's only dedicated gluten-free kitchen. The owner's son has Celiac Disease.",
            location: {
                center: [-85.464, 38.597],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 500
                }],
            onChapterExit: [
                {
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 500
            }]
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: "Papi's Mexican Restaurant and Bar",
            // image: 'images/target.svg',
            description: 'Address: <br>Website: ',
            location: {
                center: [-84.4925, 38.030],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: "Puccini's Smiling Teeth",
            // image: 'images/target.svg',
            description: 'Address: <br>Website: ',
            location: {
                center: [-84.553, 37.981],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: "Ted's Montana Grill",
            // image: 'images/target.svg',
            description: 'Address: <br>Website: ',
            location: {
                center: [-84.426, 38.023],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: "The Wok",
            // image: 'images/target.svg',
            description: 'Address: <br>Website: ',
            location: {
                center: [-84.529, 38.033],
                zoom: 14.75,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-7',
            alignment: 'left',
            hidden: false,
            title: "Archa Nine Thai Kitchen",
            // image: 'images/target.svg',
            description: 'Address: <br>Website: ',
            location: {
                center: [-84.463, 38.008],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-8',
            alignment: 'left',
            hidden: false,
            title: "Josie's",
            // image: 'images/target.svg',
            description: 'Address: <br>Website: ',
            location: {
                center: [-84.494, 38.027],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-9',
            alignment: 'left',
            hidden: false,
            title: "Blue Sushi Sake Grill",
            // image: 'images/target.svg',
            description: 'Address: <br>Website: ',
            location: {
                center: [-84.531, 37.978],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-10',
            alignment: 'left',
            hidden: false,
            title: "Malone's Landsdowne",
            // image: 'images/target.svg',
            description: 'Address: <br>Website: ',
            location: {
                center: [-84.501, 37.994],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-11',
            alignment: 'left',
            hidden: false,
            title: "Mellow Mushroom",
            // image: 'images/target.svg',
            description: 'Address: <br>Website: ',
            location: {
                center: [-84.507, 38.041],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyexemptschools',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Lexington only has one dedicated gluten-free kitchen.',
            // image: 'images/target.svg',
            description: "[insert legend here]",
            location: {
                center: [-84.558, 38.038],
                zoom: 11.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    // layer: '2019fatalcount',
                    // opacity: 1,
                    // duration: 5000
                }
            ],
            onChapterExit: [
                {
                    // layer: '2019fatalcount',
                    // opacity: 0
                }
            ]
        }
        
    ]
};
