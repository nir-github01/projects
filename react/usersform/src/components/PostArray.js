import ali_PazaniImg from "../images/pexels-ali-pazani-2613260.png";
import humphreyImg from "../images/pexels-humphrey-muleba-2045248.png";
import heartIcon from "../Icons/heart.svg";
import heartDarkIcon from "../Icons/heartDark.svg";
import commentIcon from "../Icons/comment.svg";
import shareIcon from "../Icons/share.svg";
import thomasJhonImg from "../images/pexels-imad-clicks-9810659.png";
import tobiasImg from "../images/pexels-tobias-bjørkli-2236382@2x.png";

export let PostList = [
  {
    id: 1,
    createrName: "Lara Leaons",
    createrId: "@thewallart",
    title:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    createrImg: ali_PazaniImg,
    postImg: humphreyImg,
    heartIcon: heartIcon,
    likeIcon: heartDarkIcon,
    commentIcon: commentIcon,
    shareIcon: shareIcon,
    likesNum: 3456,
    commentNum: 647,
    shareNum: 747,
  },
  {
    id: 2,
    createrName: "Thomas J.",
    createrId: "@thecustomcreater",
    title:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    createrImg: thomasJhonImg,
    postImg: tobiasImg,
    likeIcon: heartDarkIcon,
    commentIcon: commentIcon,
    shareIcon: shareIcon,
    likesNum: 3456,
    commentNum: 647,
    shareNum: 747,
  },
];
