var config = {
    style: 'mapbox://styles/coxco96/cl1cf57hb000p14oayl1wweo1',
    accessToken: 'pk.eyJ1IjoiY294Y285NiIsImEiOiJja3BrY2k0ZHgwa3Y0MnZwYTl3NWs4emJ5In0.ItwJEcRmF0LwO1DkHFgpZw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: "Five Accredited Kentucky Colleges Openly and Legally Discriminate Against LGBTQ+ Students and Applicants",
    subtitle: "",
    byline: 'By Court Cox',
    footer: 'Source: source citations, etc.',
    chapters: [

        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: '',
            // image: 'images/target.svg',
            description: 'The Religious Exemption Accountability Project (REAP) filed a class action lawsuit in March 2021 against the Department of Education for its “complicity in the abuses and unsafe conditions thousands of LGBTQ+ students endure at hundreds of taxpayer-funded, religious colleges and universities.<br><br>“The U.S. Department of Education is duty-bound by Title IX and the U.S. Constitution to protect sexual and gender minority students at taxpayer-funded colleges and universities, including private and religious educational institutions that receive federal funding. The religious exemption to Title IX, however, seemingly permits the Department to breach its duty as to the more than 100,000 sexual and gender minority students attending religious colleges and universities where discrimination on the basis of sexual orientation and gender identity is codified in campus policies and openly practiced,” the allegations read.<br><br>Campus Pride identified 180 religious colleges and universities in the U.S. that “received and/or applied for a Title IX exemption to discriminate against LGBTQ youth” or that “demonstrated past history and track record of anti-LGBTQ actions, programs and practices."<br><br>Five Kentucky institutions made the list.',
            location: {
                center: [-85.464, 38.597],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: "kyexemptschools",
                opacity: 1

            }],
            onChapterExit: [{
                layer: "kyexemptschools",
                opacity: 1
            }]
        },
        {
            id: 'AsburyUniversity',
            alignment: 'left',
            hidden: false,
            title: '',
            //image: 'images/asbury-1.png',
            description: 'Asbury University (left) and Asbury Theological Seminary (right) are two separate institutions separated by the only road with stop lights in Wilmore, Kentucky.<br><br>Asbury University has an enrollment of approximately 1,850 students.<br><br>After a request made by Sandra Gray, the university’s president at the time, Asbury University was granted its Title IX exemption on August 29, 2016.',
            location: {
                center: [-84.663711, 37.863092],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 500
            }],
            onChapterExit: [{
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 500
            }]
        },
        {
            id: 'AsburyUniversity2',
            alignment: 'left',
            hidden: false,
            title: `<a href="https://www.campuspride.org/wp-content/uploads/asbury-university-response-08292016.pdf">Click here to view full exemption letter.</a>`,
            image: 'images/asbury-1.png',
            description: `The letter states that Asbury University has requested and been granted Title IX exemptions as related to "adultery, homosexual behavior, premarital sexual intimacy...[and] elective abortion.<br><br>Asbury's Statement on Human Sexuality says, "We believe that the sin of sexual immorality (e.g., pre-marital sexual behavior, adultery for the
                heterosexually married person, polygamy, polyandry, pornography, incest, and all forms of
                same-sex practice) is about the behavior...We do not surrender the
                biblical standard of sexual purity to the prevailing secular culture, nor the definition of “male”
                and “female” to mean something more or different than a individual’s sex at birth."<br><br>Most puzzling is that a breech of these policies is "almost certain to lead to separation from the university," yet Christianity is markedly not a requirement for admission.`,
            location: {
                center: [-84.663711, 37.863092],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 5000
            }],
            onChapterExit: [{
                // layer: 'kyexemptschools',
                // opacity: 1
            }]
        },
        {
            id: 'ATS',
            alignment: 'right',
            hidden: false,
            title: "In January 2017, Asbury Theological Seminary, across the street, also received Title IX exemption status. You can view the letter <a href='https://www.campuspride.org/wp-content/uploads/asbury-theological-seminary-response-011817.pdf'>here</a>.<br><br>Both Asbury Theological Seminary and Asbury University are accredited by The Southern Association of Colleges and Schools Commission on Colleges (SACSCOC). All colleges listed on this page receive federal funding and tax-payer money.",
            // image: 'images/target.svg',
            description: '',
            location: {
                center: [-84.663711, 37.863092],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 5000
            }],
            onChapterExit: [{
                layer: 'kyexemptschools',
                opacity: 1
            }]
        },
        {
            id: 'ClearCreek',
            alignment: 'left',
            hidden: false,
            title: "Clear Creek Baptist Bible College",
            // image: 'images/target.svg',
            description: 'Clear Creek Baptist Bible College is a small college in Pineville, KY with an enrollment number of just over 200 students.',
            location: {
                center: [-83.72981,  36.725306],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 5000
            }],
            onChapterExit: [{
                layer: 'kyexemptschools',
                opacity: 1
            }]
        },
        {
            id: 'ClearCreek2',
            alignment: 'left',
            hidden: false,
            title: "",
            // image: 'images/target.svg',
            description: 'It is accredited by both the SACSCOC and The Association for Biblical Higher Education. It received Title IX exemption status in March 2016. The letter can be found <a href="https://www.campuspride.org/wp-content/uploads/clear-creek-baptist-bible-college-response-03152016.pdf">here</a>.',
            location: {
                center: [-83.72981,  36.725306],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 5000
            }],
            onChapterExit: [{
                layer: 'kyexemptschools',
                opacity: 1
            }]
        },
        {
            id: 'Cumberlands',
            alignment: 'right',
            hidden: false,
            title: "University of the Cumberlands",
            // image: 'images/target.svg',
            description: 'The University of the Cumberlands is in Williamsburg, Kentucky. It has an enrollment number of about 2,650 students.',
            location: {
                center: [-84.166013,
                    36.737154],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 5000
            }],
            onChapterExit: [{
                layer: 'kyexemptschools',
                opacity: 1
            }]
        },
        {
            id: 'Cumberlands2',
            alignment: 'right',
            hidden: false,
            title: "",
            // image: 'images/target.svg',
            description: 'It received Title IX exemption in March, 2015. The full letter can be found <a href="https://www.campuspride.org/wp-content/uploads/university-of-the-cumberlands-response-03242015.pdf">here</a>.',
            location: {
                center:  [-84.166013,
                    36.737154],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 5000
            }],
            onChapterExit: [{
                layer: 'kyexemptschools',
                opacity: 1
            }]
        },
        {
            id: 'Kentucky Mountain Bible College',
            alignment: 'left',
            hidden: false,
            title: "",
            // image: 'images/target.svg',
            description: 'Kentucky Mountain Bible College sits in Jackson, KY with an enrollment number of just 89 students. It received its Title IX exemption in December 2017, which can be found <a href="https://www.campuspride.org/wp-content/uploads/kentuckybibleresponse.pdf">here</a>.',
            location: {
                center: [ -84.166013,
                    36.737154],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'kyexemptschools',
                opacity: 1,
                //duration: 5000
            }],
            onChapterExit: [{
                layer: 'kyexemptschools',
                opacity: 1
            }]
        }
   
       

    ]
};