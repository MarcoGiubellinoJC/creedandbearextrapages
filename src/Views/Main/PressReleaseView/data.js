//Assets
import Image1 from "../../../Assets/logos/partners/invest_logo.png";
import Image2 from "../../../Assets/logos/partners/lyotrade.png";
import Image3 from "../../../Assets/logos/partners/mount10.png";
import Image4 from "../../../Assets/logos/partners/premiax.png";
import Image5 from "../../../Assets/logos/partners/protocol33.png";

const highlightPostData = {
    id: 0,
    title: "This is the title",
    shortCaption: "This is the short caption. Lorem ipsum dolor sit amet consectetur adipiscing. This is the short caption. Lorem ipsum dolor sit amet consectetur adipiscing. This is the short caption. Lorem ipsum dolor sit amet consectetur adipiscing.",
    frontImage: "https://via.placeholder.com/650x400.webp/aa3333",
    topic: "Crypto",
    timetoread: '5 min'
}

const postList = [
    { ...highlightPostData, id: 1 },
    { ...highlightPostData, id: 2 },
    { ...highlightPostData, id: 3 },
    { ...highlightPostData, id: 4 },
    { ...highlightPostData, id: 5 },
    { ...highlightPostData, id: 6 },
    { ...highlightPostData, id: 7 },
    { ...highlightPostData, id: 8 },
    { ...highlightPostData, id: 9 },
    { ...highlightPostData, id: 10 },
    { ...highlightPostData, id: 11 },
    { ...highlightPostData, id: 12 },
    { ...highlightPostData, id: 13 },
    { ...highlightPostData, id: 14 },
    { ...highlightPostData, id: 15 },
    { ...highlightPostData, id: 16 },
    { ...highlightPostData, id: 17 },
    { ...highlightPostData, id: 18 },
    { ...highlightPostData, id: 19 },
    { ...highlightPostData, id: 20 },
    { ...highlightPostData, id: 21 },
    { ...highlightPostData, id: 22 },
    { ...highlightPostData, id: 23 },
    { ...highlightPostData, id: 24 },
    { ...highlightPostData, id: 25 },
    { ...highlightPostData, id: 26 },
    { ...highlightPostData, id: 27 },
    { ...highlightPostData, id: 28 },
    { ...highlightPostData, id: 29 },
    { ...highlightPostData, id: 30 },
    { ...highlightPostData, id: 31 },
    { ...highlightPostData, id: 32 },
    { ...highlightPostData, id: 33 },
]

const partners = [
    {
        src: Image5,
        link: "https://www.lyotrade.com/",
    },
    {
        src: Image2,
        link: "https://protocol33.io/",
    },
    {
        src: Image3,
        link: "https://www.premiax.com/",
    },
    {
        src: Image4,
        link: "https://mount10.ch/en/",
    },
    {
        src: Image1,
        link: "https://hamdan.ae/",
    },
];

export { postList, highlightPostData, partners }